const prompt = require('prompt-sync')();

let sexo = prompt("Digite seu sexo (masculino/feminino): ").toLowerCase();
let idade = parseInt(prompt("Digite sua idade: "));

if (sexo === "masculino") {
    if (idade === 18) {
        console.log("O alistamento militar é obrigatório este ano.");
    } else if (idade < 18) {
        console.log("Ainda não está na idade de se alistar.");
    } else {
        console.log("Você já passou da idade de alistamento obrigatório.");
    }
} else if (sexo === "feminino") {
    console.log("O alistamento militar não é obrigatório para mulheres.");
} else {
    console.log("Sexo inválido. Digite 'masculino' ou 'feminino'.");
}
