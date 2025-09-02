const prompt = require("prompt-sync")();

// f) Romário tem 1,50m e cresce 2 centímetros por ano, enquanto Bebeto tem 1,10 e cresce 3
// centímetros por ano. Construa um algoritmo que calcule em quantos anos Bebeto será maior que
// Romário.

let romario, bebeto;
let i=0;
romario = 1.50;
bebeto = 1.10;
while (bebeto < romario){
    romario += 0.02;
    bebeto += 0.03;
    ++i;
}
console.log(`Bebeto será maior que Romário em ${i} anos!`);