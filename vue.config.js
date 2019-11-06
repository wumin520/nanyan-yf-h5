module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  publicPath: '/m',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://back.run4wd.com/',
        ws: true,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/', // rewrite path
        // },
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }
}
