
var gulp  = require('gulp');
var sass  = require('gulp-sass');
var rename  = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

/*definiremos una tarea para gulp*/


/*este comando define tareas en este caso sera la de los estilos
    el primer parametro sera el nombre de la tarea y el segundo sera una
    funcion que se ejecutara cuando la llamemos*/
gulp.task('styles', function()
{
  gulp
    .src('index.scss')//busca este archivo
    .pipe(sass())//tomalo como sass
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'));//el archivo sass que ya procesaste ponlo en public
})


gulp.task('assets', function()
{
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public/img'));
})

gulp.task('assets2', function()
{
  gulp
    .src('assets2/*')
    .pipe(gulp.dest('public/js'))
})


function compile(watch)
{
  var bundle = watchify(browserify('./src/index.js'))
  function rebundle()
  {
    bundle
      .transform(babel)//transformalo con babel
      .bundle()//genera el archivo
      .on('error',function(err){console.log(err); this.emit('end')})
      .pipe(source('index.js'))//transformar lo que devuelve bundle a algo que entienda gulp
      .pipe(rename('app.js'))//renombramos el archivo
      .pipe(gulp.dest('public/js'));//lo colocamos en la carpeta public
  }
  if(watch)
  {
    bundle.on('update', function()
    {
      console.log('>>>>>>>>>>>Bundling.....')
      rebundle()
    });
  }
  rebundle();
}

gulp.task('build', function()
{
  return compile(); // retornaremos  compile sin pasar parametros

});
gulp.task('watch', function()
{
  return compile(true);//retornaremos compile pasandole true para que se quede haciendo watch de los archivos
});


/*esta sera la tarea por defecto*/
gulp.task('default',['styles', 'assets','assets2', 'build']);//el primer parametro sera default y eso lo hra en automatico, el
                       //segundo parametro es un array que puede ejecturar muchas tareas al tiempo
                       //en este caso sera solo una
