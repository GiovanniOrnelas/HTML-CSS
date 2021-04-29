//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, 
//e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, 
//calcule e escreva o custo total da compra.


let maca_com_desconto = 1;
let maca_sem_desconto = 1.30;
let quantidade= 12;
let soma_com_desconto;
let soma_sem_desconto;


if (quantidade>=12){
    soma_com_desconto = maca_com_desconto * quantidade;
    console.log("você pediu"+ " " + quantidade + " maças, pagando no total de:" + soma_com_desconto + "$");
}

else{
    soma_sem_desconto = maca_sem_desconto * quantidade;
    console.log("você pediu"+ " " + quantidade  + " maças, pagando no total de:" + soma_sem_desconto + "$");
}