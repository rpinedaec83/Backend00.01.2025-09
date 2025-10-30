


const Reserva = (function () {
    let txtPais, txtNombre;

    function configurar(){
        $("#txtPais").text(txtPais);
        $("#txtNombre").text(txtNombre);
    }
    function eventos(){}

    return {
        init: function(parametros){
            txtNombre = parametros.nombre;
            txtPais = parametros.pais;
            configurar();
            eventos();
        }
    }
})();