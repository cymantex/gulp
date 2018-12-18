const {folderNames, fileNames} = require("../constants");
const uglify = require("gulp-uglify");
const gulp = require("gulp");

module.exports = () => {
    const productionFolder = `${folderNames.production}/${folderNames.javascript}`;
    const jsFile = `${productionFolder}/${fileNames.javascript}`;

    gulp.src(jsFile)
        .pipe(uglify())
        .pipe(gulp.dest(productionFolder))
};