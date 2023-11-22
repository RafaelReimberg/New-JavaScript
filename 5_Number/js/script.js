/* Tipos de dados

* No JavaScript temos diversos tipos de dados, os mais comuns e utilizados são:
* Number, String, Boolean, null e undefined, Object;
* Podemos verificar o tipo do dado com o operado typeof;

    Tipos de dados: Number

* O Number é tipo de dados para números;
* Possui três valores simbólicos: +Infinity, -Infinity e NaN;
* Não existe um tipo definido para inteiros, todos número é um Number;
* Vamos fazer alguns testes!


*/


var numero = 5;

console.log(numero);
console.log(typeof numero);

var float = 5.32;

console.log(float);
console.log(typeof float);

var textoComNumero = "523";

console.log(textoComNumero);
console.log(typeof textoComNumero);

console.log(NaN);
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof -Infinity);