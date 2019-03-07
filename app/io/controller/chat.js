module.exports = app => {
  class Controller extends app.Controller {
    async index() {
      const message = this.ctx.args[0];
      console.log('chat :', message);
      const say = await this.ctx.service.hello.say();
      console.log(say,'chatjs')
      this.ctx.socket.emit('res', say);
    }
  }
  return Controller;
};