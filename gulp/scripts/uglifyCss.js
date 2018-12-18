const {folderNames, fileNames} = require("../constants");
const gulp = require("gulp");
const uglify = require("gulp-uglifycss");

module.exports = () => {
    const productionFolder = `${folderNames.production}/${folderNames.css}`;
    const cssFile = `${productionFolder}/${fileNames.css}`;

    gulp.src(cssFile)
        .pipe(uglify({"uglyComments": true}))
        .pipe(gulp.dest(productionFolder))
};