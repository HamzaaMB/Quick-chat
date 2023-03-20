const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api',
    /*Update this line if your API is accessable on a port other than 8000*/
      { target: 'http://localhost:8000' } 
    )
  )
}