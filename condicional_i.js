/*Calcule a quantidade de dinheiro gasto por um fumante. Realizar a leitura do número de
anos que ele fuma, número de cigarros fumados por dia e o preço de uma carteira com 20
cigarros. Considere o ano sempre com 365 dias. Indicar com a mensagem “Você já gastou
muito” se o gasto for maior que R$ 10.000,00.*/ 

const prompt = require('prompt-sync')();


let anosFumando = prompt("Há quantos anos você fuma? ");
let cigarrosPorDia = prompt("Quantos cigarros você fuma por dia? ");
let precoCarteira = prompt("Qual o preço de uma carteira com 20 cigarros? ");

anosFumando = Number(anosFumando);
cigarrosPorDia = Number(cigarrosPorDia);
precoCarteira = Number(precoCarteira);

const DIAS_NO_ANO = 365;
const CIGARROS_NA_CARTEIRA = 20;
    
let totalCigarrosFumados = anosFumando * DIAS_NO_ANO * cigarrosPorDia;

// Calcula o custo por cigarro
let custoPorCigarro = precoCarteira / CIGARROS_NA_CARTEIRA;

// Calcula o valor total gasto
let gastoTotal = totalCigarrosFumados * custoPorCigarro;

// 4. Exibir o resultado e a mensagem condicional
console.log(`\nVocê já gastou um total de R$ ${gastoTotal.toFixed(2)} com cigarros.`);

// 5. Verificar se o gasto é maior que R$ 10.000,00 e exibir a mensagem
if (gastoTotal > 10000) {
    console.log("Você já gastou muito.");
}