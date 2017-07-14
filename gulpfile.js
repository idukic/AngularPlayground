var gulp = require('gulp'),
 sass = require('gulp-sass');

/*
 * Paths
 */

var sass = {
    sassRoot: './src/styles/*.scss',
    sassApp: './src/app/**/**/**/*.scss'
};

/*
 * Tasks
 */

gulp.task('sass-root', function() {
    return gulp.src(sass.sassRoot)
        .pipe(sass( {onError: function(err) { return fail(); }}))
        .pipe(gulp.dest(function(file) { return file.base; }));
});

gulp.task('sass-app', function() {
    return gulp.src(sass.sassApp)
        .pipe(sass( {onError: function(err) { return fail(); }}))
        .pipe(gulp.dest(function(file) { return file.base; }));
});

gulp.task('sass-compiler', ['sass-root', 'sass-app'], function() {
    console.log('sass compiled');
});