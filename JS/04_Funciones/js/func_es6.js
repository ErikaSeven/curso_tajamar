//Función clásica asignada a variable

let calcularCubo = function ( a ) {
    return a * a* a
}


//En ES6 tenemos las funciones "arrow" asignada a variable
//=>
//Formato extenso
let calcularCuboES6Ext = ( a ) => {return a * a* a}
//Abreviado
let calcularCuboES6 = a => a * a* a

let a = 12
setTimeout(function() {
    console.log(a * a* a)
} , 2000)

setTimeout(() => {
    a = 12
    console.log(a * a* a)
} , 3000)