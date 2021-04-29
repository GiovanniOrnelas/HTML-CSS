//Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, 
//calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo 
//atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 
//'Saldo Negativo'.

let numero_conta_cliente = 555;
let saldo = 500;
let debito = 300;
let credito = 1000;

saldoAtual = saldo - debito + credito;

if (saldoAtual>=0){
    console.log("o seu saldo está positivo :" + " " +  saldoAtual)
}

else{
    console.log("o seu saldo está negativo:" + " " + "-" + saldoAtual)
}

