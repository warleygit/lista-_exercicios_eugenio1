let precoEtiqueta = 100; 
let opcao = 4; 
let valorFinal = 0;

switch (opcao) {
  case 1:
    valorFinal = precoEtiqueta - (precoEtiqueta * 0.10);
    console.log("Pagamento à vista (dinheiro/cheque) com 10% de desconto");
    console.log("Valor final: R$ " + valorFinal);
    break;

  case 2:
    valorFinal = precoEtiqueta - (precoEtiqueta * 0.05);
    console.log("Pagamento à vista (cartão) com 5% de desconto");
    console.log("Valor final: R$ " + valorFinal);
    break;

  case 3:
    valorFinal = precoEtiqueta;
    console.log("Pagamento em 2x sem juros");
    console.log("2 parcelas de R$ " + (valorFinal / 2));
    break;

  case 4:
    valorFinal = precoEtiqueta + (precoEtiqueta * 0.10);
    console.log("Pagamento em 3x com 10% de juros");
    console.log("3 parcelas de R$ " + (valorFinal / 3));
    console.log("Valor final: R$ " + valorFinal);
    break;

  default:
    console.log("Opção inválida!");
}