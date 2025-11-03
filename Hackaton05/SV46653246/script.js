

function abrirForm() {
  $("#btnAbrirform").on("click", function () {
    $("#divIngreso").show()
  })
}

abrirForm()




class Celular {
  constructor(propietario, numero, imei, marca, modelo, primeraInspeccion) {
    this.propietario = propietario;
    this.numero = numero;
    this.imei = imei;
    this.marca = marca;
    this.modelo = modelo;
    this.primeraInspeccion = primeraInspeccion
  }
}
const formIngreso = (function () {
  let ingreso, salida;


  function eventos() {
    $("#btnEnviaringreso").on("click", function (e) {
      e.preventDefault(); // Prevenir el comportamiento por defecto del botón
      darIngreso();
      $("#divIngreso").hide()
    });
  }

  async function darIngreso() {
    const nombrePropietario = $("#nombrePropietario").val();
    const numeroTelefono = $("#numeroTelefono").val();
    const marca = $("#marca").val();
    const imei = $("#imei").val();
    const primeraInspeccion = $("#primeraInspeccion").val();
    const checkUser = $("#checkUser").val();
 $("#formStatus").show();

    $("#nombrePropietario2").val(nombrePropietario) 
    $("#numeroTelefono2").val(numeroTelefono);
    $("#marca2").val(marca);
    $("#imei2").val(imei);
    $("#primeraInspeccion2").val(primeraInspeccion);

       $("#nombrePropietario3").val(nombrePropietario) 
    $("#numeroTelefono3").val(numeroTelefono);
    $("#marca3").val(marca);
    $("#imei3").val(imei);
    $("#primeraInspeccion3").val(primeraInspeccion);

    // Crear la instancia del objeto aquí, con los parámetros en el orden correcto
    const vendedor = new Celular(nombrePropietario, numeroTelefono, imei, marca, primeraInspeccion);
    const tecnico = new Celular(nombrePropietario, numeroTelefono, imei, marca, primeraInspeccion);
    const cliente = new Celular(nombrePropietario, numeroTelefono, imei, marca, primeraInspeccion);

    vendedor.nombrePropietario= nombrePropietario
    cliente.nombrePropietario  = tecnico.nombrePropietario = vendedor.nombrePropietario

  }

  eventos();
})();




