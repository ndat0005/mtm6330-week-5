const gulp = require('gulp')
const sass = require('gulp-sass')
const browsersync = require('browser-sync').create()
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

gulp.task('sass', function (){
const plugins = [
  autoprefixer({browsers:['last 2 version']}),
  cssnano()
]
return gulp
  .src ('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(postcss(plugins))
  .pipe(gulp.dest('css/min'))
  .pipe(browsersync.stream())
})
gulp.task('default',function (){
  browsersync.init({server:'./'})
  gulp.watch('scss/**/*.scss',gulp.series('sass'))
  gulp.watch('*.html').on('change',browsersync.reload)
})
