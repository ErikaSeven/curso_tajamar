"use strict"



var x = 12

function mostrar (x) {  
   console.log(x)  
}

mostrar(x)





function mostrar () {  
   if(true) {
    var x = 23 
   }
   console.log(x)
}
    
mostrar()




function mostrar () {  
    if(true) {
     let x = 23  
    }
    console.log(x)
 }
     
 mostrar()




 function mostrar () { //En este ejemplo de constantes "const" funcionan como los LET
    //  
    
     {
     const x = 23   
    }
   
    console.log(x)
 }




function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}

function mostrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`
La circunferencia de radio ${radio} 
tiene de longitud ${cir}`)    //${} operador de interpolación
}

mostrarCircunferencia(5)






