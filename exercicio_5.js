/*Crie um programa onde o usuário preencha a distância de uma viagem, o consumo médio do
carro em km/l e o preço da gasolina. O sistema deve exibir quantos litros de combustível serão
necessários e quanto a viagem vai custar.*/
const prompt = require('prompt-sync')();
let consumo_m = Number(prompt("Digite o consumo médio do seu carro: "));
let distancia_via = Number(prompt("Digite a distância de uma viagem: "));
let preço_gas = Number(prompt("Digite preço da gasolina: "));
console.log("Você precisa de: ",(distancia_via/consumo_m) * preço_gas);
