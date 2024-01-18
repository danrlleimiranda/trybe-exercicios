const readLine = require('readline-sync');


function bmiCalculator(weight, height) {

    const bmi = weight / height ** 2;

    if (bmi < 18.5) {
            console.log('Abaixo do peso (magreza)')
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log('Peso normal')
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            console.log('Acima do peso (sobrepeso)')
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            console.log('Obesidade grau I')
        } else if (bmi >= 35.0 && bmi <= 39.9){
            console.log('Obesidade grau II')
        } else {
            console.log('Obesidade grau III e IV')
        } 
    return bmi.toFixed(1)
}


const weight = readLine.questionFloat('What’s your weight?');
const height = readLine.questionFloat('What’s your height?');

console.log(bmiCalculator(weight, height));