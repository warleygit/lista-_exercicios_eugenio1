let N = 20; // você pode mudar esse valor

// Primeiro e segundo termos da sequência
let a = 0;
let b = 1;

console.log("Sequência de Fibonacci até", N, ":");
console.log(a); // imprime o primeiro termo

// Gera os termos enquanto forem menores ou iguais a N
while (b <= N) {
  console.log(b);
  let proximo = a + b;
  a = b;
  b = proximo;
}