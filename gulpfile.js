var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function () {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		notify: false
	});
});

gulp.task('sass', function () {
	return gulp.src('./ContentBuild/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./Content/css'))
		.pipe(browserSync.stream());
});


gulp.task('sass:watch', function () {
	gulp.watch('./ContentBuild/scss/**/*.scss', ['sass']);
	gulp.watch('./Content/js/*.js').on("change", browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'sass:watch']);