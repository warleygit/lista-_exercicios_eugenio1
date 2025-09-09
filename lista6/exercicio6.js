let n1 = 6, n2 = 8, n3 = 10;
let opcao = 5;                          // escolha do tipo de média
let media = 0;

switch (opcao) {
  case 1:               // Aritmética
    media = (n1 + n2 + n3) / 3;
    console.log("Média Aritmética: " + media);
    break;

  case 2:               // Ponderada (pesos 3, 3, 4)
    media = (n1 * 3 + n2 * 3 + n3 * 4) / 10;
        console.log("Média Ponderada: " + media);
    break;

  case 3:               // Harmônica
    media = 3 / (1/n1 + 1/n2 + 1/n3);
    console.log("Média Harmônica: " + media);
    break;

  case 4:               // Geométrica
    media = (n1 * n2 * n3); // raiz cúbica do produto
    console.log("Média Geométrica: " + media);
    break;

  case 5:               // Quadrática (ou RMS)
    media = Math.sqrt((Math.pow(n1,2) + Math.pow(n2,2) + Math.pow(n3,2)) / 3);
    console.log("Média Quadrática: " + media);
    break;

  
}