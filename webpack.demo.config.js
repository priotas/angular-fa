const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        demo: './demo/index.js'
    },
    output: {
        path: __dirname + '/demo/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/index.html',
            inject: 'body'
        })
    ]
};

module.exports = config;
