function main () {

        document.querySelector("#btnAjax")
        .addEventListener('click', getDatos)
    
        document.querySelector("#btnAjaxItem")
        .addEventListener('click', getDatos)
    
        document.querySelector("#btnAjaxBorrar")
        .addEventListener('click', deleteDatos)

        document.querySelector("#btnAjaxAdd")
        .addEventListener('click', postDatos) //Añadir

        document.querySelector("#btnAjaxM")
        .addEventListener('click', ModDatos) //modifica


    function getDatos(ev){
        let metodo = 'GET'
        let url = ''
        if (ev.target.id == '#btnAjax') {
            url = 'http://localhost:3000/posts'
        } else {
            let item = document.querySelector('#item').value
        if (item){
            url = 'http://localhost:3000/posts'+item
        } else {
            return
            }
        }
        conectar (metodo, url, null)
    }
    
    function deleteDatos(ev){
        let metodo = 'DELETE'
        let url = ''
        let item = document.querySelector('#itemB').value
        if (item) {
             url = 'http://localhost:3000/posts'+item
        } else {
            return
        }
        conectar (metodo, url, null)
    }


    function postDatos(){
        let data = {
            title: "Los intelectuales tienen tetas",
            author:"Erika Seven"}
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        conectar(metodo, url,JSON.stringify(data))

    }


    function stateChange (ev){
        if (ajax.readyState === 4) {    //donde queremos que trabaje
        if (ajax.status === 200) {
            let response = JSON.parse(ajax.responseText)
            console.dir(response)
            } else {
            console.log(ajax.status)
            console.log(ajax.statusText)
            }
            
        }

    } 

        function conectar(metodo, url) {
            let ajax = new XMLHttpRequest()
            ajax.onreadystatechange = stateChange
            ajax.open(metodo, url)
            ajax.send(null)  
        }
    }


window. addEventListener('load', main, false)

    


        