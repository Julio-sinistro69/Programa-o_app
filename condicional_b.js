const prompt = require('prompt-sync')();
let num = prompt("Digite um número: ");
if(num == 0){
console.log("não é possível dividir por 0!!!");
}
else if(num % 2 == 0){
    console.log("é par!!!");
}else{
    console.log("é ímpar");
}
