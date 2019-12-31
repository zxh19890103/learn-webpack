const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const DIR = __dirname
const L_DIR = DIR.length

const nameFac = (module, chunks, cacheGroupKey) => {
  const m = module.identifier().substr(L_DIR).split('/').join('_')
  return `${cacheGroupKey}-${chunks.map(c => c.name).join('~')}-${m}`
}

module.exports = {
  mode: "production",
  entry: {
    foo: "./src/foo",
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
      minSize: 16,
      maxInitialRequests: 4,
      cacheGroups: {
        foodeps: {
          test: /foo\-dep/,
          name: nameFac
        }
      }
    }
  }
};
