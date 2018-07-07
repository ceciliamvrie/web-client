const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';

console.log('path: ', path.join(__dirname, './public/index.html'))

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: process.env.PROD === true ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
        }],
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.SERVER_ADDRESS,
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    }),
    new webpack.DefinePlugin({
      "SERVER_ADDRESS": JSON.stringify(process.env.SERVER_ADDRESS)
    }),
  ]
};
