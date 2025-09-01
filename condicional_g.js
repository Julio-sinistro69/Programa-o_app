/*Crie um sistema de validação de cadastro, onde o usuário vai preencher nome, idade e e-
mail. O sistema deverá verificar:
 Se o nome foi preenchido
 Se a idade é maior ou igual a 18
 Se o e-mail contém &quot;@&quot;
Em seguida, deverá mostrar no console “Cadastro realizado com sucesso!” ou “Preencha os
dados corretamente.”*/ 
const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let email = prompt("Digite seu email: ");
let idade = Number(prompt("Digite sua idade: "));

if (nome === "") {
console.log("*Campo obrigatório");
}
if (!email.includes('@') || !email.includes('.')) {
    console.log("email inválido!!!!");
}
if (idade < 18) {
    console.log("Usuário de menor de idade");
}else{
    console.log("Usuário maior de idade ");
}
    nome != "" && (nome != "" && email.includes('@') && email.includes('.') && idade >= 18)? console.log("Cadastro realizado com sucesso") : console.log("Preencha os dados corretamente.");

