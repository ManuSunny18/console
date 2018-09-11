const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index:'./client/common.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                use:[
                    {
                        loader:'file-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['public']),
    ]
   
}