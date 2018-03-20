
//Invocación de la función
mostrar('Pepe')

//Declaración de la función
//Hiting de funciones
function mostrar (n) {
console.log(`Me han pasado ${n}`)
}


//Creados por el construtor de la función (objetos)
/*var suma = new Function("a", "b", "return a+b") 
var x = new Object()
var aDatos = new Array[]*/

//Función === Objetos
//Función anónima
//Asignación de la función a una variable
let mostrarVariable = function (n) {
console.log(`Me han pasado ${n}`)
}

//Invocación de la función. Si cambiamos la función de lugar, arriba de let mostrarVariable, no aparecerá porque no está declarada porque e suna función asiganada a una variable
mostrarVariable('Juan')