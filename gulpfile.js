const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task("sass", async function () {
  gulp.src("./sass/style.scss")
    //.pipe(sass({ outputStyle: "compressed" }))
    .pipe(sass())
    .pipe(gulp.dest("css"));
});

gulp.task('watch', async function() {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));