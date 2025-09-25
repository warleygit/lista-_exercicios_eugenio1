let vetor = [3, 7, 1, 9, 5];
let numeroProcurado = 7;
let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === numeroProcurado) {
    encontrado = true;
    break; // para o laço se encontrou
  }
}

if (encontrado) {
  console.log(numeroProcurado + " existe no vetor");
} else {
  console.log(numeroProcurado + " não existe no vetor");
}