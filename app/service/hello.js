'use strict';

module.exports = app => {
  class Hello extends app.Service {
    async say() {
      return '我是服务端消息!';
    }
  }
  return Hello;
};