{

}

{

//Plantilla de llibros como objeto
//lo que transform ane variante a LIBRO es la propiedad -let-
let libro1 = {
    título: '2666',
    autor: 'Roberto Bolaño',
    editorial: 'Anagrama',
    fecha: '2007', 
    generos: ['Policiaco'],
}

/*let libro2 = {
    título: 'Alta Fidelidad',
    autor: 'Nick Hornby',
    editorial: 'Anagrama',
    fecha: '1995', 
    generos: ['Novela', 'Ficción','Música']
}*/

let libro2 = {
    título: 'Alta Fidelidad',
    autor: 'Nick Hornby',
    editorial: 'Anagrama',
    fecha: '1995', 
    primera_edición: {
        editorial : "Acme",
        fecha : "1993",
    },
    generos: ['Novela', 'Ficción','Música']
}



/*let user =
console.log(libro1)
console.log(`El autor es ${libro2.autor}` )
console.log(typeof libro2.autor)
console.log(libro2.fecha)
console.log(typeof libro2.fecha)
console.log(libro2.generos)
console.log(typeof libro2.generos)
console.log(libro2.primera_edición.editorial)
}*/



    for (const key in libro1) {          //KEY guarda las claves de autor, título, editorial... Es el valor asociado a cada vuelta
        console.log(`La clave ${key} vale `, libro1[key])     
    }

}
