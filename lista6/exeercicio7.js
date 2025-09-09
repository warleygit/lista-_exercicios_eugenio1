const PI = Math.PI;


let opcao = 1; 


let raioCone = 3;
let alturaCone = 5;

let raioCilindro = 4;
let alturaCilindro = 6;

let raioEsfera = 2;

switch (opcao) {
    case 1:
        
        let volumeCone = (PI * Math.pow(raioCone, 2) * alturaCone) / 3;
        let areaCone = PI * raioCone * Math.sqrt(Math.pow(raioCone, 2) + Math.pow(alturaCone, 2));
        console.log("Volume do cone reto:", volumeCone);
        console.log("Área da superfície do cone reto:", areaCone);
        break;

    case 2:
        
        let volumeCilindro = PI * Math.pow(raioCilindro, 2) * alturaCilindro;
        let areaCilindro = 2 * PI * raioCilindro * (raioCilindro + alturaCilindro);
        console.log("Volume do cilindro:", volumeCilindro);
        console.log("Área da superfície do cilindro:", areaCilindro);
        break;

    case 3:
        
        let volumeEsfera = (4 / 3) * PI * Math.pow(raioEsfera, 3);
        let areaEsfera = 4 * PI * Math.pow(raioEsfera, 2);
        console.log("Volume da esfera:", volumeEsfera);
        console.log("Área da superfície da esfera:", areaEsfera);
        break;

    

}