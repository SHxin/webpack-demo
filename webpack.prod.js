const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname,'./src/static/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test: /.css$/, use:['style-loader', 'css-loader']},
            {test: /.[png|jpg|jpeg]$/, use:{
                loader: 'url-loader',
                options:{
                    limit: 2 * 1024,
                    name: '/images/[hash:4].[ext]'
                }
            }},
            {test:/.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
}