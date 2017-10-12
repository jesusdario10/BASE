var page = require('page');
var signup = require('./signup');


var main= document.getElementById('main-container');

page('/', function(ctx, next)
	{
  		main.innerHTML =`jet`
	});



page();
