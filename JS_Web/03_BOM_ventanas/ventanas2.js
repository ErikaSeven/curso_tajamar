
function app () {    
       
    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnImagen = document.querySelector('#btnImagen')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    let ventana 
    let aVentanas = []   

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnImagen.addEventListener('click', btnImagen)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnCerrar.addEventListener('click', btnCerrar)

    function btnAbrir () {
        ventana = window.open()
        aVentanas.push(ventana)
        
    }

    function btnImagen () {
        ventana = window.open('10.jpg')
        aVentanas.push(ventana)
        
    }

    function btnGoogle () {
        ventana = window.open('http://google.es', '')
        aVentanas.push(ventana)
    }

    function btnCerrar () {
        aVentanas.forEach(item=>item.close())   
        aVentanas = []     
    }
        
    

}   

window.addEventListener('load', app)   



