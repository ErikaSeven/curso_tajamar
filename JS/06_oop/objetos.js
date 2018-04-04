let libro1 = {
    autor: 'Roberto Bolaño',
    titulo: '2666',
    editorial: 'Anagrama',
    fecha: '2007', 
    generos: ['Policiaco'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"'+ this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
    }
}

libro1.mostrarReferencia ()