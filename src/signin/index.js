var page = require('page');
var template = require('./template.js');
var empty = require('empty-element');
var main = document.getElementById('main-container');

page('/signin', function(ctx,next)
{
  empty(main).appendChild(template);
})
