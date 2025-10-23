
let arrPedidos = [];

const Heladeria = function (){

    let Nombre, Direccion;

    function configurar(){
        document.getElementById("nombreLocal").innerText = Nombre;
        $("#direccionLocal").text(Direccion);
    }
    function eventos() {
        $("#btnPedidos").on("click",async (e)=>{
            e.preventDefault();
            console.log("Hizo click en Pedido");
            let strHtml = `<div class="form-group">
  
  <input id="txtNombre" name="txtNombre" type="text" placeholder="Escribe tu nombre" class="form-control input-md" required="">
            <input id="txtTelefono" name="txtNombre" type="text" placeholder="Escribe tu Telefono" class="form-control input-md" required="">
            <input id="txtSabor" name="txtNombre" type="text" placeholder="Escribe el Sabor" class="form-control input-md" required="">
            <input id="txtTamaño" name="txtNombre" type="text" placeholder="Escribe el Tamaño" class="form-control input-md" required="">
            <input id="txtToppins" name="txtNombre" type="text" placeholder="Escribe tus Toppis" class="form-control input-md" required="">
</div>`;
            const {value: formValues} = await Swal.fire({
                title: "Ingresa tus Datos",
                icon: "info",
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar",
                denyButtonText: "Cancelar",
                html: strHtml,
                preConfirm:()=>{
                    return{
                        nombre: $("#txtNombre").val(),
                        telefono: $("#txtTelefono").val(),
                        sabor: $("#txtSabor").val(),
                        tamaño: $("#txtTamaño").val(),
                        toppins: $("#txtToppins").val()
                    }
                }
            });
            if(formValues){
                console.log(formValues);
                let objCliente = {
                    nombre: formValues.nombre,
                    telefono: formValues.telefono,
                    pedido:{
                        sabor: formValues.sabor,
                        tamaño: formValues.tamaño,
                        toppins: formValues.toppins
                    }
                }
                console.log(objCliente);
                arrPedidos.push(objCliente);
            }
console.log(arrPedidos)
        });
    }

    return {
        init: function(parametros){
            console.log(parametros)
            Nombre = parametros.nombre;
            Direccion = parametros.direccion;
            configurar();
            eventos();

        }
    }
}();