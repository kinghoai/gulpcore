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
  gulp.watch("./templates/images/**/*", images).on('change', browserSync.reload);
  gulp.watch("./templates/js/*", scripts).on('change', browserSync.reload);
});

function pages() {
  return gulp.src('./templates/pages/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
}

function images() {
  return gulp.src('./templates/images/**/*')
    .pipe(gulp.dest('./build/images'))
}

function scripts() {
  return gulp.src('./templates/js/*.js')
    .pipe(gulp.dest('./build/js'))
}

exports.pages = pages;
exports.images = images;
exports.scripts = scripts;
