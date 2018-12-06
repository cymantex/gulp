const {taskNames} = require("../constants");
const gulp = require("gulp");
const webpack = require("webpack");

gulp.task(taskNames.webpack, (callback) => {
    webpack(require(`${projectRoot}/webpack.config.js`), (err, stats) => {
        if(err) console.log(err);
        
        console.log(stats.toString());
        callback();
    });
});