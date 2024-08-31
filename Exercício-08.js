/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const prompt = require('prompt-sync')()

let val1 = Number(prompt("Informe o primeiro Valor: "))

let val2 = Number(prompt("Informe o segundo Valor: "))

function orderAscTwoValues(val1, val2) {
    if(Number.isNaN(val1) || Number.isNaN(val2)) {
        return "Informe valores válidos"
    } else {
        if(val1 === val2) {
            return "Os valores não podem ser iguais"
        } else {
            return `Os valores informados, em ordem crescente, ficam: ${val1 > val2 ? val2 + ", " + val1 : val1 + ", " + val2}`
        }
    }
}

console.log(orderAscTwoValues(val1, val2))