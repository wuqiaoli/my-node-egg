'use strict';
const Controller = require('egg').Controller;
const formidable = require('formidable');
class UploadExcel extends Controller {
    async excel() {
        const { ctx } = this;
        console.log(ctx,'获取请求信息')
        return ctx.body = {
            status:200,
            message:'请求成功'
        }
    }
}
module.exports = UploadExcel;
