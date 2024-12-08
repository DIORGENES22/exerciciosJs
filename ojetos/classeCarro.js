class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel

    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 30);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('fiat', 'azul', 1 / 14);
console.log(palio.calcularGastoDePercurso(70, 5))

