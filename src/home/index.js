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
    liked : false,
    createAt :new Date()
  },
  {
    user: {
      username:'Jesus D Marenco',
      avatar :'avatar.jpg'
    },
    url: 'fotoperfil.jpg',
    likes : 3300,
    liked : false,
    createAt : new Date().setDate(new Date().getDate() - 10)
  }]

  console.log(empty(main).appendChild(template(pictures)))
  empty(main).appendChild(template(pictures));
})
