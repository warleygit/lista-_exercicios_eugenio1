let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ordenado = true;

for (let i = 1; i < vetor.length; i++) {
  console.log(vetor[i]);

  if (vetor[i] < vetor[i - 1]) {
    ordenado = false;
    break;
  }
}

if (ordenado === true) {
  console.log("O VETOR ESTÁ ORDENADO");
} else {
  console.log("O VETOR NÃO ESTÁ ORDENADO");
}
    
    