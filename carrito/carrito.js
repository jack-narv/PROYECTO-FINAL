
var visible = false;



function iniciar() {
    var elemento = document.getElementById("menu-img");
    var comprar = document.getElementById("sumar");
    comprar.addEventListener("click", sumar);
    elemento.addEventListener("click", mostrarMenu);
    var btnPagar = document.getElementById("pagar");
    btnPagar.addEventListener("click", pagar);

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
    var Productos = document.querySelectorAll("#producto>div");
    var enCarrito = false;
    var productos = document.querySelectorAll(".productos");
    for(var f=0;f<Productos.length; f++){
        var prd = Productos[f];
        //console.log("PRD: "+prd.innerText);
        //console.log("producto: "+productos[miBoton].querySelector("h2").innerHTML);
        if(prd.innerText == productos[miBoton].querySelector("h2").innerHTML){
            enCarrito = true;
        }

    }
    if(!enCarrito){
        sessionStorage.setItem('foto', productos[miBoton].querySelector("img").getAttribute('src'));
        sessionStorage.setItem('producto', productos[miBoton].querySelector("h2").innerHTML);
        sessionStorage.setItem('precio', productos[miBoton].querySelector("h3").innerHTML);
        mostrar();
    }else{
        alert("El producto ya se encuentra en el carrito");
    }
    

    
}
function mostrar(){
    var foto = document.getElementById("foto");
    var producto = document.getElementById("producto");
    var precio = document.getElementById("precios");
    var cantidad = document.getElementById("cantidad");
    var eliminar = document.getElementById("eliminar");

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
            //cantidad.innerHTML += "<div><input id='numero' type='number' value=1></div>";
            cantidad.insertAdjacentHTML("afterbegin", "<div><input id='numero' type='number' value=1></div>");
            eliminar.innerHTML += "<div class='divBorrar'><button class='borrar'>X</button></div>";


            var borrarFoto = document.querySelectorAll("#foto>div");
            var borrarProducto = document.querySelectorAll("#producto>div");
            var borrarPrecio = document.querySelectorAll("#precios>div");
            var borrarCantidad = document.querySelectorAll("#cantidad>div");
            var btnEliminar = document.querySelectorAll(".divBorrar");
            var posicion;
            for(var i=0;i<btnEliminar.length; i++){
                var btn = btnEliminar[i];
                btn.addEventListener("click", function(x){
                    return function(){
                        posicion = x;
                        btnEliminar[posicion].parentNode.removeChild(btnEliminar[posicion]);
                        borrarFoto[posicion].parentNode.removeChild(borrarFoto[posicion]);
                        borrarProducto[posicion].parentNode.removeChild(borrarProducto[posicion]);
                        borrarPrecio[posicion].parentNode.removeChild(borrarPrecio[posicion]);
                        borrarCantidad[posicion].parentNode.removeChild(borrarCantidad[posicion]);
                    };
                }(i));
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

function pagar(){
    alert("¡PAGO EXITOSO!");
}

function sumar(){
    var total = document.getElementById("totalPagar");
    var precios = document.querySelectorAll("#precios>div");
    var cantidades = document.querySelectorAll("#cantidad>div>input");
    var sumatoria = 0;
    for(var i=0; i<precios.length; i++){
        var newWord=precios[i].innerText.slice(1,precios[i].innerText.length-1);
        sumatoria += parseFloat(newWord) * parseFloat(cantidades[i].value)
    }
    total.innerHTML = "<div><p>$"+sumatoria+"</p></div>";
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
        