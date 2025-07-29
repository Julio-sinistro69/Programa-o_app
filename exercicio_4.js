//Crie um código que, com base no valor de um produto de R$120,00:
// Aplique um desconto de 15%.
// Calcule o valor final com desconto.
// Depois, adicione uma taxa de entrega de R$ 10.
// Mostre o valor final do pedido.
const prompt = require('prompt-sync')();
let valor = 120; 
let desconto = 120 * 0.15;
const taxa = 10.00;
let valortotal = (valor - desconto) - taxa;
console.log("Preço do produto", valor);
console.log("valor do desconto", desconto);
console.log("produto com desconto + taxa de entrega", valortotal);
