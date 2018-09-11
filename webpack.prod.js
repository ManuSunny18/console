const merge = require('webpack-merge')
const path = require('path');
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].[contenthash].js', 
  },
  module:{
      rules:[
          {
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //use: ['css-loader', 'sass-loader'],
                use:[
                  {
                    loader: 'css-loader',
                    options: {
                      publicPath:"public"
                    }
                  },
                  {
                    loader:'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
                ]
            })
          }
      ]
  },
  plugins:[
    new ExtractTextPlugin('/css/style.css'),
    new WebpackAssetsManifest({
      "output": "fileManifest.json"
    })
  ]
})