let nome = "CHUCRÂO";
let tipo = 3;     // tipo de praga
let area = 300;
let preco = 0;

// escolha do preço por acre
switch (tipo) {
  case 1: preco = 50; break;
  case 2: preco = 100; break;
  case 3: preco = 150; break;
  case 4: preco = 250; break;
  default: console.log("Tipo inválido");
}

let custo = area * preco;
let desconto = 0;

// desconto de 5% 
if (area > 300) desconto += custo * 0.05;

// desconto de 10% 
if (custo > 10750) desconto += (custo - 10750) * 0.10;

let total = custo - desconto;

// saída
console.log("Fazendeiro: " + nome);
console.log("Área: " + area + " acres");
console.log("Custo: R$ " + custo);
console.log("Desconto: R$ " + desconto);
console.log("Total a pagar: R$ " + total);