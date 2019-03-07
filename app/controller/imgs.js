'use strict';

const { Controller } = require('egg');
class uploadImages extends Controller {
  async info() {
    const { ctx } = this; 
    const {query} = ctx;
    const data = await ctx.service.img.find(ctx);
    ctx.body = data;
  }
}
module.exports = uploadImages;