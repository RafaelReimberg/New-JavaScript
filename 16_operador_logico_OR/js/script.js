/* Operador lógico ||

* O Operador lógico || é conhecido também como OR;
* Ele retorna true caso uma das operações retorne verdadeiro;
* O OR retorna false apenas se as duas expressões são falsas;

*/

var idade = 31;
var nome =  "Rafael";

if(nome == "Rafael" || idade > 36){
    console.log("Você pode soltar pipa :)");
    document.write("Você pode soltar pipa :)");
} else {
    console.log("Não pode ir soltar pipa. (OBS. Muie barrou).");
}

if(nome == "Rafael" && 15 > 20 || 10 == 9){
    console.log("testando");
}


if((nome == "Rafael" || 15 > 14) && 10 == 10){
    console.log("testando2");
}
else {
    console.log("Não entrou");
}
