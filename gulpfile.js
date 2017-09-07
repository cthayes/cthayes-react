var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
let rimraf = require('rimraf');
let mkdir = require('make-dir');
let uglify = require('gulp-uglify');

var scripts = [
	"source/assets/js/jquery.min.js",
	"source/assets/js/owl.carousel.min.js",
	"source/assets/js/jquery.validate.js",
	"source/assets/js/magnific-popup.js",
	"source/assets/js/masonry.pkgd.js",
	"source/assets/js/imagesloaded.pkgd.js",
	"source/assets/js/masonry-filter.js",
	"source/assets/js/scrollreveal.js",
	"source/assets/js/jquery.mb.YTPlayer.js",
	"source/assets/js/particles.js",
	"source/assets/js/particles-setting.js",
	"source/assets/js/main.js"

]

gulp.task('default', ['clean', 'copy', 'scripts', 'react']);
 
gulp.task('scripts', ['clean'], function() {
  return gulp.src(scripts)
  	.pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('react', ['clean'], function () {
  return browserify('./source/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('cthayes-net.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', ['clean'], function() {
	return gulp.src(['source/statics/**/*'])
		.pipe(gulp.dest('./dist'))
});

gulp.task('clean', function() {
	rimraf.sync('./dist');
	mkdir('./dist');
});
