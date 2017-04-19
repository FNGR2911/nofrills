// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const notify = require("gulp-notify");
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

// Image optimization
gulp.task('images', function() {
	return gulp.src('src/images/**/*')
				.pipe(newer('images'))
				.pipe(imagemin())
				.pipe(notify("💥 Images minified!"))
				.pipe(gulp.dest('images'));
});

// Compile and autoprefix Sass
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
				.pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
				.pipe(sourcemaps.write())
        .pipe(notify("💥 Development SASS compiled!"))
        .pipe(gulp.dest('css'));
});

// Uglify & Babelify my JS
gulp.task('scripts', function() {
  return gulp.src('src/js/main.js')
				.pipe(babel({
						presets: ['es2015']
				}))
				.pipe(uglify())
        .pipe(notify("💥 Scripts uglified and minified!"))
        .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/main.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
		gulp.watch('src/images/**/*', ['images']);
});

// Default Task
gulp.task('default', ['images', 'sass', 'scripts']);

// Production Task
gulp.task('prod', ['images', 'scripts'], function() {
	// SASS Production Task
	return gulp.src('src/scss/**/*.scss')
				.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(autoprefixer('last 5 versions'))
				.pipe(notify("💥 SASS compiled!"))
				.pipe(gulp.dest('css'));
})
