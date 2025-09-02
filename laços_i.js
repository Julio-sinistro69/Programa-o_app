let N = parseInt(prompt("Digite um número: "));

let divisores = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisores.push(i);
  }
}

console.log("Os divisores de " + N + " são: " + divisores.join(", "));
