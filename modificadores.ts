// utilizando MODIFICADORES DE ACESSO

class Carro {
    velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);