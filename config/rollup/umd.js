import config from './es6.js';

const packageInfo = require('../../package.json');

config.format = 'umd';
config.moduleName = 'spqr';
config.dest = `dest/${packageInfo.name}.umd.js`

export default config;
