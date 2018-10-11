'use strict';

var gulp = require('gulp');
var fcashBaseTasks = require('fcash-build');

fcashBaseTasks('message');

gulp.task('default', ['lint', 'coverage']);
