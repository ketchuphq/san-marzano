let gulp = require('gulp');

require('./gulp/js')
require('./gulp/css')
require('./gulp/html')

gulp.task('default', ['js:webpack', 'html', 'css', 'images'])