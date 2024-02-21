const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(

    createProxyMiddleware("/v1",{
      // target: '//192.168.2.31', //服务器接口地址
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: { "^/v1": "/v1" },
    }),
    
  )
}