const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '../src/main.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[id]-[name]-[hash].js'
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            filename: "index.html"
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env'
                        ]
                    }
                }]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }, {
                test: /\.(png | jpg | gif)$/,
                use: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        host: 'localhost',
        port: 8888,
        open: true,
		setup(app) {
            app.get('/apis', function(req, res) {
                const data = require('../mock/data.js');
                res.send(data)
            })
        },
        proxy: {
            '/api': {
                target: "http://localhost:3000",
                pathRewrite: { '^/api': '/apis' },
                secure: false
            }
        }
       
    }
}