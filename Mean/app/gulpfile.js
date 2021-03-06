var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('js', function () {
    gulp.src(['ng/module.js','ng/**/*.js'])
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('assets'));
});

gulp.task('watch:js', ['js'], function() {
    gulp.watch('ng/**/*.js', ['js']);
});