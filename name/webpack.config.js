const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index",
    lazy: "./src/lazy",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.[hash:7].js",
    chunkFilename: "[name].chunk.[chunkhash:7].js"
  },
  plugins: [new CleanWebpackPlugin.CleanWebpackPlugin({})],
  optimization: {
    minimize: false,
    moduleIds: "named",
    splitChunks: {
      chunks: "all",
      name: (module, chunks, cacheGroupKey) => {
        const moduleFileName = module.identifier().split('/').reduceRight(item => item)
        const allChunks = chunks.map(c => c.name).join('~')
        return `${cacheGroupKey}_${allChunks}_${moduleFileName}`
      },
      cacheGroups: {
        default: false,
        groupB: {
          test: /groupB/,
          enforce: true
        },
        groupADeps: {
          test: /groupA\.dep/,
          enforce: true
        },
        groupA: {
          test: /groupA/,
          enforce: true
        },
      }
    }
  }
};
