module.exports = app => {
  class Test extends app.Service {
    async list() {
	  	const listData = await this.app.mysql.select('ics_stores');

      return listData;
    }
  }
  return Test;
};