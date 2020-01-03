var gulp = require('gulp');
const browserSync = require('browser-sync');
const stylus = require('gulp-stylus');
const pug = require('gulp-pug');

/**
 * task for livereload page in browser
 */
gulp.task('dev', () => {
  browserSync({
    server: {
      baseDir: 'build'
    },
    notify: false
  })
  gulp.watch("./templates/**/*.pug", pages).on('change', browserSync.reload);
});

function pages() {
  return gulp.src('./templates/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
}

exports.pages = pages;
