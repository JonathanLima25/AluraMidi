function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
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
