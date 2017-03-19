var gulp = require('gulp'),
    sass = require('gulp-sass'),    
    cachebust = require('gulp-cache-bust');

gulp.task("build", ['sass-compile','bust-cache']);

gulp.task('sass-compile', function () {
    gulp.src('./styles/core.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch-sass', function () {
    gulp.watch('./styles/*.scss', ['sass-compile']);
});

gulp.task('bust-cache', function() {
    gulp.src('./*.html')
        .pipe(cachebust( { basePath: './' }))
        .pipe(gulp.dest('./'));
});