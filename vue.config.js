'use strict'

module.exports = {
    baseUrl: process.env.baseUrl,
    devServer: {
        proxy: {
            '/api': {
                target: process.env.apiUrl,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 关闭eslint
    lintOnSave: false,
    configureWebpack: {
        devtool: 'source-map'
    },
    transpileDependencies: [ 'strip-ansi', 'ansi-regex' ]
}
