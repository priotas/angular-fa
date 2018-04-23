const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

let libraryName = '[name]';
let outputFile = libraryName + '.js';

const config = env => {
  return {
    entry: {
      'angular-fa': './src/angular-fa.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: outputFile,
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: {
      angular: {
        commonjs: 'angular',
        commonjs2: 'angular',
        amd: 'angular',
        root: 'angular'
      },
      '@fortawesome/fontawesome': {
        commonjs: 'fontawesome"',
        commonjs2: 'fontawesome',
        amd: 'fontawesome',
        root: 'fontawesome'
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            },
            { loader: 'eslint-loader' }
          ]
        }
      ]
    }
  };
};

module.exports = config;
