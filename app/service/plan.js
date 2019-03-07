const Service = require('egg').Service;

class GetPlan extends Service {
  async find(ctx) {
    const total = await this.app.mysql.select('plan');
    if(!total){
    	return {
	      status: 200,
	      message:'暂无数据'
	    }
    }
    return {
      status: 200,
      result:total,
      message:'请求成功'
    }
  }
  async del(query){
      if(!query.id){
         return {
            status: 204,
            message:'参数错误'
         }
      }
      const total = await this.app.mysql.delete('plan',{
        id: query.id
      });
      return{
          status: 200,
          message:'删除成功',
      }
  }
}

module.exports = GetPlan;

