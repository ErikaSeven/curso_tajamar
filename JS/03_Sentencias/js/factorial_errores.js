function calcularFactorial (n) {
    if (typeof n === 'undefined') {throw 0}
    else if (isNaN(n/2)) {throw 1}
    else if(parseInt(n) !== parseFloat (n)) {throw 2}
    else if (n <= 0) {throw 3}
    else {
        let r = 1   //inicializamos a 1 para empezar multiplacaciones porque si empezamos por 0 todo será 0
        for (i = n; i >= 1; i--){    ///esta es nuestra variable
        r *= i;
        }
        //TODO comprobar rendimiento
        if (r === 1/0) {throw 4} //retorno de errores
        else { return r }  //retorno normal, sin errores
    } 
    
}    


   

function mostrarFactorial (n) {
    const ERROR_BASE = 'No puedo calcular el factorial de'
    aErrores = [
    'nada',
    'algo no numérico',
    'un número con decimales',
    'un número menos que 0']
    let r
    try {                                       //try catch discrimina
        let mensaje = `El factorial de ${n} es `
                         + calcularFactorial(n)
        console.log(mensaje)
    } catch (error) {
            console.log(ERROR_BASE + aErrores[error])
        }
}

mostrarFactorial()
