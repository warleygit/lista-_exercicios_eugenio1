let salario = 1600;
let quilowats = 500;
let caixa = 0;
let desconto= 0;
let div=0;
if(salario==1500){

caixa = salario / 4 ;
   div= caixa /quilowats
console.log("o valor da energia e reais"+" "+caixa);

console.log ("quilowats gastos foram"+"  "+quilowats+"  =   "+div+"  "+" reais por quilowats gastos");



}
if (salario>1500){


caixa = salario  / 4  ;
desconto = caixa* 0.25;

div= caixa /quilowats

console.log ("quilowats gastos foram"+"  "+quilowats+"  =   "+div+"  "+" reais por quilowats gastos"+" \n -->  "+" o desconto foi de reais"+"  "+desconto)

 


}