let vt1 = [170, 29, 36, 4, 58, 6, 7, 18, 9, 2];

let maior = vt1[0];
let menor = vt1[0];

for (let i = 0; i < vt1.length; i++) {
  console.log(vt1[i]); // mostra o valor atual

  if (vt1[i] > maior) {
    maior = vt1[i];
  }

  if (vt1[i] < menor) {
    menor = vt1[i];
  }
}

console.log("O maior é: " + maior);
console.log("O menor é: " + menor);