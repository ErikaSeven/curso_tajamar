// POSIBILIDADES DENTRO DE NÚMEROS: 0, 1, -1

'user strict'

/*función que comprueba si el argumento es par o impar
retornando -devolviendo 0, 1 o -1 sie el argumento no es un número
*/
function calcularPar(n) {
    let r = 0

    if ( isNaN(n/2)){
        R = -1 //LOS ERRORES SE REPRESENTAN EN NÚMERO NEGATIVOS
    }
    else {
        r = n%2
          
    }
    return  r
}



// OTRA FORMA DE HACERLO
function calcularPar(n) {
    return isNaN(n/2) ? -1 : n%2
}

function calcularPar(n) {
    let r = 0
    if (isNaN(n/2)) {
        r = -1
    } else if (parseInt(n) != parseFloat(n)) {
        r = -2
    } else {
        r = n%2
    }
    return r
}

function mostrarEsPar (n) {
    const aMensajes = [
        `El número ${n} es PAR`,
        `El número ${n} es IMPAR`,
        `El número ${n} es decimal`,
        `El dato ${n} no es un número`
    ]

    //r puede valer 0,1 o -1
    let r = calcularPar(n)
    if ( r < 0) { r = -r}
//    r = (r === -1) ? 2 : r  r puede valer o,1 o 2. Si r es = -1 se convierte en 2 
    console.log(aMensajes[r])
}

mostrarEsPar('Pepe')
mostrarEsPar(12)
mostrarEsPar(11)
mostrarEsPar(12.5)
mostrarEsPar(11.5)


