
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    // host: 'localhost',
    host: '192.168.0.89',
    port: 8080,
    proxy: {  // 设置代理
      '/api': {
        // target: 'http://localhost:8888',
        target: 'http://192.168.0.83:8888',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
};
