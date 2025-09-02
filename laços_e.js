/*// e) Crie um algoritmo que leia vários números e encerre a leitura com 0 (zero). Após o
// encerramento, deve-se imprimir o maior, o menor e a média aritmética dos números. O número 0 (zero)
// não faz parte da sequência.*/
const prompt = require("prompt-sync")();
let n = [], k=0, continuar = true;
let maior, menor, soma=0, media=0;

console.log(`\n\tDigite números (0 para encerrar):`);
while(continuar) {
    n[k]= Number(prompt(`\n\t--> `));
    console.log(n[k]);
    if (n[k]==0) {
        continuar = false;
        break;
    }
    console.log(n[k]);
    Number(soma += n[k]);
    k++;
}
menor = n[0];
maior = n[0];
for (let j=0;j<k;j++){
    if (maior <= n[j]){
        maior = n[j];
    }
    if (menor >= n[j]){
        menor = n[j];
    }
}
media = soma/k;
console.log(`\n\t--> Maior número: ${maior}`);
console.log(`\n\t--> Menor número: ${menor}`);
console.log(`\n\t--> Média: ${media}`);