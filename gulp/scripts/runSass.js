const {folderNames, fileNames} = require("../constants");
const gulp = require("gulp");
const sass = require("gulp-sass");
const {production, css, dev} = folderNames;

module.exports = async () => {
    console.log(
        `Transpiling ${projectRoot}/${dev}/${folderNames.sass}/${fileNames.sass} to ` +
        `${projectRoot}/${folderNames.css}/${fileNames.css}`
    );

    return gulp
        .src(`${projectRoot}/${dev}/${folderNames.sass}/${fileNames.sass}`)
        .pipe(sass({
            indentedSyntax: true,
            indentWidth: 4,
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(gulp.dest(`${production}/${css}`));
};