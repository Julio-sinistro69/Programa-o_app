let valores = [];
for (let i = 0; i < 30; i++) {
  valores[i] = Math.random() * 100; 
}

console.log("Original:", valores);

for (let i = 0; i < valores.length; i++) {
  if (i % 2 === 0) {
    valores[i] *= 1.02;
  } else {
    valores[i] *= 1.05;
  }
}

console.log("Modificado:", valores);
