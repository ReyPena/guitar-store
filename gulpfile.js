var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify =  require("gulp-uglify"),
    uglifyCss = require("gulp-uglifycss"),
    ngAnnotate =  require("gulp-ng-annotate"),
    watch = require("gulp-watch");

var paths = {
  jsLibs: [
    // this are the libraries
    "./bower_components/angular/angular.min.js",
    "./bower_components/angular-ui-router/release/angular-ui-router.min.js",
    "./bower_components/jquery/dist/jquery.min.js",
    "./bower_components/Materialize/dist/js/materialize.min.js",
    // this is my own js
    "./core/client/app/**/*.js"
  ],
  cssLibs: [
    // this is my external css
    "./bower_components/Materialize/dist/css/materialize.min.css",
    // this is my own css
    "./core/app/**/*.css"
  ]
};

gulp.task("styles", function () {
  gulp.src(paths.cssLibs)
  .pipe(uglifyCss())
  .pipe(concat("styles.css"))
  .pipe(gulp.dest("./core/client/assets/libs/css"));
});

gulp.task("scripts", function () {
  gulp.src(paths.jsLibs)
  .pipe(ngAnnotate())
  .pipe(concat("bigpack.js"))
  .pipe(uglify())
  .pipe(gulp.dest("./core/client/assets/libs/js"));
});

gulp.task("watch", function() {
  gulp.watch(paths.jsLibs, ['scripts']);
  gulp.watch(paths.cssLibs, ["styles"]);
});

gulp.task("Working", function () {
  console.log("Working and ready");
});

gulp.task("default", ["watch", "styles", "scripts", "Working"]);
