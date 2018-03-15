let nombre = 'Pepe'
let edad = 23
let isCasado = false
let algo 

let user = {
    nombre : 'Pepe',
    apellido : 'Pérez',
    edad : '23',
    isCasado : false,
    direccion : '',
        calle :  '',
        ciudad : '',
        c_postal : '', 
    
}

console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof isCasado)
console.log(typeof algo)
console.log(typeof user)

console.log(nombre) //aparece Pepe
console.log(user) //lo trata como un elemento más

user.cargo = "CEO"
console.log(user) //podemos agregar nuevos objetos con sus propiedades cuando queramos
