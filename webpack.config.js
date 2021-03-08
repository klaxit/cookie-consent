"use strict"

const path = require( "path" )

const config = {
  entry: path.resolve(__dirname, "src", "index.js"),
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
}

module.exports = config

