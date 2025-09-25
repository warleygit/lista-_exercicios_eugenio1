let N = 10; // limite definido
let soma = 0;

for (let i = 2; i <= N; i += 2) { // percorre apenas os números pares
  soma += i;
}

console.log("Soma de todos os números pares de 1 até", N, "é", soma);
