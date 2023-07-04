import gulp from 'gulp';
import cssnano from 'gulp-cssnano'; // Minifies css files
import rev from 'gulp-rev';
import * as del from 'del';
import uglify from 'gulp-uglify-es';
import image from 'gulp-image';




//  Minified CSS task
gulp.task('css', function(done) {
   gulp.src('./static/**/*.css')
    .pipe(cssnano())
    .pipe(rev())
    .pipe(gulp.dest('./public/static'))
    .pipe(rev.manifest({
        base: './public/assets',
      merge: true
    }))
    .pipe(gulp.dest('./public/static'));
    done();
});

// Minified JS task
gulp.task('js',function(done){
  gulp.src('./static/**/*.js')
  .pipe(uglify.default())
  .pipe(rev())
  .pipe(gulp.dest('./public/static'))
  .pipe(rev.manifest({
    base: './public/assets',
      merge: true
    }))
  .pipe(gulp.dest('./public/static'));
  done();
});

// Minified image task
gulp.task('img',function(done){
    gulp.src('./static/**/*.png')
    .pipe(image())
    .pipe(rev())
    .pipe(gulp.dest('./public/static'))
    .pipe(rev.manifest({
        base: './public/assets',
        merge:true
      }))
    .pipe(gulp.dest('./public/static'));
    done();
  });

// empty the public static directory
gulp.task('clean:static',function(done){
  del.deleteSync('./public/static');
  done();
})

// 
gulp.task('build',gulp.series('clean:static','css','js','img'),function(done){
  console.log("Building static");
  done();
})

// The callback functions done are called on task completion.