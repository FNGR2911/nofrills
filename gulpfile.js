const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const notify = require('gulp-notify')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const argv = require('yargs').argv
const gulpif = require('gulp-if')

/**
 * Set environment variables
 */
const development = argv.prod == 'false' ? true : false
const production = argv.prod == 'true' ? true : false

/**
 * Set variables for root, style, script and image files
 */
const styles = [`src/scss/**/*.scss`]
const scripts = [`src/js/main.js`]
const images = [`src/images/**/*`]

/**
 * Copy and optimize images
 */
gulp.task('images', () => {
  return gulp
    .src(images)
    .pipe(newer(`assets/images`))
    .pipe(imagemin())
    .pipe(gulp.dest(`assets/images`))
    .pipe(notify({ message: '💥  Images optimized and copied', onLast: true }))
})

/**
 * Babelify, concat and uglify JavaScirpt
 */
gulp.task('scripts', () => {
  return gulp
    .src(scripts)
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(concat('main.js'))
    .pipe(uglify({ mangle: { reserved: ['EXAMPLE'] } }))
    .pipe(gulp.dest(`assets/js`))
    .pipe(notify({ message: '💥  JavaScript babelified, concatenated and uglified', onLast: true }))
})

/**
 * Complile Sass
 */
gulp.task('styles', () => {
  return gulp
    .src(styles)
    .pipe(gulpif(development, sourcemaps.init()))
    .pipe(sass({ outputStyle: production ? 'compressed' : 'expanded' }))
    .pipe(gulpif(development, sourcemaps.write()))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(`assets/css`))
    .pipe(notify({ message: `💥  SASS compiled (${production ? 'production' : 'development'})`, onLast: true }))
})

gulp.task('watch', () => {
  gulp.watch(images, gulp.parallel('images'))
  gulp.watch(scripts, gulp.parallel('scripts'))
  gulp.watch(styles, gulp.parallel('styles'))
})

gulp.task('build', gulp.series('images', 'scripts', 'styles'))
