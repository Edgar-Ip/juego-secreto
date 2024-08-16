let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;
}
function verificarIntento() { 
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(intentos);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
        
    }

    
    //alert ("Click desde el botón :3");
    
    return;
}

function limpiarCaja(){
    //let valorCaja = 
    document.querySelector("#valorUsuario").value = "";
    //valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");

    } else{

        //Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "¡Juego del número secreto :3!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}


function reiniciarJuego(){
    //Necesitamos limpiar la caja
    limpiarCaja();
    //Indicar mensaje de inicio de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
     //Deshabilitar botón de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

//asignarTextoElemento("h1", "Juego del número Secreto");     //Colocamos arriba en la función de "Mensajes Iniciales"
//asignarTextoElemento("p", "Indica un número del 1 al 10");
condicionesIniciales();