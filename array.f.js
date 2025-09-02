let numeros = [];
for (let i = 0; i < 30; i++) {
  numeros[i] = Math.floor(Math.random() * 1000);
}

console.log("Vetor:", numeros);

let maior = numeros[0];
let indiceMaior = 0;

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
    indiceMaior = i;
  }
}

console.log("Maior valor:", maior);
console.log("Índice do maior elemento:", indiceMaior);
