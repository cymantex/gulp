const {folderNames, fileNames} = require("../constants");
const gulp = require("gulp");
const sass = require("gulp-sass");

module.exports = () => {
    console.log(
        `Transpiling ${folderNames.dev}/${folderNames.sass}/${fileNames.sass} to ` +
        `${folderNames.css}/${fileNames.css}`
    );

    return gulp
        .src(`${folderNames.dev}/${folderNames.sass}/${fileNames.sass}`)
        .pipe(sass({
            indentedSyntax: true,
            indentWidth: 4,
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(gulp.dest(folderNames.css));
};