'use strict';
// 定义路由规则
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/login', 'login.login');
  router.get('/user', 'user.info'); //'user.info' == controller.home.index 简写形式
  router.post('/form','form.submit');
  router.post('/upload','upload.Image');
  router.get('/img','imgs.info');
  router.post('/uploadFile','file.upFile');
  router.post('/uploadExcel','xls.excel');
  router.post('/save','addDel.add');
  router.get('/plan','plan.index');
  router.post('/plan/delete','plan.delete');
  //websocket
  io.route('chat',io.controller.chat.index);
  io.of('/chat').route('chat', io.controller.chat.index);

  //后台测试库
   router.get('/test','test.index');
};
