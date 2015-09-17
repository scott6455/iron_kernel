var merge = require('broccoli-merge-trees');

module.exports = merge(['public', 'styles']);

var compileSass = require('broccoli-sass');

var appCss = compileSass(['styles', 'bower_components'], 'app.scss', 'styles/app.css');

module.exports = merge(['public', 'bower_components', appCss]);
