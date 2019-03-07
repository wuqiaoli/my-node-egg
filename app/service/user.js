const Service = require('egg').Service;

class UserService extends Service {
  async find(ctx) {
    let size = ctx.query.size;
    let page = ctx.query.page;
    let sort = ctx.query.sort;
    const reg = /^\+?[1-9][0-9]*$/ ;
    !reg.test(size) ? size = 10 : size;
    !reg.test(page) ? page = 0 : page = (page - 1)*size;
    sort == '' ? sort = 'id,desc' : sort ;
    const formatSort = sort.split(',')
    const total = await this.app.mysql.select('home');
    const listData = await this.app.mysql.select('home',{
    	orders:[formatSort],
    	limit: size, 
  		offset: page, 
    });
    return {
      status: 200,
      name: `hello 请求成功`,
      result:listData,
      total:total.length
    }
  }
}

module.exports = UserService;