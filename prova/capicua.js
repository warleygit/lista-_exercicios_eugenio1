let numero = 1221;
let temp = numero;
let invertido = 0;

while (temp > 0) {
  let resto = temp % 10;         // pega o último dígito
  invertido = invertido * 10 + resto; // monta o número invertido
  temp = Math.floor(temp / 10);  // remove o último dígito
}

if (numero === invertido) {
  console.log(numero + " é capicua");
} else {
  console.log(numero + " não é capicua");
}