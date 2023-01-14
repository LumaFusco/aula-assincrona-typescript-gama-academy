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
enum StatusAprovacao{
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any: para qualquer coisa mesmo, quando não se sabe o tipo. Usar com moderação pois se usa sempre, é como não usar tipagem. Usa-se, por exemplo, quando se espera o retorno de algo que não se sabe em qual formato chegará.
const RetornoDaAPI: any[]=  [123, "Luma", false, 505];
const RetornoDaAPI2: any = {
    // .... vários objetos
}

//Void: usado em FUNÇÕES sem RETORNO. É uma forma de deixar explícito de que essa função não tem retorno e você sabe disso.
function printarNaTela(msg: string): void{
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
    propriedade:1
})

//Never
function loopInfinito(): never {
    while(true) { }
}   

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha() {
return erro("Algo falhou");
}

