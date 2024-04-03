"use strict";
class Coche {
    constructor(matricula, potencia, velocidad, modelo) {
        this.matricula = "";
        this.potencia = 0;
        this.velocidad = 0;
        this.modelo = "";
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }
    imprime() {
        return `El coche con matricula: + ${this.matricula}   , de modelo ` +
            `${this.modelo} , tiene una velocidad de :` + ` ${this.velocidad.toString()}
        y una potencia de  ${this.potencia} caballos  <br />`;
    }
    velocidadCrucero() {
        let veloz = this.velocidad;
        let potente = this.potencia;
        let resultado = Number(veloz) / Number(potente);
        return resultado;
    }
}
let Coche1 = new Coche("Zaader", 120.5, 110, "Seat 500");
let Coche2 = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
let Coche3 = new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500");
function velocidadMedia() {
    let suma = 0;
    suma = Number(Coche1.velocidad) + Number(Coche2.velocidad) + Number(Coche3.velocidad);
    let media = 0;
    media = suma / 3;
    return media;
}
function potenciaMedia() {
    let suma = 0;
    suma = Number(Coche1.potencia) + Number(Coche2.potencia) + Number(Coche3.potencia);
    let media = 0;
    media = suma / 3;
    return media;
}
document.writeln(Coche1.imprime());
document.writeln(Coche2.imprime());
document.writeln(Coche3.imprime());
document.writeln(Coche1.velocidadCrucero().toString());
document.writeln(Coche2.velocidadCrucero().toString());
document.writeln(Coche3.velocidadCrucero().toString());
document.writeln(potenciaMedia().toString());
document.writeln(velocidadMedia().toString());
//# sourceMappingURL=app.js.map