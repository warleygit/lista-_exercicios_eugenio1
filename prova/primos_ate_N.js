let N = 20; // limite definido
console.log("Números primos até", N, ":");

for (let i = 2; i <= N; i++) {
  let ehPrimo = true;

  for (let j = 2; j <= i / 2; j++) { // verifica apenas até metade de i
    if (i % j === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) console.log(i);
}