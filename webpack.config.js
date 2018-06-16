const path = require('path');

module.exports = {
  entry: './lib/web.js',
  output: {
    path: path.resolve(__dirname, 'out'),
    filename: 'bundle.js'
  }
};
