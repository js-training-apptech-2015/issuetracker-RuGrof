'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var path = require("path");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports={
    context: path.join(__dirname,"app"),
    entry: {
        main : "./scripts/main",
          
    },
    output: {
         path: path.join(__dirname,"public"),
         publicPath: "/",
         filename: "[name].js"
    },
    watch: NODE_ENV == 'development',
    
    devtool: NODE_ENV == 'development' ? "source-map" : null,
    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify( NODE_ENV )
        }),
        /*new webpack.optimize.CommonsChunkPlugin({
            
        }),*/
        new webpack.ProvidePlugin({
            
        }),
        new ExtractTextPlugin('styles.css', {allChunks: true})
    ],
    module:{
        
        loaders: [{
            test:   /\.js$/,
            exclude: /\/node_modules\//,
            loader: 'babel?presets[]=es2015'
        },{
            test: /\.mustache$/,
            exclude: /\/node_modules\//,
            loader: 'mustache'
        },{
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file?name=[path][name].[ext]'
        },{
            test:   /\.css$/,
            loader: ExtractTextPlugin.extract('css!')
        }]
    },
    devServer: {

        host: 'localhost', // default
        port: 8081,
        contentBase: path.join(__dirname,"devServer"),
        historyApiFallback: true

     }
};

if(NODE_ENV === 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UnglifyJsPlugin({
            compress:{
                warnings:false,
                drop_console: true
            }
        })
    );
}