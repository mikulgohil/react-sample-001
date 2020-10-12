'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');
var header = require('gulp-header');

var gradient_1 = "rgba(163,130,234,1)";
var gradient_2 = "rgba(130,7,199,1)";

gulp.task('sass', function () {
   return gulp.src('./src/scss/*.scss')
   .pipe(header('$gradient_1: ' + gradient_1 + ';\n' +
                '$gradient_2: ' + gradient_2 + ';\n'))
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./src/css/'));
});

