const webpack = require("webpack");

module.exports = async (callback = () => {}) => {
    return new Promise(resolve => {
        webpack(require(`${projectRoot}/webpack.config.js`), (err, stats) => {
            if(err) console.log(err);

            console.log(stats.toString());
            resolve(callback());
        });
    });
};