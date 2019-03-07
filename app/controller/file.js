'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const md5 = require('md5');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
// //日期格式化
const sd = require('silly-datetime'); 
class UploadFile extends Controller {
    async upFile() {
        const { ctx } = this;
        // 第一步：获取文件
        const stream = await ctx.getFileStream();
        // 第二步：获取文件名(不带后缀)
        const fileName = stream.filename;
        // 第三步：对文件名进行加密
        const md5FileName = md5(fileName);
        // 第四步：获取完整的文件名(带后缀)
        const fullName = md5FileName + path.extname(fileName).toLocaleLowerCase();
        // 第五步：生成文件保存的路径
        const target = path.join(this.config.baseDir, 'app/public/files', fullName); 
        // 第六步：把文件写入指定路径
        const writeStream = fs.createWriteStream(target);
        // 最后：返回数据
        let result = {};
            result.url = 'http://localhost:9000/api/public/files/' + fullName;
        try {
            // 异步写入
            await awaitWriteStream(stream.pipe(writeStream));
            // 第七步：插入数据库
            await this.app.mysql.insert('img_list',
                {
                    url:result.url,
                    upTime:sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                    status:'done',
                    name:fileName,
                    thumbUrl:result.url
                })
            result.status = '200';
            result.message ='上传成功'
        } catch(err) {
            // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            await sendToWormhole(stream);
            result.status = '400';
            result.message ='上传失败'
        }
        return ctx.body = result
    }
}
module.exports = UploadFile;

