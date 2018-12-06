const {folderNames} = require("../constants");
const watch = require("gulp-watch");
const runSass = require("./runSass");
const runWebpack = require("./runWebpack");
const startServer = require("./startServer");

module.exports = (files = []) => () => {
    const server = startServer();

    files.forEach(file => watch(file, () => server.reload()));

    watch(`${folderNames.dev}/**/**/*.css`, () => server.reload());
    watch(`${folderNames.dev}/${folderNames.sass}/**/*.scss`, () => {
        runSass();
        server.reload();
    });
    watch(`${folderNames.dev}/**/**/*.js`, () => {
        runWebpack(() => server.reload());
    });
};