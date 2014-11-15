"use strict";

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sequence = require('run-sequence');

var jsFiles = [
    './gulpfile.js',
    './js/app/**',
    './utils/**'
];

gulp.task('verify', function (callback) {
    sequence(
        'lint',
        'codestyle',
        function (err) {
            if (!err) {
                callback.apply(null, arguments);
            }
        }
    );
});

gulp.task('lint', function () {
    return gulp
        .src(jsFiles)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('codestyle', function () {
    return gulp
        .src(jsFiles)
        .pipe(jscs());
});
