/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/
const prompt = require('prompt-sync')()

let num = Number(prompt(`Informe um número: `))

function factorial(num) {
    if(Number.isNaN(num)) {
        return "Número inválido"
    } else {
        let factorial = 0

        for(let i = num - 1; i >= 1; i--)
            factorial += num * i

        return `O fatorial de ${num} é: ${factorial}`
    }
}

console.log(factorial(num))