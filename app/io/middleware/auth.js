module.exports = app => {
  return async (ctx, next) => {
    const say = await ctx.service.hello.say();
    ctx.socket.emit('res', say);
    console.log(say)
    await next();
  };
};