const prompt = require("prompt-sync")();

let pares = 0;
let impares = 0;

for (let i = 1; i <= 30; i++) {
  let num = parseInt(prompt(`Digite o ${i}º número inteiro: `));

  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);
