const pairNumber = "233261379295";

const accNumber = "0261379295"

const name = ""

const bankName = "MTN MOMO"

const any = ""

const emoji = '🗿'

module.exports = { pairNumber, accNumber, bankName, name, any, emoji };

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
