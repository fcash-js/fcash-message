'use strict';

var gulp = require('gulp');
var fcoreTasks = require('fcash-build');

fcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
