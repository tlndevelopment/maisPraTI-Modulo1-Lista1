/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/
const prompt = require('prompt-sync')()
let num = 0
let sum = 0
let i = 0

do {
    num = Number(prompt(`Informe um número decimal: `))

    if((Number.isNaN(num) || Number.isInteger(num)) && num != 0) {
        console.error("Valor inválido")
        continue;
    } else {
        sum += num
        
        if(num != 0)
            i++
    }

} while (num != 0);

let avg = sum === 0 ? sum : sum / i

console.log(`A média aritmética do(s) válido(s) valor(es) digitado(s) é: ${avg.toFixed(2)}`)