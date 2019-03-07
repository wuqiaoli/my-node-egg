const Controller = require('egg').Controller;
class HomeController extends Controller {
  async submit() {
  	const { ctx } = this;
  	const data = await ctx.service.form.submitForm(ctx);
    this.ctx.body = data;
  }
}

module.exports = HomeController;