/*Faça um programa que receba 5 números informados pelo usuário e em seguida apresente uma
mensagem informando qual é o maior e qual é o menor dentre os números informados.*/
const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Maior número informado:", maior);
console.log("Menor número informado:", menor);
