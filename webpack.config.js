const path = require('path');

module.exports = {
  entry: './lib/web.js',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'bundle.js'
  }
};
