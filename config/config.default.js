'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1545635604569_5037';
  config.middleware = [];
  // 数据库插件
 	config.mysql = {
	  	client: {
		    host: '',
		    port: '3306',
		    user: '',
		    password: '',
		    database: '',
	  	},
	  	app: true,
	  	agent: false,
  	}
  	//参数校验
  config.validate = {
  	// convert: false,
  	// validateRoot: false,
  };
  config.security = {
      csrf: false
  };
  // websocket 配置
  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
    },
    '/chat': {
      connectionMiddleware: [ 'auth' ],
      packetMiddleware: [],
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 7001
    // }
  };
  // 跨域配置
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return config;
};
