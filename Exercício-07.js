/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require('prompt-sync')()

let apples = Number(prompt("Informe quantas maçãs você comprou: "))

function applesPrice(apples) {
    if(Number.isNaN(apples) || (apples < 1)) {
        return "Informe um número válido"
    } else {
        let totalValue = 0
        if(apples < 12) {
            totalValue = apples * 0.3
        } else {
            totalValue = apples * 0.25
        }
        return `Você pagou um total de R$ ${totalValue.toFixed(2).toString().replace('.', ',')} em ${apples} maçãs`
    }
}

console.log(applesPrice(apples))