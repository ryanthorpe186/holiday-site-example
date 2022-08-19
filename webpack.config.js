const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


 module.exports = {
   entry: {
     index: './src/index.js',
   },
   devtool: 'inline-source-map',
   watch: true,
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Holiday Finder',
       template: 'src/index.html'
     }),
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served
	      host: 'localhost',
	      port: 3000,
	      files: ['./dist/*.html'],
	      server: { baseDir: ['dist'] }
	    }),
   ],
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js',
    clean: true,
  },
   optimization: {
    runtimeChunk: 'single',
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
   },
 }