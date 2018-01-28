const path = require('path');
const webpack = require('webpack');



const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js')
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js',
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true //To tell webpack-dev-server that when you cannot found
        // 'pages' or 404, run back to '/' (index.html), React-router in <script src=‘bundle.js’>
        //will take care of URL later on. Important!! It makes Router work properly!!
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },

            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader',
                ],
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    },

    externals: {
        jquery: 'jQuery'
    },
};
