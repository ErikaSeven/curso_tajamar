"use strict"

// PRUEBA 1

var x = 12

function mostrar (x) {  
   console.log(x)  //define el ambito de la variable ne la funcion que es declarada
}
// x = 12    //algo fuera de las funciones es global 
mostrar(x)

// console.log(x)



// var x = 12   ESTO ES GLOBAL
// function mostrar() {
//     var x = 23 ESTO ES LOCAL
//     console-log
// }


// PRUEBA 2
// mostrar() EN ESTE EJEMPLO SE MOSTRARÍA EL NÚMERO 23, YA QUE EN IGUALDAD DE NOMBRE LEE LAS LOCALES ANTES QUE LAS GLOBALES

function mostrar () {  
   if(true) {
    var x = 23   //en este caso se mostrá el 23 ya que está entre las llaves
   }
   console.log(x)
}
    
mostrar()


// PRUEBA 3

function mostrar () {  
    if(true) {
     let x = 23   //esto no mostrará nada
    }
    console.log(x)
 }
     
 mostrar()


// PRUEBA 4

 function mostrar () {  
     {
     var x = 23   //esto no mostrará ya que console log no lo identifica, por lo tanto, lo busca en global. Esto mostrará 5
    }
    console.log(x)
 }

 let = 5  //let se usa para identificar LOCALES
mostrar()