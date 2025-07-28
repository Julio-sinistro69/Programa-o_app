const prompt = require('prompt-sync')();
let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade: ");
console.log("Bem vindo", nome,",sua idade é", idade);
if(idade == 13){
    console.log("idade de petista!!!!");
}else{
    console.log("Você é normal damnnnn!!!!");
}
