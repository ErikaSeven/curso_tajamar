//Una sola vez - tiene dos parámetros
//let idT = window.setTimeout (algo, 1000)    //setTimeout
//clearTimeout(idT)         //esta función espera un parámetro Timeout idT


// N veces, cada cierto tiempo
// let idI = window.setInterval (algo, 1000)  //setInterval
// clearInterval(idI)



//CRONÓMETRO
(function () { 

    function app () {
        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button')
        let eCrono = document.querySelector ('.crono')
        aBotones.forEach(item=> {
            item.addEventListener('click', btnClick)

    });

    function btnClick (ev) {
         if (ev.target.id === 'btnIniciar') {
            idI = setInterval(function() {
                crono += 0.01
                eCrono.innerHTML = crono.toFixed(2)
            }, 100)
        } else if (ev.target.id === 'btnDetener') {
            clearInterval(idI)
        } else { 
            crono = 0
            eCrono.innerHTML = crono.toFixed(2)
        }
    }
} 

    
    
window.addEventListener ('DOMContentLoad', main);


}) ()