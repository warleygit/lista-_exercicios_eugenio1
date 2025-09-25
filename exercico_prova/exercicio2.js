

 let preco = 100;

let produto = 0;
let desconto=0;

if( preco<100){

produto= preco ;
desconto = preco /(100)*0.6;
console.log  (" produto  muito barato"+" "+preco   );
console.log (desconto+" "+"reais de desconto");
}
if (preco==100){
produto= preco ;
desconto = preco /(100)*0.15;
console.log  (" produto normal"+" "+ preco +" "+"reais"   );
console.log (desconto+" "+"reais de desconto");
}


if (preco> 100 ){

produto= preco ;
desconto = preco /(100)*0.20;
console.log  (" produto caro"+" "+preco    );
console.log (desconto+" "+"reais de desconto");
}

if (preco>= 200){

produto= preco ;

console.log  (" produto muito caro"+" "+preco    );

}

