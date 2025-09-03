
let precoVeiculo = 10000;
let Ar = 1750;
let pintura = 800;
let vidroEletrico = 1200;
let direcao = 2000;

let precoFinal = precoVeiculo;


opcao ="2";

if (opcao=="1") {
    precoFinal += Ar;
    console.log("Ar condicionado: " + precoFinal);
}

if (opcao=="2") {
    precoFinal += pintura;
    console.log("Pintura: " + precoFinal);
}

if (opcao=="3") {
    precoFinal += vidroEletrico;
    console.log("Vidro elétrico: " + precoFinal);
}

if (opcao=="4") {
    precoFinal += direcao;
    console.log("Direção: " + precoFinal);
}

console.log("Preço final do veículo: " + precoFinal);