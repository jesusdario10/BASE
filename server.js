var express = require('express');
var app= express();
app.set('view engine', 'pug');

app.use(express.static('public/css'))
app.use(express.static('public/js'))
app.use(express.static('public/img'))
app.use(express.static('fonts'))

app.get('/', function(req, res)
{
  res.render('index')
})
app.get('/signup', function(req, res)
{
  res.render('index')
})
app.get('/signin', function(req, res)
{
  res.render('index')
})
app.listen(3000, function(err)
{
  if(err){console.log('errorrr')}
  console.log('exito servidor conectado')
})
