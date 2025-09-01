/*Considere as seguintes classificações de estabelecimentos tendo em conta a sua área:
 0 a 49 m2 – Mercearia
 50 a 399 m2 - Mercadinho
 400 a 999 m2 - Mercado
 1000 a 2499 m2 - Supermercado
 &gt;=2500 m2 – Hipermercado
Escreva um programa que leia os valores de largura e profundidade de um terreno, calcule a área
de um estabelecimento e o classifique segundo o critério referido*/

const prompt = require('prompt-sync')();

let largura = prompt("Digite a largura do terreno em metros: ");
let profundidade = prompt("Digite a profundidade do terreno em metros: ");

let larguraNumerica = Number(largura);
let profundidadeNumerica = Number(profundidade);

let area = larguraNumerica * profundidadeNumerica;

switch (true) {
    case isNaN(area) || larguraNumerica < 0 || profundidadeNumerica < 0:
        console.log("Por favor, digite valores numéricos positivos para a largura e a profundidade.");
        break;

    case area <= 49:
        console.log(`A área do estabelecimento é de ${area}m².`);
        console.log("O estabelecimento ideal seria uma mercearia.");
        break;

    case area >= 50 && area <= 399:
        console.log(`A área do estabelecimento é de ${area}m².`);
        console.log("O estabelecimento ideal seria um mercadinho.");
        break;

    case area >= 400 && area <= 999:
        console.log(`A área do estabelecimento é de ${area}m².`);
        console.log("O estabelecimento ideal seria um mercado.");
        break;

    default:
        console.log(`A área do estabelecimento é de ${area}m².`);
        console.log("O estabelecimento ideal seria um hipermercado.");
        break;
}