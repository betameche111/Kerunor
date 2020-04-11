const webpack = require("webpack");
const path = require("path");

let config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    plugins: [],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(glb|jpg|svg)$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
    },
    devtool: "eval-source-map"
};

module.exports = config;