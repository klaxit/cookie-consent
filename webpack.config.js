"use strict"

const path = require( "path" )

const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
  },
  module: {
      rules: [
          {
            test: /\.html$/,
            use: [{
              loader: "html-loader",
              options: {
                minimize: true,
              }
            }],
          },
          {
            test: /\.scss?$/,
            use : [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader", // compiles Sass to CSS, using Node Sass by default
            ]
          }
      ],
  },
  plugins: [new HtmlWebpackPlugin({
      hash: true,
      filename: path.resolve(__dirname, "dist", "index.html")
    })
  ],
}

module.exports = config

