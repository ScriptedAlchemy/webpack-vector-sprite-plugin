'use strict';

// Depends
const path = require('path');
const SvgStore = require('../src/svgstore');

module.exports = function(_path) {
  // define local variables
  var distPath = path.join(_path, 'example', 'dist');

  return {
    entry: {
      app: path.join(_path, 'example', 'static', 'js', 'index.js')
    },
    output: {
      path: distPath,
      filename: '[chunkhash].[name].js',
      chunkFilename: '[chunkhash].[id].js',
      publicPath: '/example/'
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      // create svgStore instance object
      new SvgStore.Options({
        // svgo options
        svgoOptions: {
          plugins: [
            { removeTitle: true }
          ]
        }
      })
    ]
  };
};
