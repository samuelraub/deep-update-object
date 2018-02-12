const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: {
        index: './src/index.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new CleanWebpackPlugin([__dirname + '/dist/'])
    ]
}