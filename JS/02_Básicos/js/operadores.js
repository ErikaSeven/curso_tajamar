import { exists } from "fs";

//expresión de asiganción
let x = 25

//instrucción -> side effect
console.log(x)

x++ //x = x+1
x-- //x = x-1

// Operadores aritméticos
x = 27
y = parseInt(x / 5)  //ParseInt se queda con la parte entera. Esto es = 5
console.log(y)
let r = x % 5 //Nos quedamos con el resto. Esto es = 2
y = x / 5 //5.4
console.log(y)

//Operadores de asignación aritmética
x = 12
x += 4 // x = x + 4 = 16
console.log(x)

//Operadores relacionales
x = 12
y = '12'
console.log( x == y) //igual
console.log( x != y) //negativo
console.log( x === y) //idéntico
console.log( x !== y)

//ERROOOOOOR
// if (x= 22) {
    
// }

if(x === 12) {
    console.log("Estoy dentro del if")
}
console.log(!!x)  //Para convertir cualquier cosa en booleano basta con negarlo 2 veces = notx

x = 'abc'
y = 'def'
console.log(x < y)  //Lo lee por el orden de las letras, a es anterior a d. Manera de saber el orden alfabético de las cosas

console.log(x.lenght === y.lenght) 

//Operadores ternarios: consta de tres partes, una expresióny dos respuestas diferentes

//expresion ? true : false

let edad = 12
console.log(edad > 30 ? 'Buenos días' : 'Hola chaval') //Para expresiones sencillas donde queremos sacar dos mensajes diferentes

let a = 12
let b = 2
let c = 4

if(a > b || a < z) {
    console.log("Comprobado")
}

