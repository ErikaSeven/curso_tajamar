(function(){
    function app(){
        let oDom = {
            eBotonSaludar : document.querySelector('#btnSaludar'),
            eBotonBorrar : document.querySelector('#btnBorrar'),
            eInputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludo')
        }
        
        let saludar = () => {
            let user = oDom.eInputName.value
            console.log(user)
            oDom.eOutSaludo.innerHTML = `Hola ${user}`
            
        }

        let borrar = () => {
            oDom.eInputName.value = ''
            oDom.eOutSaludo.innerHTML = ''

        }
    
        //oDom.eBotonSaludar.onclick = () => saludo(event, "caracola")
        oDom.eBotonSaludar.addEventListener('click', saludar)
        oDom.eBotonBorrar.addEventListener('click', borrar)
    }

    window.addEventListener('load', app)    //patrón que se va a repetir siempre
   // document.addEventListener('DOMContentLoaded, app')
 
})()  








