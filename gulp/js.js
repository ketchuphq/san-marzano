let gulp = require('gulp');
let webpack = require('webpack');
let gutil = require('gulp-util');
let del = require('del');

gulp.task('js:clean', () => del(['build/js/*']));

let webpackConfig = gutil.env.production ?
  require('../webpack.config') :
  require('../webpack.config.dev')
webpackConfig.cache = {}
let webpackCompiler = webpack(webpackConfig)

gulp.task('js:webpack', (cb) => {
  webpackCompiler.run((err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]\n' + stats.toString({
      colors: true,
      cachedAssets: false,
      chunks: false,
    }))
    cb()
  })
})

gulp.task('js:watch', () =>
  gulp.watch('src/js/**/*.ts*', ['js:webpack'])
);