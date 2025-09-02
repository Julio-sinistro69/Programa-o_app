const prompt = require("prompt-sync")();

let totalPessoas = 0;
let negativos = 0;

while (true) {
  let conta = parseInt(prompt("Digite o número da conta (0 para sair): "));
  
  if (conta === 0) {
    break; 
  }

  let saldo = parseFloat(prompt("Digite o saldo da conta: "));

  let status = saldo >= 0 ? "positivo" : "negativo";

  console.log(`Conta: ${conta} | Saldo: R$${saldo.toFixed(2)} | ${status}`);

  totalPessoas++;
  if (saldo < 0) {
    negativos++;
  }
}

if (totalPessoas > 0) {
  let percentualNegativos = (negativos / totalPessoas) * 100;
  console.log(`\nPercentual de pessoas com saldo negativo: ${percentualNegativos.toFixed(2)}%`);
} else {
  console.log("\nNenhuma conta foi registrada.");
}
