/* Tipos de dados: Arrays

* Na verdade os arrays são considerados objetos em JavaScript, porém servem como listas;
* Podemos ter itens de qualquer tipo de dados também;
* Porém não por chave e valor, e sim por índice;

*/

var arr = [5, "Rafael", true, {teste1: 1, teste2: 2}]; // obj => {}

console.log(arr);


var arr2 = [2,3,4,5,6];

console.log(arr2);

console.log(arr[1]);
console.log(arr2[0]);

arr[4] = 10; // Desta forma adicionamos elementos na array

arr[2] = "Reimberg"; // E esta forma modificamos o elemento da array

console.log(arr);