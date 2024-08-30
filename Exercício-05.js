/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/
const prompt = require('prompt-sync')()

let weight = Number(prompt("Digite seu peso: "))

let height = Number(prompt("Digite sua altura: "))

let bmi = weight / (height * height)

function bmiResult(bmi) {
    if(bmi <= 18.5)
        return "magreza"
    else if(bmi > 18.5 && bmi < 25)
        return "o peso normal"
    else if(bmi >= 25 && bmi < 30)
        return "sobrepeso"
    else if(bmi >= 30 && bmi < 40)
        return "obesidade"
    else
        return "obesidade grave"
}

console.log(`Seu IMC é ${bmi.toFixed(2)} e você está com ${bmiResult(bmi)}`)