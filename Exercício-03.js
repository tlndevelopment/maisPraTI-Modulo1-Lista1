/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/
const prompt = require('prompt-sync')()

let grade = Number(prompt("Insira a nota do aluno (0-10): "))

function gradeRanking(grade) {
    if(grade >= 0 && grade <= 3)
        return "reprovado"
    else if(grade >= 4 && grade <= 6)
        return "em recuperação"
    else if(grade >= 7 && grade <= 10)
        return "aprovado"
    else
        return "nota inválida"
}

let result = gradeRanking(grade)

if(result.includes("nota"))
    console.error(result)
else
    console.log(`O aluno está ${result}`)