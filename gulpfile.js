var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('assets', function()
{
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public/img'))
})
gulp.task('assets2', function()
{
  gulp
    .src('assets2/*')
    .pipe(gulp.dest('public/js'))
})




gulp.task('styles', function()
{
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public/css'))
});




gulp.task('default', ['styles', 'assets', 'assets2']);
