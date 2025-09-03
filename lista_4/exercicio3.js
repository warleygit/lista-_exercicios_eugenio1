 let numero = 3025;

let part1 = Math.floor(numero / 100); 
let part2 = numero % 100;             
let soma = Math.pow(part1 + part2, 2); 

if (soma === numero) {
    console.log("O número corresponde às características: " + numero);
} else {
    console.log("O número não corresponde às características: " + numero);
}