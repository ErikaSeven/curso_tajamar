function main () {
    function app () {
        let count = 0;
        aLinks = document.querySelectorAll('.social')
        
       function cambiaLista (ev) {
        let nodeItem = ev.target
        if (nodeItem.textContent.indexOf('Oops') >=0) {
            return
        }
    
       nodeItem.textContent = "Oops, no tengo" + nodeItem.textContent;
       count++;
       if (count == 5) {
           nodeItem.parentNode.parentNode.outerHTML = "<p>Lo siento, parece que estoy ilocalizable</p>"
       }
    }

}



window.addEventListener('DOMContentLoad', main)
}