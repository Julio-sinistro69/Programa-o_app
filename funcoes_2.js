const prompt = require('prompt-sync')();


let num1 = Number(prompt("digiite um número:"));
let num2 = Number (prompt("digite um número:"));
let opcao = Number(prompt("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir: "));
console.log(escolher(opcao, num1, num2));
    
function escolher(opcao, num1, num2) {
    switch (opcao) {
        case 1:
            return somar(num1, num2);
        case 2:
            return subtrair(num1, num2);
        case 3:
            return multiplicar(num1, num2);    
        case 4:
            return dividir(num1, num2)    
            default:
                console.log("Opção inválidda");
            break;
    }
}
function somar(num1, num2) {
    return num1 + num2;
}
function subtrair(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1/num2;
}