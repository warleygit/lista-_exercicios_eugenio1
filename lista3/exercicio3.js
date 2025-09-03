const raio = 0.05;   
const altura = 0.12; 
const precoAluminio = 145.00;
const areaBase = Math.PI * Math.pow(raio, 2) * 2; 
const areaLateral = 2 * Math.PI * raio * altura;
const areaTotalLata = areaBase + areaLateral;
const custoLata = areaTotalLata * precoAluminio;
console.log("Custo da lata: ", custoLata.toFixed(2));

