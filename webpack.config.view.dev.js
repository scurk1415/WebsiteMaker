var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        'app': './assets/view/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loader: 'raw-loader'
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: './public/js/view',
        filename: 'bundle.js',
        publicPath: '/js/view/',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        )
    ]
};