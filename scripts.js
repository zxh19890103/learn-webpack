const webpack = require("webpack")

const WHEREYOUARE = process.cwd()

const config = require(`${WHEREYOUARE}/webpack.config`)

const compiler = webpack(config)
compiler.run((err, stat) => {
  if (err) throw err
  console.log(stat.toString({
    colors: true
  }))
  const { startTime, endTime } = stat
  console.log(`from ${startTime} to ${endTime}`)
})