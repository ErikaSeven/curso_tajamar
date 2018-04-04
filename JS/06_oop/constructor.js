function libro (autor, titulo, editorial, fecha, generos) {  //función alternativa al objeto literal. Es una FUNCIÓN CONSTRUCTORA
    this.autor = autor,
    this.titulo = titulo,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos

}

let libro1 = new libro(
    'Roberto Bolaño',
    '2666',
    'Anagrama',
    new Date( '2007'), 
    ['Policiaco'],
)
console.log(libro1)


let libro2 = new libro(
    'Henry James', 'El americano', 'Altaya', new Date( '1893'), ['Novela', 'Ficción'],
)
console.log(libro2)


/*let libro1 = {
    'Roberto Bolaño',
    '2666',
    'Anagrama',
    '2007', 
    ['Policiaco'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"'+ this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
    }
}

libro1.mostrarReferencia ()*/