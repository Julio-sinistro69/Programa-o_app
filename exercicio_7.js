
const prompt = require('prompt-sync')();
let num = prompt("Digite um número: ");
if(num % 3 === 0){
console.log(num, "é múltiplo de 3 :D");
}else{
    console.log(num, "não é múltiplo de 3 :/");
}