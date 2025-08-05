//Escreva um algoritmo que leia o código e o salário de 20 funcionários de uma empresa. Ao final,
//o algoritmo deve determinar o total da folha de pagamento da empresa e sua média salarial.
const prompt = require('prompt-sync')();
let codigo = [];
let pag_total = 0;

 for (let a = 0; a < 2; a++) {
     codigo.push(prompt("Digite o código de cada funcionário: "));
    
}
 
for (let i = 0; i < 2; i++) {
    
    pag_total += Number(prompt("Digite o slário de cada funcionário: "));

}
let media_total = pag_total/2;
console.log(codigo);

console.log(`O código dos funionários são: ${codigo}`);
console.log(`a média salarial é ${media_total} `);


