const getBmi = function calculateBmi(WeightInKg, HeightInCm) {
    return parseFloat((WeightInKg / Math.pow((HeightInCm / 100), 2)).toFixed(1))
}

/**
 * 
 * @param {Array<{Gender:string;HeightCm:number;WeightKg:number}>} bmiInput 
 * @returns {Array<{Gender:string;HeightCm:number;WeightKg:number;BMI:number;BMICategory:string;BMIHealthRisk:string;}>}
 */
module.exports.calculateBmiData = (bmiInput) => {


    return bmiInput.map(bmiData => {
        const bmi = getBmi(bmiData.WeightKg, bmiData.HeightCm)
        let risk = ""
        let weight = ""
        if (bmi <= 18.4) {
            weight = "Underweight"
            risk = "Malnutrition risk"
        } else if (bmi <= 24.9) {
            weight = "Normal weight"
            risk = "Low risk"
        } else if (bmi <= 29.9) {
            weight = "Overweight"
            risk = "Enhanced risk"
        } else if (bmi <= 34.9) {
            weight = "Moderetely obese"
            risk = "Medium risk"
        } else if (bmi <= 39.9) {
            weight = "Severely obese"
            risk = "High risk"
        } else {
            weight = "Very severely obese"
            risk = "Very high risk"
        }
        return {Gender: bmiData.Gender, HeightCm: bmiData.HeightCm, WeightKg: bmiData.WeightKg, BMICategory: weight, BMIHealthRisk: risk, BMI: bmi}
    })



}