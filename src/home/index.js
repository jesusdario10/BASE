var page = require('page');
var template = require('./template.js');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var title = require('title');

page('/', function(ctx,next)
{
  title('Platzigram-signin')

  var pictures =[1,2,3,4,5];
  empty(main).appendChild(template(pictures));
})
