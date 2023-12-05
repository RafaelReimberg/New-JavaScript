/* Operadores lógicos

* Nas linguagens de programação existem os operadores lógicos;
* Estes operadores realizam comparações para que seja retornado um true ou false;
* Decidindo então o fluxo da aplicação;
* Utilizamos principalmente nas instruções de condição e repetição, em conjunto dos operadores de comparação;

Operador lógico &&

* O operador lógico && é conhecido também como AND;
* Ele vai retornar true apenas se as duas expressões retornarem true;
* Qualquer outro resultado o operado lógico and retornará false

*/

var idade = 32;
var nome = "Rafael";

    if(nome == "Rafael" && idade == 36){
    console.log("O " + nome + " pode entrar na aula de esgrima, pois sua idade é " + idade + "<br>");
    document.write("O " + nome + " pode entrar na aula de esgrima, pois sua idade é " + idade + "<br>");
    } else {
        console.log("Este não é o " + nome + "<br>");
        document.write("Este não é o " + nome + "<br>");
    }

        if((1 == 1 && 3 > 3) && true){
        console.log("Passou");
        document.write("Passou");
        } else if(nome === "Rafael" && idade >= 32){
            console.log("Aqui passou");
            document.write("Aqui passou");
        }

