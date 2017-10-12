var page = require('page');
var signup = require('./signup');
var signin = require('./signin');


var main= document.getElementById('main-container');

page('/', function(ctx, next)
	{
  		main.innerHTML =`jet`
	});



page();
