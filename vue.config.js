const docsLoader = require.resolve('./docs-loader.js')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .tap(options => {
          const tmpOptions = {
            ...options,
            loaders: {
              'docs': docsLoader
            }
          }
          console.log('tmpOptions', tmpOptions)
          return tmpOptions
        })
  }
}