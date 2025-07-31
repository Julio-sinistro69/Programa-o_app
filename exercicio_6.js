const prompt = require('prompt-sync')();
let conta = parseFloat(prompt("Digite o valor total da conta:"));
let numClientes = parseInt(prompt("Digite o número de clientes:"));
let valorPorPessoa = conta / numClientes;
console.log(`Cada cliente deve pagar: R$ ${valorPorPessoa.toFixed(2)}`);