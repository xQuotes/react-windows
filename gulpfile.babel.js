import path from 'path';
import pkg from './package.json';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';

import buildConfig from './webpack.build';

const $ = loadPlugins();
const paths = {
  src: {
    build: 'src/app.js'
  },
  dist: {
    build: './dist',
    lib: './lib'
  }
};

const buildDate = $.util.date(Date.now(), 'isoDateTime');
const banner = [
  '/*! <%= pkg.title %> v<%= pkg.version %>',
  'by ifeng IDC',
  '(c) ' + $.util.date(Date.now(), 'UTC:yyyy') + ' ifeng, Inc.',
  'Licensed under <%= pkg.license %>',
  buildDate + ' */\n'
].join(' | ');

gulp.task('build:pack', () => {
  return gulp.src(paths.src.build)
    .pipe(webpackStream(buildConfig))
   .pipe($.replace('__VERSION__', pkg.version))
   .pipe($.header(banner, {pkg: pkg}))
    .pipe(gulp.dest(paths.dist.build))
   .pipe($.uglify())
   .pipe($.rename({suffix: '.min'}))
   .pipe($.header(banner, {pkg: pkg}))
   .pipe(gulp.dest(paths.dist.build))
   .pipe($.size({showFiles: true, title: 'minified'}))
   .pipe($.size({showFiles: true, gzip: true, title: 'gzipped'}));
});


gulp.task('build:jsx', () => {
  return gulp.src(['src/**/*.js', '!src/__tests__/*.js'])
    .pipe($.if((file) => {
      return file.path.indexOf('app.js') > -1;
    }, $.replace('__VERSION__', pkg.version)))
    .pipe($.babel())
    .pipe(gulp.dest(paths.dist.lib));
});

gulp.task('clean', () => {
  return del([
    paths.dist.lib,
    paths.dist.build
  ]);
});

gulp.task('build', (cb) => {
  runSequence(
    'clean',
    ['build:pack', 'build:jsx'],
    cb);
});

gulp.task('default', ['build']);
