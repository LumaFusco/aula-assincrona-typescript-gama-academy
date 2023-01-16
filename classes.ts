class Data {
    constructor(dia, mes, ano) {
        this.dia = dia; //o dia do class Data é = o dia do constructor
        this.mes = mes;
        this.ano = ano;
    }
}
/*--------------------------------------------------------------------------------*/
// public e private são MODIFICADORES DE ACESSO
const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(mes.dia); //mês da erro pq é privado, quanto dia dá pq é public
/*--------------------------------------------------------------------------------*/
//Agora vamos imaginar que eu quero iniciar uma data sem o ano:
const data2 = new Data(1, 1); //se ficar assim o TS reclama que falta o ano. Então criamos um ano the full, pro padrão é 1970. Desta forma, no constructor ficaria: 
/*constructor(dia: number, mes: number, ano: number = 1970) {
    this.dia = dia;
   this.mes = mes;
   this.ano = ano;
}*/
/*--------------------------------------------------------------------------------*/
//Agora vamos reduzir o códgo class + constructor:
class DataReduzido {
    constructor(dia, mes, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}


