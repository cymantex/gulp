const browserSync = require("browser-sync").create();

module.exports = (options = {}) => {
    browserSync.init({
        server: {baseDir: "./"},
        port: process.env.PORT || 3000,
        ui: {port: process.env.UI_PORT || 3001},
        ...options
    });

    return browserSync;
};