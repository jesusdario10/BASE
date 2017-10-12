var page = require('page');
var template = require('./template.js');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var title = require('title');

page('/signup', function(req, res)
{
	title('Platzigram-signup')
	empty(main).appendChild(template);
})
