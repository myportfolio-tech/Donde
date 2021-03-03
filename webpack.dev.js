const path = require("path");
const webpack = require('webpack');

module.exports = {

mode: "development",
entry: "./src/client/index.js",
output: {
    libraryTarget: "var",
    library: "Client",
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
}
}