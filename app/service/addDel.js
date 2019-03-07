const Service = require('egg').Service;
const sd = require('silly-datetime'); 

class SavePlan extends Service {
	async save(ctx) {
		let params = ctx.request.body;
		//表单校验
		const createRule = {
		  name: {
		    type: 'string',
		  },
		  content: {
		    type: 'string',
		  }
		};
		ctx.validate(createRule,params);
		let time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
		const goal = await this.app.mysql.insert('plan',{
			name:  params.name,
			content: params.content,
			createTime: time,
			upDateTime: time
		});
	    return{
	        status: 200,
	        message:'保存成功',
	    }
		
	}
}
module.exports =  SavePlan
