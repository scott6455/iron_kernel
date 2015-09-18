var merge = require('broccoli-merge-trees');

module.exports = merge(['public', 'css', 'css/style.css']);

var includePaths = [
    'assets',
    'bower_components/reset-css',
    'bower_components/bourbon/app/assets/stylesheets'
];
var compileSass = require('broccoli-sass');

var cssFiles = compileSass('assets', 'app.scss', 'app.css');

module.exports = merge(['public', 'css', cssFiles]);


var cssFiles = compileSass(['assets', 'bower_components/reset-css'], 'app.scss', 'app.css');
