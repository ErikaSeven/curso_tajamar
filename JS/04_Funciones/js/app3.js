function calcularCuadrado ( a ) {
    a *= a
    return a
}

function calcularCubo ( a ) {
    a = a * a * a
    return a
}

function MostarCalculo(n, f) {     //dos valores, N un número y F una función
// return f(n) 
    console.log(`El resultado es ${f(n)}`)    //La función F se va a aplicar sobre N
}

let n = 5
/*console.log(calcular(n, calcularCuadrado))
console.log(calcular(n, calcularCubo))
console.log(calcularn,(n, function() {
    return n*2
}))*/

/*MostrarCalculo(n, calcularCuadrado)
MostrarCalculo(n, calcularCubo)
MostrarCalculo(n, function() {
    return n*2
})*/

function mostrarResultado1 () {
    console.log(calcularCubo(n))
}

let mostrarResultado2 = function() {
    console.log(calcularCubo(n))

}


setTimeout(function () {
    console.log(calcularCubo(n))} , 3000)   //SetTimeout (mostrarResultado1 , 1000)

setTimeout (function (){
    console.log(calcularCubo(n))} , 2000)


for (let i= 0; i < 1000; i++) {
    console.log(i);
}

console.log(typeof mostrarResultado1)  //function
console.log(typeof mostrarResultado2)  //function



