var visible = false;
function iniciar() {
    var elemento = document.getElementById("menu-img");
    elemento.addEventListener("click", mostrarMenu);
    
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
        
function agregarInput(){
    //ELIMINO CUALQUIER CONTENIDO DE SECTION Y ASIDE
    var elemento = document.querySelector("section");
    elemento.innerHTML="";
    var elemento2 = document.querySelector("aside");
    elemento2.innerHTML="";
    
    //OBTRNGO FILAS Y COLUMNAS INGRESADAS
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 1</h4>");

    //GENERO LAS MATRICES DE IGUAL DIMENSIÓN
    for(var k=0; k<2;k++){
        for(var i=0; i<filas; i++){
            for(var j = 0; j<columnas; j++){
                elemento.insertAdjacentHTML("beforeend", "<input>");
            }
            elemento.insertAdjacentHTML("beforeend" , "<br>");
        }
        if(k!=1){
            elemento.insertAdjacentHTML("beforeend" , "<br>");
            elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 2</h4>");
        }
    }
    //COLOCO BOTONES DE SUMAR Y RESTAR
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<button onclick='sumaMatriz()'>Sumar</button>");
    elemento.insertAdjacentHTML("beforeend" , "<button onclick='restaMatriz()'>Restar</button>");
    
    
}

//FUNCIÓN PARA CREAR ARRAY
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

//SUMA DE MATRICES
function sumaMatriz(){
var filas = parseInt(document.getElementById("filas").value);
var columnas = parseInt(document.getElementById("columnas").value);

//CREACIÓN DE MATRICES
var matriz1 = createArray(filas, columnas);
var matriz2 = createArray(filas, columnas);
var respuestaMatriz= createArray(filas, columnas);

//OBTENGO ELEMENTOS INGRESADOS DE MIS INPUTS
var lista = document.querySelectorAll("section > input");

var cont = 0;

//CREACIÓN DE PRIMERA MATRIZ
        for(var i=0; i< filas;i++){
            for(var j=0; j< columnas; j++){
                var elemento = parseInt(lista[cont].value);
                matriz1[i][j]=elemento;
                cont++;
            }
        } 
//CREACIÓN DE SEGUNDA MATRIZ
        for(var i=0; i< filas;i++){
            for(var j=0; j< columnas; j++){
                var elemento = parseInt(lista[cont].value);
                matriz2[i][j]=elemento;
                cont++;
            }
        } 
//CREACIÓN DE MATRIZ RESPUESTA
    for(var i=0; i< filas;i++){
        for(var j=0; j< columnas; j++){
            respuestaMatriz[i][j]= matriz1[i][j] + matriz2[i][j];
        }
    } 

    verMatriz(respuestaMatriz, filas, columnas);
    return respuestaMatriz;
}

//IMPRIMIR MATRIZ
function verMatriz(matriz, filas, columnas){

    var elemento = document.querySelector("aside");
    elemento.innerHTML="";
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>RESULTADO</h4>");
    for(var i=0; i<filas; i++){
        for(var j = 0; j<columnas; j++){
            var newInput = document.createElement("input");
            var newBr = document.createElement("br");
            newInput.setAttribute("value", ""+matriz[i][j]);
            elemento.appendChild(newInput);
        }
        elemento.appendChild(newBr);
    }
}

//RESTA DE MATRICES
function restaMatriz(m1, m2){
    var filas = parseInt(document.getElementById("filas").value);
var columnas = parseInt(document.getElementById("columnas").value);

//CREACIÓN DE MATRICES
var matriz1 = createArray(filas, columnas);
var matriz2 = createArray(filas, columnas);
var respuestaMatriz= createArray(filas, columnas);

//OBTENGO ELEMENTOS INGRESADOS DE MIS INPUTS
var lista = document.querySelectorAll("section > input");

var cont = 0;

//CREACIÓN DE PRIMERA MATRIZ
        for(var i=0; i< filas;i++){
            for(var j=0; j< columnas; j++){
                var elemento = parseInt(lista[cont].value);
                matriz1[i][j]=elemento;
                cont++;
            }
        } 
//CREACIÓN DE SEGUNDA MATRIZ
        for(var i=0; i< filas;i++){
            for(var j=0; j< columnas; j++){
                var elemento = parseInt(lista[cont].value);
                matriz2[i][j]=elemento;
                cont++;
            }
        } 
//CREACIÓN DE MATRIZ RESPUESTA
    for(var i=0; i< filas;i++){
        for(var j=0; j< columnas; j++){
            respuestaMatriz[i][j]= matriz1[i][j] - matriz2[i][j];
        }
    } 
    verMatriz(respuestaMatriz, filas, columnas);
    return respuestaMatriz;
}