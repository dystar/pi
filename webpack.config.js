const HtmlWebPackPlugin = require("html-webpack-plugin");
path = require('path'),
srcPath = path.resolve(__dirname, "./src/"),
distPath = path.resolve(__dirname, './src/build/');
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
        'style-loader', 'css-loader'
      ]
    },
    {
      test: /\.(ttf|woff|woff2|eot|svg|png|jpg)$/,
      use: [
        'url-loader'
      ]
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
    })
  ]
};
