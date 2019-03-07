const Service = require('egg').Service;

class loginCount extends Service {
  async find(ctx) {
    let name = ctx.query.username;
    let word = ctx.query.password;
    let total = await this.app.mysql.select('user', {
        where: { username : name, password: word}
    });
    if(!total.length){
      total[0] = '用户不存在'
    }
    let result = {
      status: 200,
      name: `hello 请求成功`,
      data: total[0]
    }
    return result
  }
}

module.exports = loginCount;