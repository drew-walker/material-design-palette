const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        'material-design-palette': './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: process.env.NODE_ENV === 'production' ? '[name].min.js' : '[name].js',
        publicPath: '/dist/',
        library: 'MaterialDesignPalette',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader:  'babel',
            include: path.join(__dirname, 'src')
        }]
    }
};
