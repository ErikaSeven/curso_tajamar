/** @function 
 *  - todo mayusculas (1)
 *  - todo minusculas (2)
 *  - mezcla de ambos (0)
 * @param : string 
 * @returns: number
*/

function ComprobarMayusculas (cadena = '') {
    let r = 0
        if (cadena.toUpperCase () === cadena) {  //todo en mayusculas
            r = 1

        } else if (cadena.toLowerCase () === cadena) {  //todo minusculas
            r = 2

        } 

    return r
}

/*console.log(ComprobarMayusculas('HOLA PEPE')) //1
console.log(ComprobarMayusculas('hola pepe')) //2
console.log(ComprobarMayusculas('Hola Pepe')) //0*/

function MostrarComparacionMayusculas (cadena) {
    aMensajes = [
        'La frase mezcla Mayúsculas y Minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'
    ]
    let sMensaje = `En la frase "${cadena}"
    ${aMensajes [ComprobarMayusculas(cadena)]}`
    console.log(sMensaje)
}

MostrarComparacionMayusculas('HOLA PEPE') //1
MostrarComparacionMayusculas('hola pepe') //2
MostrarComparacionMayusculas('Hola Pepe') //0