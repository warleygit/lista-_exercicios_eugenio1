const valorPrestacao = 110.00;
const taxaJuros = 0.5;   
const diasAtraso = 15;
const valorAtualizado = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso);
console.log("Prestação atualizada: ", valorAtualizado.toFixed(2));

