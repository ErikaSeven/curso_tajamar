'user strict'

/*function sumarPares (n) {
    return isNan(n/2)
}

function sumarPares(n){
    let aDatos =[23, 54, 65, 34, 38, 90]
    if (isNaN(n/2)) {

    }else if (aDatos(n)){
    }

}*/


function isPar(n) {
    return isNaN(n/2) ? -1 : n%2
}

function isPar(n) {
    let r = 0
    if (isNaN(n/2)) {
        r = -1
    } else if (parseInt(n) != parseFloat(n)) {
        r = -2
    } else if (parseInt(n) != parseInt(n)) {
        r = -3
    } else {
        r = n % 2
    }
    return r
}



function sumarPares (aDatos) {
    let total = 0
    for (let i = 0; i < aDatos.length; i++) {
        if (!isPar(aDatos[i])) {
            total += aDatos[i]
            console.log(`El parcial es ${total}`)
        }
    }
    return total
}


function verSumarPares(aDatos) {
    console.log('El resultado de la suma de los pares es ',
        sumarPares(aDatos))
}



let aDatos =[23, 54, 65, 34, 38, 90]
verSumarPares(aDatos)
