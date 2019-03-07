'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '请求响应返回的结果测试库';
  }
}

module.exports = HomeController;
