var webpack = require('webpack');
var path = require('path');
var WebpackMd5Hash = require('webpack-md5-hash');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, './src/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: "[chunkhash].[id].ifeng.desktopUI.js",
        filename: "ifeng.desktopUI.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                loader: 'babel',
                query:{
                  presets: ["react","es2015","stage-1"],
                  "plugins": [
                    ["transform-decorators-legacy"],
                  ]
                },
                exclude: /node_modules/ 
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpg|png|gif|ico)$/,
                loader: 'url-loader?limit=8192'
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            }
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new  WebpackMd5Hash(),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'Ifeng DesktopUI',
        template: 'index.ejs'
      })
      // new TransferWebpackPlugin([
      //   {from: 'JSON'}
      // ], path.resolve(__dirname,'../../../'))
    ]
};
