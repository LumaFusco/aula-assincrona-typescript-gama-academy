// utilizando MODIFICADORES DE ACESSO

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220  //private praNinguemMudar, sóDentroDaClasse
    ) { }

    //para alterar dentro da própria classe no caso de private:

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }

}

const carro = new Carro ("Nivus", "Volks", 250);
carro.acelerar();


//HERANÇA
class Camaro extends Carro{                         //extends pra criar herança de Carro
    private turbo = false;
    
    constructor(){
        super("Chevrolet", "Camaro", 500);         //super para chamar a classe pai
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar()
camaro.frear();
camaro.ligarTurbo();
