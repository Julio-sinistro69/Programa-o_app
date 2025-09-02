const prompt = require("prompt-sync")();

// g) Crie um algoritmo que apresente a série Fibonacci até o 15 termo. A série de Fibonacci é
// formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34... etc. Esta série se caracteriza pela soma de um
// termo posterior com seu subsequente.

let fibo = [];
let ultimo=0, atual;

for (let n=1;n<=15;n++){
    if (n==1) {
        atual = 1;
        ultimo = 0;
    } else {
        atual += ultimo;
        ultimo = atual - ultimo;
    }
    fibo.push(atual);
}
console.log(fibo);