/* Strings

* String é o tipo de dados para textos;
* AS strings podem ser escritas com aspas simples e duplas;
* Um número entre aspas pode ser considerado uma string;
* É possível também concatenar strings com o +;
* Vamos ver isso na prática!

*/
var nome = "Rafael";
var sobrenome = "Reimberg";

var nomeCompleto = nome + " " + sobrenome;

console.log(nome);
console.log(typeof nome);

console.log(typeof "ASD");

console.log(nomeCompleto);
console.log(typeof nomeCompleto);

console.log(typeof "5.292929");

var frase = 'Esta é uma frase complexa';

console.log(frase);
console.log(typeof frase);

console.log(nome + ', ' + frase);
console.log(typeof nome + ', ' + typeof frase);

document.write("<strong>Oi, 'Rafael'<br><hr></strong>");
document.write('<strong> Ele diz: "Rafael"<br><hr></strong>');

console.log("Este número: " + "432");

document.write("Este número: " + "<strong>'1987'</strong>");

console.log("Este número: " + nome);