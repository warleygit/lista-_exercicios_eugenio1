let opcao = 3672; // você pode mudar esse valor

// Conversão
let horas = Math.floor(opcao / 3600);       // 1 hora = 3600 segundos
let minutos = Math.floor((opcao % 3600) / 60); // o resto em minutos
let segundos = opcao % 60;                 // o resto em segundos

// Exibe o resultado
console.log(opcao + " segundos equivalem a:");
console.log(horas + " horas");
console.log(minutos + " minutos");
console.log(segundos + " segundos");