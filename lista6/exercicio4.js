let combustivel = 3;   
let litros = 20;      
let valorPagar = 0;

switch (combustivel) {
  case 1:
    valorPagar = litros * 4.805;
    console.log("Combustível escolhido: Álcool");
    console.log("Quantidade: " + litros + " litros");
    console.log("Valor a pagar: R$ " + valorPagar);
    break;

  case 2:
    valorPagar = litros * 5.953;
    console.log("Combustível escolhido: Diesel");
    console.log("Quantidade: " + litros + " litros");
    console.log("Valor a pagar: R$ " + valorPagar);
    break;

  case 3:
    valorPagar = litros * 6.565;
    console.log("Combustível escolhido: Gasolina");
    console.log("Quantidade: " + litros + " litros");
    console.log("Valor a pagar: R$ " + valorPagar);
    break;
}