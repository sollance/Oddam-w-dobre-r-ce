var gulp = require("gulp");
var sass = require("gulp-sass");
gulp.task("sass", function() {
  return gulp.src("./src/sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
});
gulp.task("watch", function() {
  gulp.watch("scss/*.scss", gulp.series("sass"));
});