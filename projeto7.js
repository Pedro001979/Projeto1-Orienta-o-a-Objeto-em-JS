class Carros {
    marca;
    cor;
    gastoMEdioPorKm;

    constructor(marca, cor, gastoMEdioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMEdioPorKm = gastoMEdioPorKm;
    }

    calcularGatoDoPercurso(distanciaEmKm, precoDoCombustivel) {
        return distanciaEmKm * this.gastoMEdioPorKm * precoDoCombustivel
    }
};

const Kwid = new Carros('Renaut', 'Preta', 1 / 15, 7);
const Palio = new Carros('Fiat', 'Azul', 1 / 10);
console.log(Kwid.calcularGatoDoPercurso(100, 5));
console.log(Palio.calcularGatoDoPercurso(100, 5));
