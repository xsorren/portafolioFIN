const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/contact', // <-- or whatever path segment precedes your server side routes
    createProxyMiddleware({
      target: "https://git.heroku.com/contactoapi.git", // <-- or whatever your proxy endpoint is
      changeOrigin: true,
      secure: false
    })
  );
};