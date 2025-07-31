const prompt = require('prompt-sync')();
let nota1 = Number(prompt("Digite uma nota: "));
let nota2 = Number(prompt("Digite uma nota: "));
let nota3 = Number(prompt("Digite uma nota: "));
let media = (nota1 + nota2 + nota3)/3;
if(media >= 7){
    console.log("A média é:", media.toFixed(2), ",Aprovado!!!!");
}else{
    console.log("A média é:", media.toFixed(2), ",Reprovado!!!!");
}