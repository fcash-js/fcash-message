'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('fcash-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
