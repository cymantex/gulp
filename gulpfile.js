const gulp = require("gulp");
const runWebpack = require("./gulp/scripts/runWebpack");
const runSass = require("./gulp/scripts/runSass");
const watchFiles = require("./gulp/scripts/watchFiles");

global.projectRoot = __dirname;

gulp.task("webpack", runWebpack);
gulp.task("sass", runSass);
gulp.task("watch", watchFiles(["*.php", "*.html"]));