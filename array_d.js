let vetorA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let vetorB = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let vetorC = [];

for (let i = 0; i < 15; i++) {
  vetorC[i] = vetorA[i] + vetorB[i];
}

console.log("Vetor A:", vetorA);
console.log("Vetor B:", vetorB);
console.log("Vetor C (soma):", vetorC);
