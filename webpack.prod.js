const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

mode: "production",
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001,
    open: 'firefox',
    headers: {
        'Cache-Control': 'no-store'
      }
  },
entry: "./src/client/index.js",
output: {
    libraryTarget: "var",
    library: "Client",
    filename: "main-[contentHash].js",
    path: path.resolve(__dirname, "dist")
},

module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: '/\js$/',
            exclude :/node_modules/,
            loader: "babel-loader"
        },
       {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {
            test: /\.html$/,
            use: [ 'html-loader' ]
        },
        {
            test: /\.(png|jpg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "imgs",
                    esModule: false
                }
            }
        }
    ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/template.html",
        filename: "./index.html"
    })
]
}