// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');
var babel = require('gulp-babel');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate all js
gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('allscripts.js'))
        .pipe(gulp.dest('dist'));
});

// Concatenate all jsx and transform to js
gulp.task('scriptsJsx', function() {
    return gulp.src('app/views/*.jsx')
        .pipe(babel())
        .pipe(concat('alljsx.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
    return gulp.src('dist/js/*.js')
        .pipe(concat('all.js'))
        .pipe(babel())
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Concatenate & Minify Bower components
gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(concat('allBowers.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('allBower.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['lint', 'scripts']);
    gulp.watch('app/views/*.jsx', ['scriptsJsx']);
    gulp.watch('dist', ['uglify']);
    gulp.watch('app/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'bower', 'watch']);
