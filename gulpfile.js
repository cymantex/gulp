const gulp = require("gulp");
const runWebpack = require("./gulp/scripts/runWebpack");
const runSass = require("./gulp/scripts/runSass");
const runWatcher = require("./gulp/scripts/runWatcher");
const startServer = require("./gulp/scripts/startServer");

global.projectRoot = __dirname;

gulp.task("webpack", runWebpack);
gulp.task("sass", runSass);
gulp.task("watch", runWatcher({
    startServer,
    extraGlobs: ["*.php", "*.html"]
}));