const chai = require('chai')

const expect = chai.expect
const bmiCalculator = require('./bmiCalculator.js')

describe('BMI Calculator positive test case', () => {
    const singleData = [{
        Gender: "Male", WeightKg: 87, HeightCm: 155
    }]

    const multipleData = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96}, {
        "Gender": "Male", "HeightCm": 161, "WeightKg":
            85
    }, {"Gender": "Male", "HeightCm": 180, "WeightKg": 77}, {
        "Gender": "Female", "HeightCm": 166,
        "WeightKg": 62
    }, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {
        "Gender": "Female",
        "HeightCm": 167, "WeightKg": 82
    }]

    it("Test: With Single Data", () => {
        const bmiData = bmiCalculator.calculateBmiData(singleData)
        expect(bmiData).to.have.deep.members([{Gender: "Male", WeightKg: 87, HeightCm: 155, BMI: 36.2, BMICategory: "Severely obese", BMIHealthRisk: "High risk"}])
    })

    it("Test: With given multiple data", () => {
        const bmiData = bmiCalculator.calculateBmiData(multipleData)
        expect(bmiData).to.have.deep.members(
            [
                {
                    "Gender": "Male", "HeightCm": 171, "WeightKg": 96,
                    BMI: 32.8, BMICategory: "Moderetely obese", BMIHealthRisk: "Medium risk"
                },
                {
                    "Gender": "Male", "HeightCm": 161, "WeightKg": 85,
                    BMI: 32.8, BMICategory: "Moderetely obese", BMIHealthRisk: "Medium risk"
                },
                {
                    "Gender": "Male", "HeightCm": 180, "WeightKg": 77,
                    BMI: 23.8, BMICategory: "Normal weight", BMIHealthRisk: "Low risk"
                },
                {
                    "Gender": "Female", "HeightCm": 166, "WeightKg": 62,
                    BMI: 22.5, BMICategory: "Normal weight", BMIHealthRisk: "Low risk"
                },
                {
                    "Gender": "Female", "HeightCm": 150, "WeightKg": 70,
                    BMI: 31.1, BMICategory: "Moderetely obese", BMIHealthRisk: "Medium risk"
                },
                {
                    "Gender": "Female", "HeightCm": 167, "WeightKg": 82,
                    BMI: 29.4, BMICategory: "Overweight", BMIHealthRisk: "Enhanced risk"
                }])
    })
})