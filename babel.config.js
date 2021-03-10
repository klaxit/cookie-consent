"use strict"

module.exports = function (api) {
  api.cache(false);
  const presets = [
      [
          "@babel/preset-env",
          {
              "corejs": { "version":3 },
              "useBuiltIns": "usage",
              "targets": {
                "browsers": ["last 2 versions", "ie >= 11"]
              }
          }
      ]
  ]
  const plugins = [
    "@babel/transform-runtime"
  ]
  return {
      presets,
      plugins,
  }
}