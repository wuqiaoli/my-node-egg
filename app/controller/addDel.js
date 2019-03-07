const Controller = require('egg').Controller;
class SaveAdd extends Controller {
  async add() {
  	const { ctx } = this;
  	const data = await ctx.service.addDel.save(ctx);
    this.ctx.body = data;
  }
}

module.exports = SaveAdd;