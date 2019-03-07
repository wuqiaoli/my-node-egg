'use strict';
module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1545635604569_5037';
  config.middleware = [];
  // 数据库插件
 	config.mysql = {
	  	client: {
		    host: 'rm-bp19tybve1b98k8fqpo.mysql.rds.aliyuncs.com',
		    port: '3306',
		    user: 'chengxi_dev',
		    password: '!@#Chengxi',
		    database: 'shouhou_dev_t',
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
