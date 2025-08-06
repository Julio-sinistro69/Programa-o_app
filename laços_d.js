/*Criar um algoritmo para ler o nome e a idade de um grupo de pessoas, sendo o número desse
grupo determinado pelo usuário. Ao final, o programa deverá imprimir o nome e a idade da pessoa mais
idosa e o nome e a idade da pessoa mais jovem.*/

const prompt = require('prompt-sync')();

let grupo_pessoas = [];
const num_pessoas = Number(prompt("Digite o número de pessoas: "));
if (num_pessoas <= 0) {
    console.log("Número de pessoas inválido!");
} else {
    for (let i = 0; i < num_pessoas; i++) {
        let nome = prompt(`Digite o nome da pessoa: `);
        let idade = Number(prompt(`Digite a idade de ${nome}: `));
        grupo_pessoas.push({ nome: nome, idade: idade });
    }
    let pessoaMaisVelha = grupo_pessoas[0];
    let pessoaMaisJovem = grupo_pessoas[0];
    for (let i = 1; i < grupo_pessoas.length; i++) {
        let pessoaAtual = grupo_pessoas[i];
        if (pessoaAtual.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoaAtual;
        }
        if (pessoaAtual.idade < pessoaMaisJovem.idade) {
            pessoaMaisJovem = pessoaAtual;
        }
    }
    console.log(`A pessoa mais idosa é: ${pessoaMaisVelha.nome}, com ${pessoaMaisVelha.idade} anos.`);
    console.log(`A pessoa mais jovem é: ${pessoaMaisJovem.nome}, com ${pessoaMaisJovem.idade} anos.`);
}
    