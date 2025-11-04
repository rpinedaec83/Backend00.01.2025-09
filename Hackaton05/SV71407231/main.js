class Telefono {

    constructor(imei){
        this.imei = imei;
    } 

    imeiTieneReporte () {
        return this.imei > 0.5 ? true : false
    }
    diagnostico () {

    }
}
const robado = new Telefono(Math.random());
const cuadro = document.querySelector('#formulario-cuadro');

const estadoActual = document.querySelector('#estadoActual');
const repuestos = document.querySelector('#repuestos');

const diagnosticoGuardadoTexto = document.querySelector('#diagnosticoGuardadoTexto');
const repuestosTexto = document.querySelector('#repuestosTexto');

// console.log(robado.imei)

const btnVerificar = document.querySelector('#btnVerificar'); 

btnVerificar.addEventListener('click', () => {
    estadoActual.textContent = 'Verificando IMEI...';   
    if(robado.imeiTieneReporte() === false){
        cuadro.classList.remove('oculto');
        btnVerificar.disabled = true; 
        estadoActual.textContent = 'Equipo en diagnóstico inicial.';
    }else {
        alert('imei reportado.')
        estadoActual.textContent = 'IMEI bloqueado. No se puede continuar. Refresque la pagina';
    }; 
    
})

const btnGuardarDiagnostico = document.querySelector('#diagnosticoGuardado');

const formularioConfirmacion = document.querySelector('#formulario-confirmacion');
const tecnicoAsignado = document.querySelector('#tecnico');
const btnConfirmarPago = document.querySelector('#btnConfirmarPago');


btnGuardarDiagnostico.addEventListener('click',(event) => {
    event.preventDefault();
    const sistema = document.querySelector('#sistema').value.trim().toLowerCase();

    const textoDiagnostico = document.querySelector('#diagnostico').value.trim();

    // if(robado.imeiTieneReporte() === false){
    //     cuadro.className('oculto');
        
    // }

    if (sistema !== 'android' && sistema !== 'ios') {
    alert("Solo se permite ingresar 'Android' o 'iOS'.");
    return;
    }

    diagnosticoGuardadoTexto.textContent = textoDiagnostico || "Sin diagnóstico especificado.";


    cuadro.classList.add('oculto');
    formularioConfirmacion.classList.remove('oculto');


    const tecnico = sistema === 'ios' ? 'Valentina' : 'Harold';
    tecnicoAsignado.textContent = `Técnico asignado: ${tecnico}`;

    estadoActual.textContent = 'Esperando abono del cliente.';


})

btnConfirmarPago.addEventListener('click', ( ) => {

  alert('Pago confirmado. El servicio ha sido registrado correctamente.');
  
  formularioConfirmacion.classList.add('oculto');
  repuestos.classList.remove('oculto');
  estadoActual.textContent = 'En reparación. Repuestos agregados.';
});




