const Service = require('egg').Service;

class ImgService extends Service {
  async find(ctx) {
    const total = await this.app.mysql.select('img_list',{orders:[['upTime','desc']]});
    return {
      status: 200,
      name: `hello 请求成功`,
      result:total,
    }
  }
}

module.exports = ImgService;