"use strict"

const path = require( "path" )
const common = require( "./webpack.config.js" )

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = Object.assign({}, common, {
    mode: "development",
    plugins: [new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve(__dirname, "examples", "index.ejs"),
        scriptLoading: "blocking",
        inject: false
      })
    ],
  })
