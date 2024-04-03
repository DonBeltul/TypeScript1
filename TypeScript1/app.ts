class Coche
{
    matricula: string = "";
    potencia: BigInt = 0 as unknown as BigInt;
    velocidad: BigInt = 0 as unknown as BigInt;
    modelo: string = "";

    constructor(matricula: string, potencia: BigInt, velocidad: BigInt, modelo: string) {

        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;

    }
    imprime(): string
    {
        return `El coche con matricula: + ${ this.matricula }   , de modelo `+
            `${ this.modelo } , tiene una velocidad de :`+ ` ${ this.velocidad.toString() }
        y una potencia de  ${ this.potencia} caballos  <br />`; 
    }
    velocidadCrucero(): Number
    {
        let veloz = this.velocidad as unknown as bigint;
        let potente = this.potencia as unknown as bigint;
        let resultado = Number(veloz) / Number(potente);
        return resultado;
    }
}


let Coche1 = new Coche("Zaader", 120.5 as unknown as BigInt, 110 as unknown as BigInt, "Seat 500");
let Coche2 = new Coche("ZZ-2443", 130.3 as unknown as BigInt, 125 as unknown as BigInt, "Volvo 678");
let Coche3 = new Coche("iuhsuahs", 150.8 as unknown as BigInt, 135.6 as unknown as BigInt, "Mercedes 500");

function velocidadMedia(): Number
{
    let suma = 0;
    suma = Number(Coche1.velocidad) + Number(Coche2.velocidad) + Number(Coche3.velocidad);
    let media = 0
    media = suma / 3;
    return media;
}
function potenciaMedia(): Number
{
    let suma = 0;
    suma = Number(Coche1.potencia) + Number(Coche2.potencia) + Number(Coche3.potencia);
    let media = 0
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

