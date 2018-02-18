//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// This file will configure the webpack module bundler for the project
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Some global includes
const path = require('path');
const webpack = require('webpack');

let webpackConfig = {
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist",
        filename: "example.jslink.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(tsx|ts)?$/,
                loader: "awesome-typescript-loader?sourceMap=true'",
                query: {
                    declaration: false,
                }
            }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        })
    ],

    // We don't want webpack to watch the files.
    watch: false,
};


module.exports = webpackConfig;
