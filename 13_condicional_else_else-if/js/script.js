/* Condicional: else e else if

* Caso a instrução de if seja negativa, podemos adcionar o else;
* Que será a outra condicional a ser executada;
* Podemos então criar uma bifurcação no código;
* já o else if tem a  possibilidade de fazer outra verificação e adcionar mais um bloco de código;

*/

var nome = "Natalia";

if(nome == "Gabriel"){
    console.log("O nome dele é Gabriel");
} else if(nome == "Rafael"){
    console.log("O nome é Rafael");
} else if(nome == "Natalia"){
    console.log("O nome é Natalia");
}else {
    console.log("Ele possui outro nome!");
}

var idade = 19;

if(idade > 20){
    console.log("Ele pode entrar na festa!");
} else if (idade >= 18){
    console.log("Ele só pode entrar com autorização!");
}

if(nome == "Luiza"){
    console.log("O nome é Luiza");
} else {
    console.log("O nome não é Luiza");
}