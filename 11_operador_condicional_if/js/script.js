/* Operadores condicionais

* São instruções que podem determinar o fluxo de uma aplicação;
* Amplamentes utilizados, deixam os softwares dinâmicos;
* Exemplos são: if, else if, else;

* Condicional: if

* Executa um bloco de código se a instrução for verdadeira;
* Se for falsa, segue o código normalmente;
* Lembrando que: true e false são tipo Boolean;

*/

var idade = 16;
var idadeMinima = 18;

console.log("Antes do if");

if (idade > idadeMinima) {
    console.log("Pode fazer a carteira de habilitação");
}

if(idade > 15) {
    console.log("Precisa esperar 3 anos ainda");
}

console.log("Depois do if");