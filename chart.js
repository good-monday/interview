var chalk = require('chalk')
var asciichart = require('asciichart')

exports.draw = function (lines) {
    var legends = Object.keys(lines)
    var values = Object.values(lines)

    var legendColors = [chalk.bgBlue, chalk.bgGreen, chalk.bgYellow, chalk.bgCyan]
    var chartColors = [asciichart.blue, asciichart.green, asciichart.yellow, asciichart.cyan]

    var config = {
        height: 65,
        colors: chartColors.slice(0, legends.length)
    }

    var legendOutput = ""

    for (var i = 0; i < legends.length; i++) {
        var color = legendColors[i]
        legendOutput = legendOutput + color(" " + legends[i] + " ")
    }

    console.log(legendOutput + "\n")
    console.log(
        asciichart.plot(values, config)
    )
}