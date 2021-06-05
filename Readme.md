# BMI Calculator script

This script reads BMI Data from `BMIData.json` file, calculates BMI, and also outputs weight and risk profile.

## Data format

The file should have specific format of data.
This script requires data in format of JSON array with properties mentioned as below.

```json
{Gender:string;HeightCm:number;WeightKg:number}[]
```

## Output

The script adds BMI, BMICategory (weight) and BMIHealthRisk data on input.
The output will be written into `BMIOutput.json` file in below format.

```json
{Gender:string;HeightCm:number;WeightKg:number;BMI:number;BMICategory:string;BMIHealthRisk:string;}
```

## Running test

Please run `npm run test` script to run tests.
