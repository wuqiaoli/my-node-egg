const { Controller } = require('egg');
class UserLogin extends Controller {
  async login() {
    const { ctx } = this; 
    const {query} = ctx;
    const data = await ctx.service.login.find(ctx);
    ctx.body = data;
  }
}
module.exports = UserLogin;