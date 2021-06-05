const fs = require('fs')
const bmiCalculator = require('./bmiCalculator.js')

module.exports.calculateBmiFunctions = async () => {
    const fileName = './BMIData.json'
    const fileExists = fs.existsSync(fileName)
    if (fileExists) {

        const BMIData = await fs.promises.readFile(fileName)
        const BMIString = BMIData.toString()

        if (BMIString.length > 0) {

            const BmiJson = JSON.parse(BMIString)

            const returnData = bmiCalculator.calculateBmiData(BmiJson)

            await fs.promises.writeFile('./BMIOutput.json', JSON.stringify(returnData))
        } else {
            console.error(`Please enter some data in input file ${fileName}`)
        }
    } else {
        console.error(`File ${fileName} does not exists,Please create the file and input some data into it.`)
    }
}

module.exports.calculateBmiFunctions()