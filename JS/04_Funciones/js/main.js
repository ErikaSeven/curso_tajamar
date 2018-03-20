//las funciones pueden ser void cuando no devuelven nada

function main () {
    function calcularCubo ( a ) {
        a = a * a * a
        return a
    }

    let n = 6
    let mostrarResultado2 = function() {
        console.log(calcularCubo(n))
    }
    console.log(typeof mostrarResultado2)
    console.log(typeof n)

    mostrarResultado2()

    return calcularCubo
}

console.log(main())
