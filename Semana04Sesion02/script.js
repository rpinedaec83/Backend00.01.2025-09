const Heladeria = function (){

    let Nombre, Direccion;
    function configurar(){

        document.getElementById("nombre local")

    }
    function eventos(){

    }
    return {
        init: function(parametros){
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion
        }
    }
}();