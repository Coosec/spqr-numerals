import config from './umd.js';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const packageInfo = require('../../package.json');

config.plugins[2] = babel({
  presets: [
    [
      'es2015',
      {
        'modules': false
      }
    ]
  ]
});

config.plugins.push(uglify({
  output: {
    preamble: config.banner
  }
}));

config.dest = `dest/${packageInfo.name}.es5.js`

export default config;
