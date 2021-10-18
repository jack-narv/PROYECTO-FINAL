
var visible = false;
var formulario;
var password, repetirPassword;
function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);

    var boton = document.getElementById("registro");
    boton.addEventListener("click", enviarFormulario);
    formulario = document.querySelector("form[name='login']");
    //formulario.addEventListener("invalid", validacion, true);
    formulario.addEventListener("input", comprobar);

    password = document.getElementById("pass");
    repetirPassword = document.getElementById("reppass");
    password.addEventListener("input", validacionPassword);
    repetirPassword.addEventListener("input", validacionPassword);
    //validacionPassword();
    
}
function validacion(evento){
    var elemento = evento.target;
    elemento.style.background = "#FFDDDD";
}
function validacionPassword(){
    if(password.validity.patternMismatch || 
        password.validity.valueMissing){
    password.setCustomValidity("Su contraseña debe contener 8 caracteres entre dígitos, minúsculas y mayúsculas");
    }else{
        
        password.setCustomValidity("");
        password.style.background = "#FFFFFF";
    }
    if(password.value != repetirPassword.value){
        repetirPassword.style.background = "#FFDDDD";
        repetirPassword.setCustomValidity("LA CONTRASEÑA NO COINCIDE");
    }
    else{
        repetirPassword.setCustomValidity("");
        repetirPassword.style.background = "#FFFFFF";
        
    }
    
}

function enviarFormulario(){
    var valido = formulario.checkValidity();
    if(valido){
        formulario.submit();
        alert("FORMULARIO ENVIADO CORRECTAMENTE");
    }
}

function comprobar(evento){
    var elemento = evento.target;
    if(elemento.validity.valid){
        elemento.style.background = "#FFFFFF";
    }else{
        elemento.style.background = "#FFDDDD";
    }
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
        
  