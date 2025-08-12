const prompt = require('prompt-sync')();
nhoque = [];
console.log("Digite seu nome: ");
for (let i = 0; i < 3; i++) {
    nhoque.push(prompt(`Digite o nome da pessoa ${i + 1}:`));
    saudacoes (nhoque[i]);
}
function saudacoes(nhoque) {
    console.log(`Olá ${nhoque}, seja bem vindo`);
}