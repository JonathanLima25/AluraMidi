function tocaSom(seletorAudio) {
    const element = document.querySelector(seletorAudio);
    if(element && element.localName === 'audio') {
        element.play();
    }
    else {
        alert('Elemento não encontrado!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(i => i.onclick=function(){
    tocaSom(`#som_${i.classList[1]}`)
    i.onkeydown = function(event) {
        if(event.code === 'Enter' || event.code === 'Space'){
            i.classList.add('ativa');
        }
    }
    i.onkeyup = function() {
        i.classList.remove('ativa');
    }
})
