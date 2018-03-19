// ITERACIONES O BUCLES

let aDatos =[23, 54, 65, 34, 38, 90]

for (let i = 0; i < 6; i++) {
    // 
    console.log("Hola a todos, esta es la vuelta", i+1)
    
} //procesamiento típico de un bucle con un Array

// console.log("Hola a todos")

let total = 0
for (let i = 0; i < aDatos.length; i++) {
    // total += aDatos[i];
    total = total + aDatos[i]
}

console.log(`El total es ${total}`)





