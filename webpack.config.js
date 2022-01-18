const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
          {
              test:/\.css$/,
              use: ['style-loader','css-loader'],
          },
              
          
          {
            test: /\.(png)$/,
            use: ['file-loader']
        }
      ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },

  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  devtool: process.env.NODE_ENV === 'development' ?  'eval-cheap-module-source-map' : 'source-map'
};