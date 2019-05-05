var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./dist/github-login-component/*.js')
    .pipe(concat('github-login.js'))
    .pipe(gulp.dest('./dist/element'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/github-login-component/*.css')
    .pipe(rename('github-login.css'))
    .pipe(gulp.dest('./dist/element'));
});

gulp.task('default', ['concat', 'rename']);
