//Faça um algoritmo onde tenha uma variável de memória para armazenar a descrição do produto (nome), 
//outra para armazenar a  quantidade adquirida e outra para armazenar o preço
//unitário. Calcular e imprimir o total (total = quantidade adquirida * preço unitário), 
//o desconto e o total
//a pagar (total a pagar = total - desconto), sabendo-se que:
//- Se quantidade <= 5 o desconto será de 2%
//- Se quantidade > 6 e quantidade <=10 o desconto será de 3%
//- Se quantidade > 11 o desconto será de 5%

let nome = 'Giovanni';
let quantidade_adquirida = 11;
let preço_de_cada_unidade = 1;
let desconto_5_unidades= 0.02;
let desconto_6_10_unidades = 0.03;
let desconto_11_para_cima = 0.05;

if (quantidade_adquirida<=5){
    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_5_unidades;
    console.log(nome + " " +"precisa pagar: " + total)
}

if (quantidade_adquirida>=6 && quantidade_adquirida<=10){
    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_6_10_unidades;
    console.log( nome + " " +" precisa pagar: " + total)
}

if (quantidade_adquirida>=11){
    total = (quantidade_adquirida * preço_de_cada_unidade) / desconto_11_para_cima;
    console.log( nome + " " +"precisa pagar: " + total)
}





