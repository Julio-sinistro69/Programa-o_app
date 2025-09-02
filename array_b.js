const prompt = require("prompt-sync")();

let notas = [];

for (let i = 0; i < 35; i++) {
  let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
  notas.push(nota);
}

console.log("\nAlunos com nota >= 7.0:");
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7.0) {
    console.log(`Aluno ${i + 1} - Nota: ${notas[i]}`);
  }
}
