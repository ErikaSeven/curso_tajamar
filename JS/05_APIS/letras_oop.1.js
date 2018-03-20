

appMayusculas = {
    cadena: '',
    aMensajes : [
        'La frase mezcla Mayúsculas y Minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'
    ],
    comprobar : function  () {
        let r = 0
        if (this.cadena.toUpperCase () === this.cadena) {  //todo en mayusculas
            r = 1
    
        } else if (this.cadena.toLowerCase () === this.cadena) {  //todo minusculas
            r = 2
    
        } 
        return r
    },

    mostrar: function () {
        let sMensaje = `En la frase "${this.cadena}"
        ${this.aMensajes [this.Comprobar(this.cadena)]}`
        console.log(sMensaje)
    }

}

appMayusculas.cadena = 'HOLA PEPE'
appMayusculas.mostrar()

appMayusculas.cadena = 'hola pepe'
appMayusculas.mostrar()

appMayusculas.cadena = 'Hola Pepe'
appMayusculas.mostrar()
