class Envio
{
    identificador: string = "";
    numEnvio: bigint = 0 as unknown as bigint;
    precioEnvio: number;
    recibido: boolean;

    constructor(identificador: string, numEnvio: bigint, precioEnvio: number, recibido: boolean) {

        this.identificador = identificador;
        this.numEnvio = numEnvio;
        this.precioEnvio = precioEnvio;
        this.recibido = recibido;

    }
    calcular(): string
    {
        let iva = this.precioEnvio * 0.21;
        return `El precio del iva de ${this.precioEnvio.toString()} es ${iva.toString()} <br/>`; 
    }
    validarId()
    {
        let patron = /^[A-H]{2}[0-9]{2}[I-Z]{2}$/;
        return (patron.test(this.identificador));

    }
    imprime(): string
    {
        return `Este envio con el identificador ${this.identificador.toString()}, con numero de envio ${this.numEnvio.toString()}
        , con un precio de ${this.precioEnvio.toString()} y estado de recepcion es: ${this.recibido} <br/>`;
    }
}


let Envio1 = new Envio("AH23IZ", 20 as unknown as bigint, 235.23, true);
let Envio2 = new Envio("ABC3IZ", 25 as unknown as bigint, 45.23, true);
let Envio3 = new Envio("CF45XY", 15 as unknown as bigint, 180.23, true);

document.writeln(Envio1.imprime());
document.writeln(Envio2.imprime());
document.writeln(Envio3.imprime());
document.writeln("El validador es " + Envio1.validarId().toString() + "<br/>");
document.writeln("El validador es " + Envio2.validarId().toString() + "<br/>");
document.writeln("El validador es " + Envio3.validarId().toString() + "<br/>");
document.writeln(Envio1.calcular());
document.writeln(Envio2.calcular());
document.writeln(Envio3.calcular());



