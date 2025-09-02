const prompt = require("prompt-sync")();

let qtdFemininoMaior21 = 0;
let qtdMasculinoMaior18 = 0;

let somaIdadeMasculino = 0;
let qtdMasculino = 0;

let somaIdadeFeminino = 0;
let qtdFeminino = 0;

for (let i = 1; i <= 200; i++) {
  console.log(`\n--- Estudante ${i} ---`);
  let nome = prompt("Nome: ");
  let idade = parseInt(prompt("Idade: "));
  let sexo = prompt("Sexo (M/F): ").toUpperCase();

  if (sexo === "F") {
    qtdFeminino++;
    somaIdadeFeminino += idade;
    if (idade > 21) {
      qtdFemininoMaior21++;
    }
  } else if (sexo === "M") {
    qtdMasculino++;
    somaIdadeMasculino += idade;
    if (idade > 18) {
      qtdMasculinoMaior18++;
    }
  } else {
    console.log("Sexo inválido! Digite apenas M ou F.");
    i--; 
  }
}

let mediaMasculino = qtdMasculino > 0 ? somaIdadeMasculino / qtdMasculino : 0;
let mediaFeminino = qtdFeminino > 0 ? somaIdadeFeminino / qtdFeminino : 0;

console.log("\n===== RESULTADOS =====");
console.log("Quantidade de mulheres maiores de 21 anos:", qtdFemininoMaior21);
console.log("Quantidade de homens maiores de 18 anos:", qtdMasculinoMaior18);
console.log("Média de idade (masculino):", mediaMasculino.toFixed(2));
console.log("Média de idade (feminino):", mediaFeminino.toFixed(2));
