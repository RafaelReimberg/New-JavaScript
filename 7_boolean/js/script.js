/* Tipos de dados: Boolean

* O Boolean representa um valor verdadeiro ou falso;
* Comparações resultam em booleans;
* Podemos também atribuir um true ou false para uma variável e ela terá o tipo de Boolean;

*/

var verdadeiro = true;

console.log(verdadeiro);
console.log(typeof verdadeiro);

console.log (typeof true);
console.log (typeof false);

var falso = false;

console.log(falso);
console.log(typeof falso);



function vdd() {
    const vd = 25;
        if (vd >= 30) {
            return true;
        } else {
            return false;
        }
}

console.log(vdd());
document.write(vdd());