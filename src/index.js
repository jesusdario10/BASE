var page = require('page');
var main= document.getElementById('main-container');

page('/', function(ctx, next)
	{
  		main.innerHTML =`home`
	});

app.get('/signup', function(req, res)
{
	  res.render('index')/* res sera respuesta al cliente, render llamara al motor de vistas 			de pug entonces enviare al cliente hola mundo*/
})

page();
