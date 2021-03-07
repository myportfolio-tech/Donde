const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

mode: "development",
entry: "./src/client/index.js",
output: {
    libraryTarget: "var",
    library: "Client",
    filename: "main-[contentHash].js",
    path: path.resolve(__dirname, "dist")
},
resolveLoader: {
    moduleExtensions: ['-loader']
  },
module: {
    rules: [
        {
            test: '/\js$/',
            exclude :/node_modules/,
            loader: "babel-loader"
        }
    ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    })
]
}