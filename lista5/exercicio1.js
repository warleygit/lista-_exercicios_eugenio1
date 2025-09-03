let numero = 25;
let raiz = Math.sqrt(25);

if (numero < 0) {
  console.log("Ops, número negativo! Digite outro número.");
} else if (Number.isInteger(raiz)) {
  console.log("É quadrado perfeito "+raiz) ;
} else {
  console.log("Não é quadrado perfeito"+raiz);
}