const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {

mode: "production",
entry: "./src/client/index.js",
optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
},
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
            test: /\.(png|jpg|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "img/",
                    publicPath: 'img/',
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
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW()
]
};