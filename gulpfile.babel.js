'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import serve    from 'browser-sync';
import rename   from 'gulp-rename';
import fs       from 'fs';
import yargs    from 'yargs';
import gutil    from 'gulp-util'

let reload = () => serve.reload();
const
  root = 'src',
  output = 'dist';

// helper method for resolving paths
function resolveToApp (glob = '') {

  return path.join(root, 'app', glob); // app/{glob}
}

function resolveToComponents(glob = '') {

  return path.join(root, 'app/components', glob); // app/components/{glob}
}

// map of all paths
let paths = {
  js: [
    resolveToApp('**/*!(.spec.js).js'),
    resolveToComponents('**/*!(.spec.js).js')
  ], // exclude spec files
  less: resolveToApp('**/*.less'), // stylesheets
  html: [
    resolveToApp('**/*.html')
  ],
  index: path.join(root, 'index.html'),
  entry: './' + path.join(root, 'app/app.js'),
  output: output,
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};

// use webpack.config.js to build modules
gulp.task('webpack', (cb) => {
  var config = require('./webpack.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      timings: true,
      chunks: false
    }));
    cb();
  });
});

gulp.task('index', ['webpack'], () => {
  return gulp.src(paths.index)
    .pipe(gulp.dest(paths.output))
});

gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: output }
  });
});

gulp.task('watch', () => {
  let allPaths = [].concat([paths.js], paths.html, [paths.index], [paths.less]);
  gulp.watch(allPaths, ['webpack', reload]);
});

gulp.task('default', (done) => {
  sync('index', 'serve', 'watch', done);
});
