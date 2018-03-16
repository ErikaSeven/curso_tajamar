function main() {
let  num1 = 23
let num2 = '20'

let r = num1 - num2

console.log(r)

console.log(typeof r)
console.log(typeof num2)


let x = 'hola'
let y = 'Pepe'
console.log(x + y)


r = num1 + +num2  //Number: símbolo especial, se escribe en mayúsculas. También se puede hacer como r = num1 + +num2(se convierte en número al tener valor positivo)
r = r - 1
console.log(r)
console.log(typeof r)

r = 0 / 0
console.log(r)
console.log(typeof r)
if (isNaN(r)){
console.log('Ole, has conseguido un NaN')
}


}

main()

// let  num1 = 23
// let num2 = '20'

// let r = num1 - num2

// console.log(r)

// console.log(typeof r)
// console.log(typeof num2)


// let x = 'hola'
// let y = 'Pepe'
// console.log(x + y)


//  r = num1 + Number(num2)  //Number: símbolo especial, se escribe en mayúsculas. También se puede hacer como r = num1 + +num2(se convierte en número al tener valor positivo)
// console.log(typeof r)   //Aquí el resultado dará 2320, el símbolo + está sobrecargado. Es el símbolo de la concatenación. Convierte el 23 en una cadena 2 3