const Service = require('egg').Service;
class validateForm extends Service {
	async submitForm(ctx) {
		console.log(ctx,'post请求')
		return {
			status: 200,
		    name: `hello 请求成功`,
		}
	}
}
module.exports =  validateForm
