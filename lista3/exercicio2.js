const publicoTotal = 15000;
const ingressosPopular = publicoTotal * 0.10;
const ingressosGeral = publicoTotal * 0.50;
const ingressosArquibancada = publicoTotal * 0.30;
const ingressosCadeiras = publicoTotal * 0.10;
const rendaTotal = ingressosPopular * 5 + ingressosGeral * 10 + ingressosArquibancada * 20 + ingressosCadeiras * 40;
console.log("Renda total: ", rendaTotal.toFixed(2));
