const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/datalab/shopping/category/keyword/age',
    createProxyMiddleware({
      target: process.env.REACT_APP_NAVER_SHOPPING_INSIGHT,
      changeOrigin: true,
    })
  );
};