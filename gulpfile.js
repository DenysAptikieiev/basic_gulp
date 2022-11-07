const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('css', () => {
  return gulp.src('./assets/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./assets/styles'))
})

gulp.watch('./assets/scss/**/*.scss', gulp.series('css'))
gulp.task('start', gulp.series('css'))