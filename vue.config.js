const path = require('path')
const webpack = require('webpack')
const SvgStorePlugin = require('external-svg-sprite-loader/lib/SvgStorePlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}
// let baseUrl = '/'

module.exports = {
  configureWebpack: {
    output: {
      chunkFilename: 'js/[name].[id].[chunkhash:5].js'
    },
    resolve: {
      extensions: [ '.js', '.vue', '.scss', '.sass', '.json', '.yml', '.yaml' ],
      alias: {
        'src': resolve('src'),
        'com': resolve('src/components'),
        'mod': resolve('src/modules')
      }
    },
    module: {
      rules: [{
        test: /icons\/.*\.svg$/,
        loader: 'external-svg-sprite-loader',
        options: {
          name: 'img/sprite.svg',
          prefix: 'icon',
          svgoOptions: {
            plugins: [{
              removeTitle: true
            }, {
              removeUselessStrokeAndFill: true
            }]
          }
        }
      }, {
        test: /\.ya?ml$/,
        use: {
          loader: 'yaml-import-loader',
          options: {
            importRoot: false,
            importNested: true,
            importKeyword: 'import',
            importRawKeyword: 'import-raw',
            output: 'object'
          }
        }
      }]
    },
    plugins: [
      new SvgStorePlugin(),
      new ExtractTextPlugin('css/app.css')
    ]
  },
  chainWebpack: config => {
    config.module.rule('svg').exclude
      .add(resolve('src/assets/icons'))
    
    // config.plugin('html').tap(([config]) => {
    //   config.template = resolve('./public/index.ejs')
    //   config.baseUrl = baseUrl
    //   return [ config ]
    // })
  }
}
console.log('hdhfhhf')
