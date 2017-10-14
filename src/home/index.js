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
      avatelr :'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/1484696_10205635253333470_6832608531301534797_n.jpg?oh=9ab3f75650ce4320a223283b6b6ee241&oe=5A7DFD96'
    },
    url: 'http://materializecss.com/images/office.jpg',
    likes : 1024,
    liked : true
  },
  {
    user: {
      username:'Jesus D Marenco',
      avatelr :'https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/1484696_10205635253333470_6832608531301534797_n.jpg?oh=9ab3f75650ce4320a223283b6b6ee241&oe=5A7DFD96'
    },
    url: 'http://materializecss.com/images/office.jpg',
    likes : 1024,
    liked : true
  }]
  empty(main).appendChild(template(pictures));
})
