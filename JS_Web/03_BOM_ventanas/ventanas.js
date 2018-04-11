function app () {     //app = function () {}   app = () => {}
       
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana 
    let aVentanas = []   ///creamos ARRAY para cerrar varias ventanas array= varias opciones

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)

    function btnAbrir () {
        ventana = window.open()
        togleButtons()
        aVentanas.push(ventana)
    }

    function btnCerrar () {
        aVentanas.forEach(item=>item.close())   //.forEach para enviar la acción al ARRAY
        togleButtons()
        aVentanas = []     //limpiamos ARRAY
    }

    function togleButtons () {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}   

window.addEventListener('load', app)    //para el evento load se va a producir el efecto window





//Posible mejora de código para las funciones de ABRIR