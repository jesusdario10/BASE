var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form action="" class="signup-form">
        <h2>Registrate</h2>
        <div class="section">
          <a href="" class="btn btn-fb waves-effect waves-light hide-on-small-only"><i class="fa fa-facebook-square" aria-hidden="true"></i>  Iniciar Sesion con facebook</a><!--la clase hide-on-small-only hace que no se muestre el a en dispositivos moviles-->
          <a href="" class="btn btn-fb btn-signup hide-on-med-and-up"><i class="fa fa-facebook-square" aria-hidden="true"></i>  Iniciar Sesion</a><!-- la clase hide-on-med-and-up hace que se muestre en dispositivos moviles-->
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="Correo Electronico" value="">
          <input type="text" name="name" placeholder="Nombre completo" value="">
          <input type="text" name="username" placeholder="Nombre de usuario" value="">
          <input type="password" name="password" placeholder="Password" value="">
          <button type="submit" class="btn btn-fb btn-signup waves-effect waves-light">Iniciar Sesion</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿Tienes una cuenta? <a href="/signin">Entrar</a>
    </div>
  </div>
</div>`;

module.exports=landing(signupForm)
