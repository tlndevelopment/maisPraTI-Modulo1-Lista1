/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.

Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)

Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)

Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const prompt = require('prompt-sync')()

let sideA = Number(prompt("Digite o lado A do triângulo: "))

let sideB = Number(prompt("Digite o lado B do triângulo: "))

let sideC = Number(prompt("Digite o lado C do triângulo: "))

function triangleType(A, B, C) {
    if(((A < (B + C)) && (B < (A + C)) && (C < (A + B)))) {
        let retorno = "O triângulo informado pertence ao tipo "
        if(A === B && B === C)
            retorno += "equilátero"
        else if(A === B || B === C || A === C)
            retorno += "isósceles"
        else
            retorno += "escaleno"

        return retorno
    } else {
        return "Os lados informados não formam um triângulo"
    }
}

console.log(triangleType(sideA, sideB, sideC))

