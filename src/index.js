var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');
var main= document.getElementById('main-container');

page('/', function(ctx, next)
	{
  		main.innerHTML =`jet`
	});

page('/signup', function(req, res)
{
	 var el =yo`<div class="container" >
		 <div class="row">
			 <div class="col s10 push-s1">
				 <div class="row">
					 <div class="col m5 hide-on-small-only">
							 <img src="iphone.png" class="iphone" alt="">
					 </div>
					 <div class="col s12 m7">
						 <div class="row">
							 <div class="signup-box">
								 <h1 class="platzigram">Platzigramup</h1>
								 <form action="" class="signup-form">
									 <h2>Registrate</h2>
									 <div class="section">
										 <a href="" class="btn btn-fb waves-effect waves-light hide-on-small-only">Iniciar Sesion con facebook</a><!--la clase hide-on-small-only hace que no se muestre el a en dispositivos moviles-->
										 <a href="" class="btn btn-signup hide-on-med-and-up">Iniciar Sesion</a><!-- la clase hide-on-med-and-up hace que se muestre en dispositivos moviles-->
									 </div>
									 <div class="divider"></div>
									 <div class="section">
										 <input type="email" name="email" placeholder="Correo Electronico" value="">
										 <input type="text" name="name" placeholder="Nombre completo" value="">
										 <input type="text" name="username" placeholder="Nombre de usuario" value="">
										 <input type="password" name="password" placeholder="Password" value="">
										 <button type="submit" class="btn btn-signup waves-effect waves-light">Iniciar Sesion</button>
									 </div>
								 </form>
							 </div>
						 </div>
						 <div class="row">
							 <div class="login-box">
								 ¿Tienes una cuenta? <a href="/signin">Entrar</a>
							 </div>
						 </div>
					 </div>
				 </div>
			 </div>
		 </div>
	 </div>`

	empty(main).appendChild(el);
})

page();
