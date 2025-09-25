let N = 5;       // Definimos até qual número vamos somar
let somaN = 0;   // Inicializamos a variável que vai guardar a soma

for (let i = 1; i <= N; i++) {  // Começa em 1 e vai até N
  somaN += i;                    // Equivalente a: somaN = somaN + i
}

console.log("Soma de 1 até", N, "é", somaN); // Mostra o resultado