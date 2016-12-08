var webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            // require('tinymce') will do require('tinymce/tinymce')
            tinymce: 'tinymce/tinymce',
        },
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
            },
            {
                test: require.resolve('tinymce/tinymce'),
                loaders: [
                    'imports-loader?this=>window',
                    'exports-loader?window.tinymce'
                ]
            },
            {
                test: /tinymce\/(themes|plugins)\//,
                loaders: [
                    'imports-loader?this=>window'
                ]
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        ),
        new copyWebpackPlugin([
            { from: './node_modules/tinymce/plugins', to: './plugins' },
            { from: './node_modules/tinymce/themes', to: './themes' },
            { from: './node_modules/tinymce/skins', to: './skins' }
        ])
    ]
};