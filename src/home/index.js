var page = require('page');
var template = require('./template.js');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var title = require('title');

page('/', function(ctx,next)
{
  title('Platzigram-signin')

  var pictures =
  [{
    user: {
      username:'Jesus D Marenco',
      avatar :'avatar.jpg'
    },
    url: 'http://materializecss.com/images/office.jpg',
    likes : 1024,
    liked : true
  },
  {
    user: {
      username:'Jesus D Marenco',
      avatar :'avatar.jpg'
    },
    url: 'fotoperfil.jpg',
    likes : 3300,
    liked : true
  }]

  console.log(empty(main).appendChild(template(pictures)))
  empty(main).appendChild(template(pictures));
})
