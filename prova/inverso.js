let opcao = 12345; // você pode mudar esse valor
let numero = opcao;
let inverso = 0;

while (numero > 0) {
  let digito = numero % 10;        // pega o último dígito
  inverso = inverso * 10 + digito; // adiciona ao inverso
  numero = Math.floor(numero / 10); // remove o último dígito
}

console.log("Número original:", opcao);
console.log("Número invertido:", inverso);