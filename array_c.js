const prompt = require("prompt-sync")();

let nomes = [];
let notas = [];

for (let i = 0; i < 35; i++) {
  let nome = prompt(`Digite o nome do aluno ${i + 1}: `);
  let nota = parseFloat(prompt(`Digite a nota de ${nome}: `));
  nomes.push(nome);
  notas.push(nota);
}

console.log("\nAlunos com nota >= 7.0:");
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7.0) {
    console.log(`${nomes[i]} - Nota: ${notas[i]}`);
  }
}
