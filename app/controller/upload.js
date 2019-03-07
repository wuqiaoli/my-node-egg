'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
//文件读写流 ready 库，能够使用 await await-stream-ready 使用 await 进行文件上传
const awaitWriteStream = require('await-stream-ready').write;
//将 stream 流消耗掉 而 stream-wormhole 是因为如果上传失败出现异常，那会导致浏览器响应崩溃，因此需要将 stream 消耗掉。
const sendToWormhole = require('stream-wormhole');
//加密
const md5 = require('md5');
//日期格式化
const sd = require('silly-datetime'); 
class UploadController extends Controller {
    async Image() {
        const { ctx } = this; 
        // 获取文件流 对文件系统上的文件读取、写入、打开和关闭。
        const stream = await ctx.getFileStream();
        //生成文件名
        const filename = md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
        //文件生成绝对路径
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
        //生成一个文件写入 文件流
        const writeStream = fs.createWriteStream(target);
        let result = {};
        result.url = '/public/uploads/' + filename;
        try {
            //异步把文件流 写入
            await awaitWriteStream(stream.pipe(writeStream));
            // 插入img_list 表
            await this.app.mysql.insert('img_list',
                {
                    url:'http://localhost:9000/api'+ result.url,
                    upTime:sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'),
                    status:'done',
                    name:stream.filename,
                    thumbUrl:'http://localhost:9000/api' + result.url
                })
            result.status = '200';
            result.message ='上传成功'
        } catch (err) {
            // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            await sendToWormhole(stream);
            result.status = '400';
            result.message ='上传失败'
        }
        return ctx.body = result
    }
}
module.exports = UploadController;
