var yo = require('yo-yo');

module.exports= function(pic)
{
  return yo`<div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="http://materializecss.com/images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">image<i class="material-icons right">more_vert</i></span>

      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>`
}