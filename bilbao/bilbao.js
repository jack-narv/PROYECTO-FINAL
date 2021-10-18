var visible = false;
var maximo, medio, reproducir, barra, progreso, silenciar, volumen, bucle;

function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);

    maximo = 400;
    medio = document.getElementById("medio");
    reproducir = document.getElementById("reproducir");
    barra = document.getElementById("barra");
    progreso = document.getElementById("progreso");
    silenciar = document.getElementById("silenciar");
    volumen = document.getElementById("volumen");
    reproducir.addEventListener("click", presionar);
    silenciar.addEventListener("click", sonido);
    barra.addEventListener("click", mover);
    volumen.addEventListener("change", nivel);
    
}

function presionar(){
    if(!medio.paused && !medio.ended){
        medio.pause();
        reproducir.value = ">";
        clearInterval(bucle);
    }
    else{
        medio.play();
        reproducir.value = "||";
        bucle = setInterval(estado, 1000);
    }
}

function estado(){
    if(!medio.ended){
        var largo = parseInt(medio.currentTime * maximo / medio.duration);
        progreso.style.width = largo + "px";
    }else{
        progreso.style.width = "0px";
        reproducir.value = ">";
        clearInterval(bucle);
    }
}

function mover(evento){
    if(!medio.paused && !medio.ended){
        var ratonX = evento.offsetX - 2;
        if(ratonX < 0){
            ratonX = 0;
        }else if(ratonX > maximo){
            ratonX = maximo;
        }
        var tiempo = ratonX * medio.duration / maximo;
        medio.currentTime = tiempo;
        progreso.style.width = ratonX + "px";
    }
}
function sonido(){
    if(silenciar.value == "Silencio"){
        medio.muted = true;
        silenciar.value = "Sonido";
    }else{
        medio.muted = false;
        silenciar.value = "Silencio";
    }
}
function nivel(){
    medio.volume = volumen.value;
}

function mostrarMenu() {
    var elemento = document.getElementById("menuID");
    var ul = document.getElementById("menublock");
    var espacio = document.getElementById("espacioMenu");
        if (!visible) {
             elemento.style.display = "block";
             ul.style.display = "block";
             espacio.style.height = "460px";
             visible = true;

        } 
        else {
             elemento.style.display = "none";
             ul.style.display = "none";
             espacio.style.height = "65px";
             visible = false;

        }
} 


var mediaqueryList = window.matchMedia("(min-width: 857px)");
mediaqueryList.addListener( function(EventoMediaQueryList) {
       console.log('Ejecutado el listener', EventoMediaQueryList);
       var elemento = document.getElementById("menuID");
       var espacio = document.getElementById("espacioMenu");
       var ul =document.getElementById("menublock");
       elemento.style.display= "inline-block";
       espacio.style.height = "65px";
       ul.style.display = "block";
       });

        
            
        window.addEventListener("load", iniciar);