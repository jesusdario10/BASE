var express = require('express');
var app= express();
app.set('view engine', 'pug');

app.get('/', function(req, res)
{
  res.send('hola')
})
app.listen(3000, function(err)
{
  if(err){console.log('errorrr')}
  console.log('exito servidor conectado')
})
