import { METHODS } from "http";

 
//OBJETO LITERAL
const user = {
    nombre : 'Pepe',
    apellido : 'Pérez',
    direccion : {
    calle :  '',
    ciudad : '',
    c_postal : '', 
    
},
edad : 23,
isCasado : false}


console.log(typeof user)


user.cargo = "CEO"
user.nombre = "José"
console.log(user)

//OTROS TIPOS DE OBJETOS

//Array conjutno de propiedas de se indexan numéricamente  - estructura fundamental para recoger datos "todos los...0array" Si hay listas hay Arrays
let aDatos = [12, 22, 45, 67, 83,]
let aDatosChungo = [12, 'Pepe', true, null, undefined,]  //Podemos meter objetos en Array entre [],
console.log(aDatos)
console.log(aDatos[1]) //Los corchetes indican posición
aDatos[15] = 30
console.log(aDatos) //con esto nos guarda 30 posiciones

aUsuarios = [
    {  nombre : 'Pepe',
    apellido : 'Pérez',
    direccion : {
    calle :  '',
    ciudad : '',
    c_postal : '', 
    
},
edad : 23,
aficiones : ['deporte', 'papiroflexia'],
isCasado : false}
]


[  {nombre : 'Pepe',
apellido : 'Pérez',
direccion : {
calle :  '',
ciudad : '',
c_postal : '', 

},
edad : 23,
isCasado : false} //Así tantos usuarios haya
]


//Array

let x= {}


// console.log(Array.isArray(aUsuarios))


// String
// Number
// Boolean

// Function, Method, Constructor

// Date
// RegExp
// Error
// Function

let fecha = new Date()
let exp = new RegExp()
let error = new Error()


// Math.cos(90)  //nos de vuelve el coseno de 90
// JSON.parse()