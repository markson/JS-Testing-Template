var pickFiles = require('broccoli-static-compiler')
var es6Transpiler = require('broccoli-6to5-transpiler')

var es6 = pickFiles('src', {
	srcDir:'/',
	files: ['**/*.js'],
	destDir:'appKit'
});

var es5 = es6Transpiler(es6,{modules:'ignore'});


module.exports = es5;
