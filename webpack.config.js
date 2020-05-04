const path = require('path');

module.exports = {
  entry: './src/controller.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'main.js'
  },
  devServer: {
    port: 9020,
  }
};