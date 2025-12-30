console.log("Inicio de la aplicacion")

window.addEventListener('load',init, false);

function init(){
    console.log("Termino de cargar la pagina")
    wsConnect()
}

function wsConnect(){
    console.log("Se va a conectar al WebSocket");

    websocket = new WebSocket("ws://localhost:8000");
    websocket.onopen=function(evt){
        onOpen(evt);
    }
}

function onOpen(evt){
    console.log("Conexion abierta");
    doSend("Hola")
}

function doSend(data){

    websocket.send(data)
}