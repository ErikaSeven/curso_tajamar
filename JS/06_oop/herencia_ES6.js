//Herencia en ES6
class Persona {
    constructor (nombre, fecha, altura){   //al ser EM6 la class siempre va acompañada de CONSTRUCTOR
        this.nombre = nombre
        this.fechaNacimiento = fecha
        this.altura = altura
    }
_calcularAños() {
    let hoy = new Date()
    return parseInt((hoy - this.fechaNacimiento)/(1000+60+60+24+365))
    
}

    saludar(){
        console.log(`Hola soy ${this.nombre}
        y tengo ${this._calcularAños()}`)
    }
    
}

persona1 = new Persona('Alicia', new Date(1983, 4, 11), 1,68)
persona1.saludar()

class Alumno extends Persona {  //EXTENS es palabra reservada y copia propiedades de persona
    constructor(nombre, fecha, altura,  aula, equipo) {
    super(nombre, fecha, altura)
    this.aula = aula
    this.equipo = equipo
    }

    saludar (){
        super.saludar()
        console.log(`Soy del equipo ${this.equipo}`)
    }
}

alumno1 = new Alumno('Alicia', new Date(1983, 4, 11), 1,68, 'T23', 'Delta')
alumno1.saludar()
