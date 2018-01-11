const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    stats: {
        colors: true
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});