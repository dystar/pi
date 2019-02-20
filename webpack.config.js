const HtmlWebPackPlugin = require("html-webpack-plugin");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
path = require('path'),
srcPath = path.resolve(__dirname, "./src/"),
distPath = path.resolve(__dirname, "./dist/");
module.exports = {
  output: {
    publicPath: "/"
  },
  module: {
	rules: [
	  {
		  test: /\.js$/,
		  exclude: /node_modules/,
		  use: {
		    loader: "babel-loader"
		  }
	  },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader"
        }
      ]
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
    ]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpg)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.(ttf|woff|woff2|eot|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',    // where the fonts will go
          //publicPath: ''       // override the default path
        }
      }]
    }
	]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new CopyWebpackPlugin([
     {from:'src/img',to:'img'} 
    ]), 
  ]
};
