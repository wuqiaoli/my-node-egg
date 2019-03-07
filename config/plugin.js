'use strict';
// 开启数据库
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 验证插件
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
// 开启跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
// 开启 websocket
exports.io = {
  enable:true,
  package:'egg-socket.io'
}
