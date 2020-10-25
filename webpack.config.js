const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({cleanStaleWebpackAssets: false});

module.exports = {
    mode: 'development',
    entry: {app: __dirname + '/src/app/index.js'},
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/src/'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']

            }
        ],
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig, CleanWebpackPluginConfig]
};
