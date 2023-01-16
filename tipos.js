"use strict";
//Boolean
const contaPaga = false;
//Number
const idade = 23;
const avaliacao = 4.5;
//String
const nome = "Luma";
//Array
const idades = [1, 2, 3, 25, 48];
const idades2 = [1, 2, 3, 25, 48];
//Tuple: array com vários tipos de objetos, declarada quantidade e posição.
let jogadores;
jogadores = ["Luma", 23, true];
//Enum: permite dar nomes a valores numéricos.
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
//Any: para qualquer coisa mesmo, quando não se sabe o tipo. Usar com moderação pois se usa sempre, é como não usar tipagem. Usa-se, por exemplo, quando se espera o retorno de algo que não se sabe em qual formato chegará.
const RetornoDaAPI = [123, "Luma", false, 505];
const RetornoDaAPI2 = {
// .... vários objetos
};
//Void: usado em FUNÇÕES sem RETORNO. É uma forma de deixar explícito de que essa função não tem retorno e você sabe disso.
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined
const u = undefined;
const n = null;
//Object: recebe objetos.
function criar(objecto) {
    //...
}
criar({
    propriedade: 1
});
//Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro("Algo falhou");
}
//Union Types: declara que uma FUNÇÃO ou CONSTANTE pode ter mais de um type
function exibirNota(nota) {
    console.log("A nota é" + nota);
}
exibirNota("10"); //posso usar string
exibirNota(10); //posso usar number
//pode ser usado em função ou const, desta forma:
const nota = 5;
const funcionarios = ["Fulano", "Ciclano", "Beltrano"];
function tratarFuncionarios(funcionarios) {
    //..............
}
const listaClientes = [{
        nome: "Luma",
        sobrenome: "Fusco",
        dataDeNascimento: new Date,
    },
    {
        nome: "Lorena",
        sobrenome: "Oliveira",
        dataDeNascimento: new Date,
    }
];
function tratarClientes(listaClientes) {
    for (let cliente of listaClientes) {
        console.log("Nome do cliente:" + cliente.nome);
    }
}
// Valores Nulos ou Opicionais: permite que campos sejam nulos ou simplesmente não existam
let altura = 4.6; //permite ser number ou nulo
altura = null;
const contato = {
    nome: "Luma",
    telefone1: "554218562",
    //não precisa escrever "telefone2" e deixar vazio. ele pode simplesmente não exitir e tudo bem porque tem o "?" no type
};
//Type Assertion: deixar claro para o TS qual é o type por mais que ele acuse erro
const minhaIdade = 23; //o 23 não está definido que é number
minhaIdade.toString(); //agora definimos que é number. Por isso funciona o toString auto complite
//vamos a um exemplo:
const input = document.getElementById("numero 1");
console.log(input.value);
//se vc tirar o HTMLInputElement o Js acusa erro porque ele acha que o input.value precisa ser obrigatóriamente HTMLElement ou null mesmo que nesse caso sabemos que é mesmo um input
//como no exemplo acima, podemos escrever de outra forma, como a seguir. É a mesma coisa!
const input = document.getElementById("numero 1");
console.log(input.value);
