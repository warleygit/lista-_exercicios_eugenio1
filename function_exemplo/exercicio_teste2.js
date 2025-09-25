function verificarParImpar(valor){
   const resto = valor%2;
   if(resto == 0) return "PAR";
   else return "IMPAR";
}

const numero = 10;
const resposta = verificarParImpar(numero);
console.log("O " + numero + " e " + resposta);