/*Até 12 anos: "Criança"
 De 13 a 17: "Adolescente"
 De 18 a 64: "Adulto"
 65 ou mais: "Idoso"*/
const prompt = require('prompt-sync')();
let idade = prompt("Digite sua idade: ");
if (idade <= 12) {
    console.log("Criança");
} else if(idade >= 13 && idade <= 17){
        console.log("Adolescente");
} else if(idade >= 18 && idade <=64){
    console.log("Adulto");
}else if(idade >= 65){
    console.log("Idoso")
}
