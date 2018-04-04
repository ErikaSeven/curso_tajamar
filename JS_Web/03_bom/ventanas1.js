//Posible mejora de código para las funciones de ABRIR y CERRAR ya que son acciones opuestas ()


function app () {    
       
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled = "true"
    let ventana 
    let aVentanas = []   

    eBtnAbrir.addEventListener('click', btnClick)
    eBtnCerrar.addEventListener('click', btnClick)

    function btnClick (ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {   

            case 'btnAbrir':
                ventana = window.open()
                aVentanas.push(ventana)
                togleButtons()   //togle funciona como un interruptor (cuando uno se activa el otro se desactiva)
                break   //swicht siempre se cierra con BREAK
            case 'btnCerrar':
                aVentanas.forEach(item=>item.close())  
                togleButtons()
                aVentanas = [] 
                break
        }
    }

    function togleButtons () {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}   

window.addEventListener('load', app)   



