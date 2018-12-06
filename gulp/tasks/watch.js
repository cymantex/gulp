const {taskNames, folderNames} = require("../constants");
const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

gulp.task(taskNames.watch, () => {
    browserSync.init({
        server: {baseDir: "./"},
        port: process.env.PORT || 3000,
        ui: {port: process.env.UI_PORT || 3001}
    });
    
    watch("*.php", () => browserSync.reload());
    watch("*.html", () => browserSync.reload());
    watch(`${folderNames.dev}/**/**/*.css`, () => browserSync.reload());
    watch(`${folderNames.dev}/**/**/*.scss`, () => {
        gulp.start(taskNames.sass);
        browserSync.reload();
    });
    watch(`${folderNames.dev}/**/**/*.js`, () => gulp.start(taskNames.reloadBrowser));
});

gulp.task(taskNames.reloadBrowser, [taskNames.webpack], () => browserSync.reload());