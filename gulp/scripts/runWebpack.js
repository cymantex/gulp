const webpack = require("webpack");

module.exports = (callback) => {
    webpack(require(`${projectRoot}/webpack.config.js`), (err, stats) => {
        if(err) console.log(err);

        console.log(stats.toString());
        callback();
    });
};