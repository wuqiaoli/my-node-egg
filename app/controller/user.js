'use strict';

const { Controller } = require('egg');
class UserController extends Controller {
  async info() {
    const { ctx } = this; 
    const {query} = ctx;
    const data = await ctx.service.user.find(ctx);
    ctx.body = data;
  }
}
module.exports = UserController;