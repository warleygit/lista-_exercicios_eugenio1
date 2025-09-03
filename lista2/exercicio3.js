const P = 400.00;   
const i = 0.01;     
const n = 12;       
const valorFuturo = P * (Math.pow(1 + i, n) - 1) / i;
console.log("Valor futuro: ", valorFuturo.toFixed(2));
