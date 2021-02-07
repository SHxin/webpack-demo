const path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname,'./src/static/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename:'bundle.js'
    },
    devServer:{
        open: true,
        port: 8081,
        contentBase: './src'
    },
    module:{
        rules:[
            {test: /.css$/, use:['style-loader', 'css-loader']},
            {test: /.[png|jpg|jpeg]$/, use:{
                loader: 'url-loader',
                options:{
                    limit: 50 * 1024
                }
            }},
            {test:/.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        })
    ]
}