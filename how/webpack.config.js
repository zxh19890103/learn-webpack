const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.[hash:7].js",
    chunkFilename: "[name].chunk.[chunkhash:7].js"
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin({}),
    new StatsPlugin('stats.json')
  ],
  optimization: {
    concatenateModules: false,
    runtimeChunk: true,
    minimize: false,
    moduleIds: "named",
    splitChunks: {
      chunks: "all",
      name: false,
    }
  }
};
