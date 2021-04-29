let mediaTotal;
let soma;
let nota1 = 10;
let nota2 = 5;
let nota3 = 7.5;
let peso1 = 2;
let peso2 = 3;
let peso3= 4;


 soma = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3);
 let mediaTotal= soma / (peso1 + peso2 + peso3);


if (mediaTotal>=7){
    console.log("aprovado" + mediaTotal);
}

else{
    console.log("reprovado" + mediaTotal);
}