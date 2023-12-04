/* Tipos de dados: Objetos

* Funcionam como uma array associativo de outras linguagens;
* Podemos criar propriedades com chave e valor;
* A ideia é guardar um conjunto de valores para utilizar posteriormente;

*/
var obj = {
    nome: "Rafael",
    idade: 36,
    profissao: "Suporte",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj = {nome: "Gabriel",
        idade: 6,
        profissao: "Estudante",
        estaTranalhando: false,
 };

console.log(obj.nome);

console.log(obj);

obj.graduacao = "Administrador de Rede";

console.log(obj);

