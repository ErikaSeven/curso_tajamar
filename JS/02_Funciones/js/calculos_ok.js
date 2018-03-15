 "use strict"


// a y b son argumentos

function sumar (a, b) {  //función pura
    var c = a + b
    return c
}

function restar (a, b) {  //función pura
    var c = a - b
    return c
}

function mostrar(r) {
    console.log("El resultado es ", r)  //función voy - pinta en console
}

// paso 2 parámetros

var x = 123
var y = 34
var r= sumar(x, y)
x = 123
y = 24
r = sumar(123, 34)
mostrar(r)
mostrar(sumar(23, 45))
mostrar(sumar(2, 5))

var x = 123
var y = 34
var r = restar(y, x)
mostrar(r)