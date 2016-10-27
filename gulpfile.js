var gulp = require('gulp');

var gulpSourcemaps = require('gulp-sourcemaps');
var gulpScss = require('gulp-sass');
var concatCss = require('gulp-concat-css');


var cssDev = 'assets/scss/';
var cssProd = 'public/stylesheets/';


gulp.task("scss", function (done) {
    return gulp.src(cssDev + 'style.scss')
        .pipe(gulpSourcemaps.init())
        .pipe(gulpScss())
        .pipe(gulpSourcemaps.write())
        .pipe(concatCss("style.css"))
        .pipe(gulp.dest(cssProd));
});

gulp.task('watch', function () {
    gulp.watch(cssDev + '**/*.scss', ['scss']);
});

gulp.task('default', ['watch',  'scss']);
gulp.task('build', ['scss']);