/*
Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/
const prompt = require('prompt-sync')()

let num = Number(prompt("Insira um número: "))

function isEven(number) {
    if(number % 2 === 0)
        return true    
    else
        return false
}

console.log(`O número ${num} é ${isEven(num) ? "par" : "impar"}`)
