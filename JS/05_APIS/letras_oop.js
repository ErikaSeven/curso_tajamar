
appMayusculas = {
    cadena: '',
    codigo: 0,
    aMensajes : [
        'La frase mezcla Mayúsculas y Minúsculas',
        'Todas las letras son Mayúsculas',
        'Todas las letras son minúsculas'],
    aCadenas : [
        'HOLA PEPE',
        'hola pepe',
        'Hola Pepe'],
        
    comprobar : function  () {
        if (this.cadena.toUpperCase () === this.cadena) {  //todo en mayusculas
            this.codigo = 1
    
        } else if (this.cadena.toLowerCase () === this.cadena) {  //todo minusculas
            this.codigo = 2
    
        } else {
            this.codigo = 0
        }
    },

    mostrar: function () {
        this.comprobar()
        let sMensaje = `En la frase "${this.cadena}"
        ${this.aMensajes [this.codigo]}`
        console.log(sMensaje)
    },

    probar: function() {
        for (let i = 0; i < this.aCadenas.lenght; i++) {
            this.cadena = this.aCadenas[i];
            this.mostrar ()
        }
    }
}

appMayusculas.probar ()
appMayusculas.cadena = 'Un anillo para controlarlos a todos'
appMayusculas.mostrar ()








