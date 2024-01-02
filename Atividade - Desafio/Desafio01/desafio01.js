//a empresa possui apenas uma peça a ser controlada;

// o sistema deverá solicitar sempre o saldo inicial da peça uma única vez a cada vez que o sistema é iniciado;

// 1 = compra (entrada) de peças
// 2 = venda (saída) de peças

// enquanto o usuário não encerrar a entrada de dados, 
//o sistema deverá continuar solicitando nova entrada de dados:

// os dados de entradas são: tipo de entrada e quantidade de peças;

// caso a entrada seja do tipo 1 (compra), somar a quantidade ao estoque da peça;

// caso a entrada seja do tipo 2 (venda), 
//subtrair a quantidade do estoque da peça caso a quantidade de entrada seja inferior ou igual ao 
//saldo de estoque. Caso seja informado uma quantidade maior que o saldo da peça, 
//apresentar a mensagem “Saldo insuficiente" e desconsiderar atualização de saldo;

// a cada entrada de dados, apresentar o saldo atualizado do estoque;

// ao final de cada entrada de dados, perguntar se o usuário deseja continuar (s) ou não (n) a entrada de dados;

// caso o usuário encerre o sistema, apresentar a mensagem "Sistema encerrado".
saldo = Number(prompt("Informar saldo inicial"));
document.write("Saldo inicial: " + saldo + "<br>");
encerrar = "n";
while(encerrar == "n"){
    operacao = Number(prompt("Informar tipo de operação"));
    quantidade = Number(prompt("Informar quantidade"));
    if(operacao == 1){
        saldo = saldo + quantidade;
        document.write("Entrada: " + quantidade + "<br>");
    }
    if(operacao == 2){
        if(saldo >= quantidade){
            saldo = saldo - quantidade;
            document.write("Saída: " + quantidade + "<br>");
        }else{
            document.write("Saldo insuficiente" + "<br>");
            alert("Saldo insuficiente");
        }
    }
    document.write("Saldo: " + saldo + "<br>");
    encerrar = prompt("Deseja encerrar ? (s/n)");
};
document.write("Sistema encerrado pelo usuario" + "<br>");