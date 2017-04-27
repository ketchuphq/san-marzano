var gulp = require('gulp');

gulp.task('html', () =>
  gulp.src('src/html/**/*.html')
    .pipe(gulp.dest('./assets'))
);

gulp.task('images', () =>
  gulp.src('src/images/*.png')
    .pipe(gulp.dest('./assets/images'))
);

gulp.task('html:watch', () =>
  gulp.watch([
    'src/html/**/*.html',
    'src/images/*.png'
  ], ['html', 'images'])
);