const Heladeria = function (){

    let Nombre, Direccion;

    return {
        init: function(parametros){
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion
        }
    }
}();