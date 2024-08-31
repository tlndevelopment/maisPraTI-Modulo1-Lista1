/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/
const prompt = require('prompt-sync')()

let array = []

let counter = 1

while(counter <= 5) {
    let num = Number(prompt(`Informe o ${counter}º número: `))

    if(Number.isNaN(num)) {
        console.log("informe um número válido")
    } else {
        array.push(num)
        counter++
    }
}

function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log("A soma dos valores do array formado é: " + sumArray(array))