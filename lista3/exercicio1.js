const Q = 0.1;   
const D = 0.1;   
const C = 130;  
const J = 10.643 * Math.pow(Q, 1.85) / (Math.pow(C, 1.85) * Math.pow(D, 4.87));
console.log("Perda de carga: ", J.toFixed(6));
