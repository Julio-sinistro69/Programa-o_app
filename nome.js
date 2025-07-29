const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let altura = prompt("Digite sua altura em metros: ");
console.log(`Meu nome é ${nome}, tenho ${idade} anos e ${altura}m de altura.`);