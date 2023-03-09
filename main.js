function reproduzir(seletorAudio){
   let elemento = document.querySelector(seletorAudio)
   if (elemento != null && elemento.localName === 'audio'){
           elemento.play()
    }else{
        console.log('Elemento não encontrado')
   }
}

//Cria array das teclas
let listaDeTeclas = document.querySelectorAll('.tecla')


for(i = 0; i < listaDeTeclas.length; i++){
    
    //Recebe o valor da pressionada
    let tecla = listaDeTeclas[i]
    //Recebe o nome da segunda class automatizado(valor do i/valor da tecla pressionada)
    let instrumento = listaDeTeclas[i].classList[1] 


    //Ao clicar passará o parametro à função 'reproduzir'
    tecla.onclick = function(){reproduzir(`#som_${instrumento}`)}

    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa')
    }
}