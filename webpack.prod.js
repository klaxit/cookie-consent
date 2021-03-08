"use strict"

const path = require( "path" )
const common = require( "./webpack.config.js" )

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = Object.assign({}, common, {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "cookie-consent.js",
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
  })

