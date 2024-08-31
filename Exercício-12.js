/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/
const prompt = require('prompt-sync')()

let num = Number(prompt(`Informe um número (1-10): `))

function multiplicationTable(num) {
    if(Number.isNaN(num) || num < 1 || num > 10) {
        console.error("Valor inválido")
    } else {
        console.log(`A tabuada de ${num} é:`)
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} * ${i} = ${num * i}`)
        }
    }
}

multiplicationTable(num)