class Carro {
    constructor(modelo,velocidad,antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 10;
    }
    reducirVelocidad(){
        this.velocidad -= 10;
    }
};
// Herencia
class Autobus extends Carro{
    constructor(modelo,velocidad,antiguedad){
        super(modelo,velocidad,antiguedad);
        this.altura = 5;
    }

    mostrarAltura(){
        return `La altura ddel bus es ${this.altura}`;
    }
}

var carro1 = new Carro('BMW',200,2017);
var carro2 = new Carro('Jeep',220,2019);
var carro3 = new Carro('Ferrari',310,2021);
var autobus1 = new Autobus('Pegasus',210,2021);

console.log(autobus1.mostrarAltura());
document.write(`<h1>Velocidad ${carro1.velocidad}</h1>`)
carro1.aumentarVelocidad(carro1);
carro1.aumentarVelocidad(carro1);
carro1.aumentarVelocidad(carro1);
document.write(`<h1>Velocidad ${carro1.velocidad}</h1>`)
