const { Controller } = require('egg');
class TestController extends Controller {
  async index() {
    const { ctx } = this; 
    // const {query} = ctx;
    const data = await ctx.service.test.list();
    ctx.body = data;
  }
}
module.exports = TestController;