//Elementales -> por valor
//number, string y boolean

let x = 12
let y = 2 * x
x = x + 2
console. log(y) //24

console.log(x)  //14

let o1 = {valor : 12}
let o2 = o1  //crea una nueva referencia igual a la anterior
o1.valor = 24

//Los objetos se manipulan por refencia    objetos o datos referenciados -> referencias
 
console.log(o1) //valor : 24
console.log(o2) //valor : 24
