var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

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

gulp.task('script', function()
{
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/js'))

})












gulp.task('default', ['styles', 'assets', 'assets2', 'script']);
