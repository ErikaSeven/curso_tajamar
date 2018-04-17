//Mock(maqueta-simulación) de una promesa

function asincP () {  //creación promesa, la promesa la crea una librería. Debe ir siempre acompañado de una función que puede resolverse o rechazarse. recbe dos parámetros
    return new Promise(
        (resolve, reject) =>{

        setTimeout (
            () => {
        let number = Math.random()
        if(number > 0,7) {
            //correcto
            resolve(number)
        } else {
            //incorrecto
            reject(number)
        }
        }, 3000)
    })
}


asincP().then( //llamar promesa
    (response) => {console.log(`Todo bien gracias al ${response}`)},
    (response) => {console.log(`Error debido a ${response}`)}
 ) 