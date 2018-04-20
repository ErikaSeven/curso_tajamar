import { CURSOS } from './cursos.js'

export class Formulario {
    constructor() {
        this.datos = {
            email: '',
            passwd: '',
            passwd2: '',
            nombre: '',
            apellido: '',
            apellido2: '',
            dia: '',
            mes: '',
            año: '',
            afi: '',
            afi2: '',
            datos:'',

        }

        this.radioCurso = document.querySelectorAll('[name="curso"]')
        document.querySelector('form')
            .addEventListener('submit', this.enviar.bind(this), false)        
        this.radioCurso.forEach( (item) => {
            item.addEventListener('change', this.selectTopics.bind(this), false)
        })

        this.accederDom()
        this.definirManejadores()
        this.ponerFecha()
    }

    accederDom() {
        this.domFormulario = document.querySelector('#form1')
        this.domInpEmail = document.querySelector('#email')
        this.domInpPasswd = document.querySelector('#passwd')
        this.domInpPasswd = document.querySelector('#passwd2')
        this.donBtnSubmit = document.querySelector('#submit')
        this.donBtnReset = document.querySelector('#reset')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpApellido = document.querySelector('#apellido2')
        this.domInpDia = document.querySelector('#dia')
        this.domInpMes = document.querySelector('#mes')
        this.domInpAño = document.querySelector('#año')
        this.domInpAfi = document.querySelector('#afi')
        this.domInpAfi2 = document.querySelector('#afi2')
        this.domTiempo = document.querySelector('#tiempo')
    }

    definirManejadores() {
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))

    }

 

    enviar(ev) {
        console.log(ev)
        ev.preventDefault()
        this.recogerDatos()
        this.comprobarPasswd()
        this.presentarDatos()



    }

    comprobarPasswd() {
        console.log('Estoy pass')
        if (this.domInpPasswd.value != this.domInpPasswd2.value) {
            alert('Los passwords no coinciden')
            console.log('Estoy aqui')

        }

    }

    selectTopics() {
        let i = this.checkRadio(this.radioCurso)
        let aTopics = CURSOS[i].asignaturas
        this.mostrarTopics(aTopics)
        console.log(this.radioCurso[i].value)
    }


    checkRadio(aRadio) {
        let i
        for (i = 0; i < aRadio.length; i++) {
            if (aRadio[i].checked) {
                break
            }
        }
        return i
    }

    mostrarTopics(aTopics) {
        let template = ''
        aTopics.forEach( item => {
            template += `<option>${item}</option> `
        });
        document.querySelector('#topics').size = aTopics.length
        document.querySelector('#topics').innerHTML = template
    } 

    ponerFecha() {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let f = new Date();
        this.domTiempo.innerHTML = ` Estamos a ${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()} y es un buen día para hacer un exámen de recuperación`

    }

    recogerDatos() {
        this.datos.email = this.domInpEmail.value
        this.datos.passwd = this.domInpPasswd.value
        let i = this.checkRadio(this.radioCurso)
        this.datos.curso = this.radioCurso[i].value
        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.apellido2 = this.domInpApellido2.value
        this.datos.dia = new Date(this.domInpDia)
        this.datos.mes = new Date(this.domInpMes)
        this.datos.año = new Date(this.domInpAño)

    }



    presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul>
            <li>e-Mail: ${this.datos.email}</li>
            <li>Contraseña: ${this.datos.passwd}</li>
            <li>Nombre: ${this.datos.nombre}</li>
            <li>Apellido: ${this.datos.apellido}</li>
            <li>Apellido2: ${this.datos.apellido2}</li>
            <li>Fecha nacimiento: ${this.datos.dia}</li>
            <li>Fecha nacimiento: ${this.datos.mes}</li>
            <li>Fecha nacimiento: ${this.datos.año}</li>
            <li>Aficiones: ${this.domAfi.value}</li>
            <li>Aficiones: ${this.domAfi2.value}</li>
        </ul>
        `
        let template =
        `
        <li>Curso: ${this.datos.curso}</li>
        `
        this.domDivResultados.innerHTML = resultadoHTML
        
        this.domDivResultados.innerHTML = resultadoHTML
        console.dir(this.datos)

        document.querySelector('#resultados').innerHTML = template

    }

}