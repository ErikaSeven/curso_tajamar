
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


let x = `Pepe`
console.log(isNaN(x)) //función global
console.log(x.length) //el múnico que es un atributo que el sistema calcula automáticamente
console.log(x.toUpperCase()) //wrapper object

let sFrase = 'En el desierto de Sonora se escuchaba silbar el viento'
aDatos = sFrase.split(' ')
console.log(aDatos)
let nuevaFrase = aDatos.join('')
console.log(nuevaFrase)