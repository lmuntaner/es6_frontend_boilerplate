var gulp        = require('gulp');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
