var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

gulp.task('angDep', function() {
  return gulp.src([
      'node_modules/@angular/**/*',
      'node_modules/angular2-in-memory-web-api/**/*',
      'node_modules/rxjs/**/*',
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/ng2-ckeditor/lib/CKEditor.js'
    ], {base: 'node_modules'})
    
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ["sass:watch"]);
gulp.task('copyAngularLibs', [])