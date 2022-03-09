function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(i => i.onclick=function(){
    tocaSom(`#som_${i.classList[1]}`)
})