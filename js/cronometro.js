let centesimas= 0;
let segundos= 0;
let minutos = 0;


function iniciar (){
    controlador = setInterval(cronometro, 10)
    document.querySelector('#inicio').disabled = true;
    document.querySelector('#parar').disabled = false;
    document.querySelector('#reanudar').disabled = true;
    document.querySelector('#reinicio').disabled = false;
}

function parar(){
    clearInterval(controlador);
    document.querySelector('#parar').disabled = true;
    document.querySelector('#continuar').disabled = false;

}

function reinicio(){
    clearInterval(controlador)
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    Minutos.innerHTML = '00';
    Segundos.innerHTML =':00';
    Centesimas.innerHTML = ':00';
    document.querySelector('#inicio').disabled = false;
    document.querySelector('#parar').disabled = true;
    document.querySelector('#reanudar').disabled = true;
    document.querySelector('#reinicio').disabled = true;
}

function cronometro(){
    if( centesimas < 99){
        centesimas++
        if(centesimas < 10){
            centesimas = '0'+centesimas}
            Centesimas.innerHTML = ':'+centesimas;

    } 
    if (centesimas == 99){
        centesimas = -1;
    }
    if (centesimas == 0){
        segundos++;
        if (segundos < 10 ){ segundos= '0'+segundos}
        Segundos.innerHTML = ':'+segundos;
    }
    if (segundos == 59){
        segundos = -1;
    }
    if ((centesimas == 0) && (segundos == 0)){
        minutos++;
        if (minutos < 10){
            minutos = '0'+minutos
        }
        Minutos.innerHTML = ':'+minutos;
    }
    if (minutos == 59){
        minutos = -1
    }
}




