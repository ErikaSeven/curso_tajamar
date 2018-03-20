function calcularCuadrado(a) {
    a *= a
    return a
}

let n = 5
console.log(calcularCuadrado(n))
console.log(n)

//Los parámetros ELEMENTALES pasan por valor
function calcularCuadrado(a) {
    a *= a
    return a
}
//Los parámetros ELEMENTALES pasan por valor
let a = 5
console.log(calcularCuadrado(a))
console.log(a)


//Los PARÁMETROS REFERENCIA pasan como si fueran por referencia
function calcularCubo ( params ) {
    params.valor = params.valor * params.valor * params.valor
    return params.valor
}
//Es habitual pasar un clon del parámetro
params = { valor: 5 }
//console.log(calcularCubo(Object.assign({}, params)))
console.log(calcularCubo(JSON.parse(JSON.stringify(params))))

console.log(params)
let oUser = {nombre: 'Pepe', apellido: 'Pérez'}
console.log(oUser)

//Transformar objeto en String con JSON
let sUser = JSON.stringify(oUser)
console.log(sUser)
let oUser2 = JSON.parse(sUser)
console.log(oUser2)

//JSON.parse()