const webpack = require("webpack")
const configInvokable = require("./webpack.config")

const compiler = webpack(configInvokable({}))
compiler.run((err, stat) => {
  if (err) throw err
  console.log(stat.toString({
    colors: true
  }))
  const { startTime, endTime } = stat
  console.log(`from ${startTime} to ${endTime}`)
})