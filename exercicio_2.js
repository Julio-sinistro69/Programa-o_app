const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite um outro número: "));
console.log(`Soma: ${num1 + num2}, subtração: ${num1 - num2}, multiplicação: ${num1 * num2}, divisão: ${num1/num2}, e divisão com resto: ${num1%num2},`);