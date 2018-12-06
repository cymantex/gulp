const path = require("path");
const {folderNames, fileNames} = require("./gulp/constants");
const {dev, javascript} = folderNames;

module.exports = {
    entry: path.resolve(__dirname, `${dev}/${javascript}/${fileNames.javascript}`),
    output: {
        path: path.resolve(__dirname, javascript),
        filename: fileNames.javascript
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    mode: "development"
};