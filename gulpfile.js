// Include gulp
const gulp = require('gulp')

// Include Our Plugins
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const notify = require('gulp-notify')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

// Image optimization
gulp.task('images', () => {
  return gulp
    .src('src/images/**/*')
    .pipe(newer('images'))
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
    .pipe(notify({ message: '💥 Images minified!', onLast: true }))
})

// Compile and autoprefix Sass
gulp.task('sass', () => {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: '💥 Development SASS compiled!', onLast: true }))
})

// Uglify & Babelify my JS
gulp.task('scripts', () => {
  return gulp
    .src('src/js/*.js')
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: '💥 Scripts uglified and minified!', onLast: true }))
})

// Watch Files For Changes
gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['scripts'])
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('src/images/**/*', ['images'])
})

// Default Task
gulp.task('default', ['images', 'sass', 'scripts'])

// Build Task
gulp.task('build', ['images', 'scripts'], function() {
  // SASS Production Task
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(notify('💥 SASS compiled!'))
    .pipe(gulp.dest('css'))
})
