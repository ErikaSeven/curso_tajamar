//Closure
// patró IIFE(Inmediatly-invoked function expression)


(function /*main*/ (n) {         //le podemos quitar el título main

    function calcularCubo ( a ) {
        a = a * a * a
        return a
    }

   
    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }
 
 mostrarResultado2()

})(6)                        //TAMBIÉN SE PUEDE INVOCAR COMO main(6)


//FUNCIÓN AUTOINVOCADA
