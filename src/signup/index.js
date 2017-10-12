var page = require('page');
var template = require('./template.js');
var empty = require('empty-element');
var main = document.getElementById('main-container');

page('/signup', function(req, res)
{
	empty(main).appendChild(template);
})
