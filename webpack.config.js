const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = env => {
  return {
    // mode: "development",
    mode: "production",
    entry: "./index.js",
    output: {
      path: path.resolve("./dist"),
      filename: "[name].bundle.[hash:7].js",
      chunkFilename: "[name].chunk.[chunkhash:7].js"
    },
    plugins: [new CleanWebpackPlugin.CleanWebpackPlugin({})],
    optimization: {
      minimize: false,
      namedModules: true,
      chunkIds: "size",
      moduleIds: "named",
      runtimeChunk: {
        name: c => "runtime"
      },
      splitChunks: {
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: "react",
            chunks: "all"
          },
          // router: {
          //   test: /[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/,
          //   name: "router",
          //   chunks: "all"
          // },
          vendor: {
            test(mod) {
              // exclude anything outside node modules
              if (!mod.context.includes("node_modules")) {
                return false;
              }

              // exclude react and react-dom
              if (
                /[\\/]node_modules[\\/](react|react-dom)[\\/]/.test(mod.context)
              ) {
                return false;
              }

              // exclude react-router and react-router-dom
              if (
                /[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/.test(
                  mod.context
                )
              ) {
                return false;
              }

              // return all other node modules
              return true;
            },
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }
  };
};
