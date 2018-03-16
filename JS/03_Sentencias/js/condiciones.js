// Las condiciones siempre se escriben
// if (-la condicón que sea-) {}
// else {}

if ( 1 ) {}
else {}


if ( 1 ) {}
else if ( 2 ) {}
else if ( 3 ) {}
else if ( 3 ) {}


//Creación saludos
const userPepe = {
nombre : 'Pepe',
apellido : 'Pérez',
edad : 17,
aficiones : ['deporte', 'papiroflexia'],
isCasado : false,
genero : 'M'}

const userMaria = {
    
    nombre : 'María',
    apellido : 'Pérez',
    edad : 53,
    aficiones : ['lectura', 'papiroflexia'],
    isCasado : true,
    genero : 'F'}


// if ( userMaria.isCasado) {
//     if ( userMaria.genero =='M') {
//     console.log('Saludos a tu mujer')
//     }else{
//         console.log('Saludos a tu marido')
//     }
// }

const MAYORIAEDAD = 18     // nos vamos a crear una constante para mayor de edad. Al ser inmutable se pone todo en MAYUS
//VAMOS A CREAR LA FUNCIÓN
function crearSaludo(user) {
    let mensaje =  'Hola.'
    if (user.edad >= MAYORIAEDAD && user.genero =='M') {
        mensaje += 'D.'
    }else if (user.edad >= MAYORIAEDAD && user.genero =='F'){
        mensaje += 'Dña.'
    }
    mensaje += user.nombre
    if ( user.isCasado) {
        if ( user.genero =='M') {
            mensaje +='. Saludos a tu mujer'
        }else{
            mensaje +='. Saludos a tu marido'
        }
    }
    return mensaje
}

function saludar(usuario) {
    console.log(crearSaludo(usuario))
}


function saludarHTML(usuario) {
    document.write(crearSaludo(usuario)+'<br>')
}

saludar(userMaria)
saludar(userPepe)
saludarHTML(userMaria)
saludarHTML(userPepe)
