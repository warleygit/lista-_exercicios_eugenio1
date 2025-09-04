
let alcool=4.805;
let diesel= 5.953;
let gasolina=6.565;
let opcao='2'
let litros= 10;
let valorTotal=0;
if(opcao=='1'){
valorTotal= alcool*litros;
    console.log("o valor total do abastecimento e de R$"+valorTotal);
}
if (opcao=='2'){
    valorTotal=diesel*litros;
    console.log(" o valor total do abastecimento e de R$"+valorTotal);

}
if(opcao=='3'){
   valorTotal=gasolina*litros; 
    
    console.log("o  jjjjvalor total do abastecimento e de "+  valorTotal);
}