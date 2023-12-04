/* Operadores de comparação

* São comumente utilizados para verificação nas estruturas de condição;
* Temos os seguintes operadores: ==, !=, >, <, >=, <=
* A partir de um expressão de compração podemos obter um true ou false;

*/

var idade = 18;
var possuiCarro = 1;

if(idade >= 18){
   console.log("O usuário pode fazer a carteira");
}

if(idade <= 17){
    console.log("O usuário não pode fazer a carteira");
}

if(possuiCarro){
    console.log("O usuário já pode andar de carro");
}


var nome = "Rafael";

if(nome == "Rafael" && idade == 18){
    console.log("O seu nome é " + nome + " sua idade é de " + idade);
}

if(nome != "Reimberg"){
   console.log("O seu nome não é Reimberg");
}

if (20 > 10){
    console.log("Passou");
}

if (10 < 20){
    console.log("Passou 2");
}