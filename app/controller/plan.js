'use strict';

const Controller = require('egg').Controller;

class GetPlans extends Controller {
  async index() {
    const { ctx } = this; 
    const {query} = ctx;
    const data = await ctx.service.plan.find(ctx);
    ctx.body = data;
  }
  async delete() {
  	const { ctx } = this; 
    const data = await ctx.service.plan.del(ctx.request.body);
    ctx.body = data;
  }
}

module.exports = GetPlans;
