const runWebpack = require("./runWebpack");
const runSass = require("./runSass");
const uglifyJs = require("./uglifyJs");
const uglifyCss = require("./uglifyCss");

module.exports = async () => {
    await runSass();
    await runWebpack();
    uglifyJs();
    uglifyCss();
};