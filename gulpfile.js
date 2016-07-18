var
    gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('build', function(){
    return gulp.src('./index.js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(rename({basename: 'bundle.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
