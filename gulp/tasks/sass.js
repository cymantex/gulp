const {taskNames, folderNames, fileNames} = require("../constants");
const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task(taskNames.sass, () => {
    return gulp
        .src(`${folderNames.dev}/${fileNames.sass}`)
        .pipe(sass({
            indentedSyntax: true,
            indentWidth: 4,
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(gulp.dest(folderNames.css));
});