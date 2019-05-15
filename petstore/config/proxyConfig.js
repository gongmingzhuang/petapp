// config/proxyConfig.js

var config = require("../src/fetch/config");
module.exports = {
  proxy: {
    [config.ROOT]: { //需要代理的接口，一般会加前缀来区分，但我个人是没加，即‘/’都转发代理
      target: config.PROXYROOT, // 接口域名
      changeOrigin: true, //是否跨域
      pathRewrite: {
        [`^/`]: '' //需要rewrite的，针对上面的配置，是不需要的
      }
    }
  }
}
