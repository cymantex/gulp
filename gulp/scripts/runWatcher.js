const {folderNames} = require("../constants");
const watch = require("gulp-watch");
const runSass = require("./runSass");
const runWebpack = require("./runWebpack");

module.exports = (options) => () => {
    const {extraGlobs, startServer} = options;
    const server = startServer();

    extraGlobs.forEach(glob => watch(glob, () => server.reload()));

    watch(`${folderNames.dev}/**/**/*.css`, () => server.reload());
    watch(`${folderNames.dev}/${folderNames.sass}/**/*.scss`, () => {
        runSass();
        server.reload();
    });
    watch(`${folderNames.dev}/**/**/*.js`, () => {
        runWebpack(() => server.reload());
    });
};