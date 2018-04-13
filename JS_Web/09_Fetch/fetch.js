function main(){
    document.querySelector('#btnAjax')
    .addEventListener('click', getDatos)

    function getDatos(ev){
        let metodo = 'GET'
        let url = 'http://localhost:3000/posts'
        fetch(url)
        .then()   //ejecuto un metodo que va a ser la funcion que se va a ajecutar cuando lleguen los datos
        
    }
}


window. addEventListener('load', main, false)