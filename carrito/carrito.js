
var visible = false;



function iniciar() {
    var elemento = document.getElementById("menu-img");
    var comprar = document.getElementById("sumar");
    comprar.addEventListener("click", sumar);
    elemento.addEventListener("click", mostrarMenu);
    var botones = document.querySelectorAll(".comprar");
    for(var f=0;f<botones.length; f++){
        var boton = botones[f];
        boton.addEventListener("click", function(x){
            return function(){
                var miBoton = x;
                agregarCarrito(miBoton);
            };
        }(f));
    } 
    
}

function agregarCarrito(miBoton){
    var productos = document.querySelectorAll(".productos");
    sessionStorage.setItem('foto', productos[miBoton].querySelector("img").getAttribute('src'));
    sessionStorage.setItem('producto', productos[miBoton].querySelector("h2").innerHTML);
    sessionStorage.setItem('precio', productos[miBoton].querySelector("h3").innerHTML);

    mostrar();
}
function mostrar(){
    var foto = document.getElementById("foto");
    var producto = document.getElementById("producto");
    var precio = document.getElementById("precios");
    var cantidad = document.getElementById("cantidad");

   // producto.innerHTML = '<div><input type="button" onclick="borrarTodos()" value="Borrar Todo"></div>';

        var clave = sessionStorage.key(0);
        var valor = sessionStorage.getItem(clave);
            producto.insertAdjacentHTML("afterbegin", "<div>"+ valor+"</div>");

             clave = sessionStorage.key(1);
             valor = sessionStorage.getItem(clave);
            precio.insertAdjacentHTML("afterbegin", "<div>"+ valor+"</div>");
            
             clave = sessionStorage.key(2);
             valor = sessionStorage.getItem(clave);

            foto.insertAdjacentHTML("afterbegin", '<div><img id="fotito"></div>');
            var elemento = document.getElementById("fotito");
            elemento.setAttribute("src", ""+valor);
            cantidad.innerHTML += "<div><input id='numero' type='number' value=1></div>";
 
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

function sumar(){
    var total = document.getElementById("totalPagar");
    var precios = document.querySelectorAll("#precios>div");
    var cantidades = document.querySelectorAll("#cantidad>div>input");
    var sumatoria = 0;
    for(var i=0; i<precios.length; i++){
        var newWord=precios[i].innerText.slice(1,precios[i].innerText.length-1);
       // console.log("PRECIO: "+parseFloat(newWord));
       // console.log("CANTIDAD: "+parseFloat(cantidades[i].value));
        sumatoria += parseFloat(newWord) * parseFloat(cantidades[i].value)
    }
    console.log("TOTAL A PAGAR: $"+sumatoria);
    total.innerHTML = "<div><p>$"+sumatoria+"</p></div>";
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
        