//Boolean
const contaPaga: boolean = false;


//Number
const idade: number = 23;
const avaliacao: number = 4.5;


//String
const nome: string = "Luma";

//Array
const idades: number[] = [1, 2, 3, 25, 48];
const idades2: Array<number> = [1, 2, 3, 25, 48];

//Tuple: array com vários tipos de objetos, declarada quantidade e posição.
let jogadores: [string, number, boolean];
jogadores = ["Luma", 23, true];

//Enum: permite dar nomes a valores numéricos.
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any: para qualquer coisa mesmo, quando não se sabe o tipo. Usar com moderação pois se usa sempre, é como não usar tipagem. Usa-se, por exemplo, quando se espera o retorno de algo que não se sabe em qual formato chegará.
const RetornoDaAPI: any[] = [123, "Luma", false, 505];
const RetornoDaAPI2: any = {
    // .... vários objetos
}

//Void: usado em FUNÇÕES sem RETORNO. É uma forma de deixar explícito de que essa função não tem retorno e você sabe disso.
function printarNaTela(msg: string): void {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object: recebe objetos.
function criar(objecto: object) {
    //...
}

criar({                 //aqui estou chamando a função
    propriedade: 1
})

//Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro("Algo falhou");
}

//Union Types: declara que uma FUNÇÃO ou CONSTANTE pode ter mais de um type
function exibirNota(nota: number | string) {     //declarei que pode ser number ou srting
    console.log("A nota é" + nota);
}

exibirNota("10");  //posso usar string
exibirNota(10);    //posso usar number

//pode ser usado em função ou const, desta forma:
const nota: string | number = 5;


//Alias: permite criar um type próprio
type Funcionarios = Array<string>;
const funcionarios: Funcionarios = ["Fulano", "Ciclano", "Beltrano"];

function tratarFuncionarios(funcionarios: Funcionarios) {
    //..............
}


//Alias com recebimento de Objetos complexos

type cliente = {
    nome: string;
    sobrenome: string;
    dataDeNascimento: Date;
}

const listaClientes: cliente[] = [{
    nome: "Luma",
    sobrenome: "Fusco",
    dataDeNascimento: new Date,
},
{
    nome: "Lorena",
    sobrenome: "Oliveira",
    dataDeNascimento: new Date,
}
]

function tratarClientes(listaClientes: cliente[]) {
    for(let cliente of listaClientes){
        console.log("Nome do cliente:" + cliente.nome);
    }
}




// Valores Nulos ou Opicionais: permite que campos sejam nulos ou simplesmente não existam

let altura: number | null = 4.6;   //permite ser number ou nulo
altura = null 

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;  //ponto de interrogação diz que pode ser number ou nulo
}

const contato: Contato = {
nome: "Luma",
telefone1: "554218562",
//não precisa escrever "telefone2" e deixar vazio. ele pode simplesmente não exitir e tudo bem porque tem o "?" no type
}


//Type Assertion: deixar claro para o TS qual é o type por mais que ele acuse erro

const minhaIdade: any = 23; //o 23 não está definido que é number
(minhaIdade as number).toString(); //agora definimos que é number. Por isso funciona o toString auto complite

//vamos a um exemplo:
const input = document.getElementById("numero 1") as HTMLInputElement;
console.log(input.value);
//se vc tirar o HTMLInputElement o Js acusa erro porque ele acha que o input.value precisa ser obrigatóriamente HTMLElement ou null mesmo que nesse caso sabemos que é mesmo um input

//como no exemplo acima, podemos escrever de outra forma, como a seguir. É a mesma coisa!
const input = <HTMLInputElement>document.getElementById("numero 1");
console.log(input.value);