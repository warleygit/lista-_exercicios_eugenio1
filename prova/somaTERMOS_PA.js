let primeiroTermo = 2;  // primeiro termo
let razao = 3;          // razão
let quantidade = 5;     // número de termos

let soma = 0;

console.log("Termos da PA:");
for (let i = 0; i < quantidade; i++) {
  let termo = primeiroTermo + i * razao;
  console.log(termo);
  soma += termo;
}

console.log("Soma dos termos:", soma);