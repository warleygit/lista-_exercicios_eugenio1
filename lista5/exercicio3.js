let lado1 = 5;
let lado2 = 5;
let lado3 = 8;

if (lado1 == lado2 && lado2 == lado3) {
    console.log("É um triângulo equilátero");
}

if ((lado1 == lado2 && lado1 != lado3) ||
    (lado1 == lado3 && lado1 != lado2) ||
    (lado2 == lado3 && lado2 != lado1)) {
    console.log("É um triângulo isósceles");
}

if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    console.log("É um triângulo escaleno");
}