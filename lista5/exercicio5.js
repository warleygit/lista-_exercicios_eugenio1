let precoVista = 100;
let cartao = 100;
let duasVezes = 100;
let tresVezes = 100;

let opcao = "0"; 
let pagamento = 0;

if(opcao == "1"){
    pagamento = precoVista - (precoVista * 0.10);
    console.log("Pagamento à vista com 10% de desconto: " + pagamento);
}
if(opcao == "2"){
    pagamento = cartao - (cartao * 0.05);
    console.log("Pagamento no cartão com 5% de desconto: " + pagamento);
}
if(opcao == "3"){
    pagamento = duasVezes;
    console.log("Pagamento em 2 vezes (preço normal): " + pagamento);
}
if(opcao == "4"){
    pagamento = tresVezes;
    console.log("Pagamento em 3 vezes (preço normal): " + pagamento);
}