const path = require('path');
const webpack = require('webpack');




// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'public'),
    JS: path.resolve(__dirname, 'public/js')
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
        path: paths.DIST,
        filename: 'bundle.js',
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true //To tell webpack-dev-server that when you cannot found
        // 'pages' or 404, run back to '/' (index.html), React-router in <script src=‘bundle.js’>
        //will take care of URL later on. Important!! It makes Router work properly!!
    },

    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    },
    watch:true

};
