'use strict';

// load icons tasks
webpackSvgStore('example/static/svg/**/*.svg', '[hash].icons.svg');

require('./test/chunk.js');
