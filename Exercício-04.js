/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/
const prompt = require('prompt-sync')()

let color = prompt("Escolha uma cor (azul, vermelho, verde): ")

function consoleByColor(color) {
    switch (color.toUpperCase()) {
        case "AZUL":
            console.log("Seu videogame favorito, provavelmente é algum Playstation")
            break;
        case "VERMELHO":
            console.log("Seu videogame favorito, provavelmente é algum da Nintendo")
            break;
        case "VERDE":
            console.log("Seu videogame favorito, provavelmente é algum XBOX")
            break;
        default:
            console.error("Opção Inválida")
            break;
    }
}

consoleByColor(color)