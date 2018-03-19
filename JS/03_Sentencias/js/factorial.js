

function calcularFactorial (n) {
    let r = 1   //inicializamos a 1 para empezar multiplacaciones porque si empezamos por 0 todo será 0
    for (i = n; i >= 1; i++){    ///esta es nuestra variable
        r *= i;
    }
    return r
}

    //test
console.log(calcularFactorial (1)) //1
console.log(calcularFactorial (2)) //2
console.log(calcularFactorial (3)) //6
console.log(calcularFactorial (4)) //24
console.log(calcularFactorial (6)) //120


function mostrarFactorial (n) {
    let mensaje = `El factorial de ${n} es `
    mensaje += calcularFactorial(n)
    console.log(mensaje)
}

mostrarFactorial(171)


