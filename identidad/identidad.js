
var visible = false;

function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);
}

function mostrarMenu() {
    var elemento = document.getElementById("menuID");
    var espacio = document.getElementById("espacioMenu");
        if (!visible) {
             elemento.style.display = "block";
             espacio.style.height = "395px";
             visible = true;
        } 
        else {
             elemento.style.display = "none";
             espacio.style.height = "65px";
             visible = false;
        }
} 

 var mediaqueryList = window.matchMedia("(min-width: 820px)");
 mediaqueryList.addListener( function(EventoMediaQueryList) {
        console.log('Ejecutado el listener', EventoMediaQueryList);
        var elemento = document.getElementById("menuID");
        var espacio = document.getElementById("espacioMenu");
        elemento.style.display= "inline-block";
        espacio.style.height = "65px";
        });
            
        window.addEventListener("load", iniciar);