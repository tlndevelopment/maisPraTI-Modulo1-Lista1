/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/
const prompt = require('prompt-sync')()

let age = Number(prompt("Insira uma idade: "))

function ageCategory(age) {
    if(age >= 0 && age <= 12)
        return "criança"
    else if(age >= 13 && age <= 17)
        return "adolescente"
    else if(age >= 18 && age <= 59)
        return "adulta"
    else if(age >= 60 && age < 130)
        return "idosa"
    else
        return "idade inválida"
}

let result = ageCategory(age)

if(result.includes("idade"))
    console.error(result)
else
    console.log(`Uma pessoa com ${age} anos é considerada ${result}`)