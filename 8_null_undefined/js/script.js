/* undefined e null

* undefined e null também são considerados tipos de dados;
* O null é um tipo de dado que representa um valor;
* O undefined é um tipo de dado para uma variável com valor não atribuído;

*/

// Hoisting - içamento - Hoisting está sempre inicializada no JavaScript e sempre vem no top do codigo. 
console.log(sobrenome);
document.write(sobrenome + '<br>variável esta criada mas não tem valor, por isso retorna undefined.<hr></hr>');
console.log(numero);
document.write(numero + '<br>Hoisting está sempre inicializada no JavaScript e sempre vem no top do codigo. pois a variavel esta declarada mais abaixo e como o hoisting entende-se undefined por começa do top as chamadas.<hr></hr>');

//------------------------------------------------

var nome = null; // variável esta declarada com o valor null.
var sobrenome; // variável esta criada mas não tem valor, por isso retorna undefined.

console.log(nome);
console.log(sobrenome); 

nome = "Rafael"; // variável recebendo o valor da variável que estava com o valo null.
sobrenome = "Reimberg" // variável está recebendo o valor que estava undefined e sem valor.

console.log(nome);
console.log(sobrenome);

var numero = 5;
