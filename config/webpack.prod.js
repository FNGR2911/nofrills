const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new OptimizeCSSAssetsPlugin({})],
})
