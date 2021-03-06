'use strict';
/* jshint camelcase: false */

const config = require('./config');
const gulp = require('gulp');

const protractor = require('gulp-protractor');
const browserSync = require('browser-sync');

gulp.task('protractor', ['protractor:src']);
gulp.task('e2e', [
  'browserSync',
  'webdriver-update'
], runProtractor);

gulp.task('webdriver-update', protractor.webdriver_update);
gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function runProtractor(done) {
  gulp.src('.nonononoNOTHING')
    .pipe(protractor.protractor({
      configFile: './karma-e2e.conf.js'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

