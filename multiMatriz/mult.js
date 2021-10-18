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
        
//SETEO LAS FILAS DE LA SEGUNDA MATRIZ CON LAS COLUMNAS DE LA PRIMERA MATRIZ
function filasSegunda(){
    var columnas = document.getElementById("columnas");
    var filas2 = document.getElementById("filas2");
    filas2.setAttribute("value", ""+columnas.value);
}

function validacion(){
    //Columnas Primera Matriz
    var columnas = parseInt(document.getElementById("columnas").value);
    //FILAS Segunda Matriz
    var filas2 = parseInt(document.getElementById("filas2").value);
    
    var elemento = document.querySelector("section");
    var elemento2 = document.querySelector("aside");
    
   
    if(columnas == filas2){
        agregarInput();
    }else{
        alert("Las dimensiones de las matrices son incorrectas");
        elemento.innerHTML="";
        elemento2.innerHTML="";
    }
}
function agregarInput(){
    var elemento = document.querySelector("section");
    elemento.innerHTML="";
    var elemento2 = document.querySelector("aside");
    elemento2.innerHTML="";

    //Dimensión Primera Matriz
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    //Dimensión Segunda Matriz
    var filas2 = parseInt(document.getElementById("filas2").value);
    var columnas2 = parseInt(document.getElementById("columnas2").value);

    //CREACIÓN MATRIZ 1
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 1</h4>");
        for(var i=0; i<filas; i++){
            for(var j = 0; j<columnas; j++){
                elemento.insertAdjacentHTML("beforeend", "<input>");
            }
            elemento.insertAdjacentHTML("beforeend" , "<br>");
        }
    //CREACIÓN MATRIZ 2
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<h4>MATRIZ 2</h4>");
        for(var i=0; i<filas2; i++){
            for(var j = 0; j<columnas2; j++){
                elemento.insertAdjacentHTML("beforeend", "<input>");
            }
            elemento.insertAdjacentHTML("beforeend" , "<br>");
        }
    //BOTON
    elemento.insertAdjacentHTML("beforeend" , "<br>");
    elemento.insertAdjacentHTML("beforeend" , "<button onclick='multiplicacionMatriz()'>Multiplicar</button>");
    
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function multiplicacionMatriz(){
var filas = parseInt(document.getElementById("filas").value);
var columnas = parseInt(document.getElementById("columnas").value);
var filas2 = parseInt(document.getElementById("filas2").value);
var columnas2 = parseInt(document.getElementById("columnas2").value);

//CREACIÓN DE MATRICES VACÍAS
var matriz1 = createArray(filas, columnas);
var matriz2 = createArray(filas2, columnas2);
var respuestaMatriz= createArray(filas, columnas2);
console.log(columnas+" "+filas2);

//OBTENGO LOS VALORES DE LOS INPUTS DE AMBAS MATRICES Y LOS GUARDO EN UN ARREGLO
var lista = document.querySelectorAll("section > input");
var cont = 0;

//LLENAMOS LA MATRIZ 1 CON SUS DATOS RESPECTIVOS
        for(var i=0; i< filas;i++){
            for(var j=0; j< columnas; j++){
                var elemento = parseInt(lista[cont].value);
                matriz1[i][j]=elemento;
                cont++;
            }
        } 

//LLENAMOS LA MATRIZ 2 CON SUS DATOS RESPECTIVOS
        for(var i=0; i< filas2;i++){
            for(var j=0; j< columnas2; j++){
                var elemento = parseInt(lista[cont].value);
                matriz2[i][j]=elemento;
                cont++;
            }
        } 
//REALIZO LA MULTIPLICACIÓN
    for(var i=0; i< filas;i++){
        for(var j=0; j< columnas2; j++){
            respuestaMatriz[i][j]= 0;
            for(var k=0; k<columnas; k++){
                respuestaMatriz[i][j]+=matriz1[i][k]*matriz2[k][j];
            }
        }
    } 
    verMatriz(respuestaMatriz, filas, columnas2);
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



