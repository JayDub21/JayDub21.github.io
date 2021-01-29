const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// npm command to manully pipe scss to css file: gulp style

// compile scss into css
function style() {
  // Find ANH scss file in scss folder
  return (
    gulp
      .src('./public/main.scss')

      // Pass that file through sass compiler
      .pipe(sass().on('error', sass.logError))

      // Where compiled css to be saved
      .pipe(gulp.dest('./public'))

      // stream changes to all browser
      .pipe(browserSync.stream())
  );
}

// start watch function with command: gulp watch
function watch() {
  browserSync.init({
    server: {
      baseDir: './public',
    },
  });
  gulp.watch('./public/main.scss', style);
  gulp.watch('./public/*.html').on('change', browserSync.reload);
  gulp.watch('./js/observers.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
