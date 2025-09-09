let euro = 6.617;
let libra = 6.816;
let dolar = 5.071;
let lene = 3.018;
let opcao = 3; 
let reais = 100;
let converter = 0;

switch (opcao) {
  case 1:
    converter = reais * euro;
    console.log("O valor em reais é " + reais + 
                "\nConvertidos em euros equivalem a " + converter);
    break;

  case 2:
    converter = reais * libra;
    console.log("O valor em reais é " + reais + 
                "\nConvertidos em libras equivalem a " + converter);
    break;

  case 3:
    converter = reais * dolar;
    console.log("O valor em reais é " + reais + 
                "\nConvertidos em dólares equivalem a " + converter);
    break;

  case 4:
    converter = reais * lene;
    console.log("O valor em reais é " + reais + 
                "\nConvertidos em lenes equivalem a " + converter);
    break;

  default:
    console.log("Opção inválida");
}