/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/
const prompt = require('prompt-sync')()

let value = Number(prompt("Informe um número inteiro: "))

function repeatIntegerNumber(number) {
    if(Number.isNaN(value) || !Number.isInteger(value)) {
        return "Digite um valor conforme solicitado"
    } else {
        for (let i = 0; i < 10; i++) {
            console.log(number)
        }
    }
}

repeatIntegerNumber(value)