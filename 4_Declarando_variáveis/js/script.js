/*
    Variáveis

    * As variáveis armazenam valores;
    * Estes valores podem ser utilizados posteriormente;
    * No JavaScript é possível criar variáveis de 3 formas;
    * Podemos mudar o tipo da variável livremente (tipagem fraca);

*/

// ---- Declarando Váriaveis!

var teste = 1; // declarou um variavel número.

nome = "Rafael"; // desta maneira a variavel é global.

console.log(teste);

teste = "novo teste com a variavel teste!" // declarou uma string 

console.log(teste); 

console.log(nome);

// ---- Variavel não pode ser declarda com caracterer especial

// var @nome = 'ASD';
// console.log(@nome);

// -- Neste dois caso com $ e _ é possível declarar a variavel.

var $nome = 'ASD';
var _nome = 'ASD1';

console.log($nome);
console.log(_nome);

// --- Não podemos declarar variavel com número no inicio.

//var 5nome = 'ASD2';
//console.log(5nome);

// -- Mas no final da variavel é possivel utilizar o número

var nome5 = 'ASD3'
console.log(nome5);

var meuPrimeiroNome = 'Rafael'; // camelCase
console.log(meuPrimeiroNome);

var meusobrenome = 'Reimberg';
console.log(meusobrenome);

let testando = 1;
const ola = 2;

console.log(testando);
console.log(ola);

var rafael;

console.log(rafael)

rafael = "Reeimberg";

console.log(rafael)