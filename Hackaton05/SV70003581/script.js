/*

Se necesita crear un sistema que maneje las reparaciones de celulares en un local con varias sucursales

- El telefono ingresado debe tener numero de serie (solo para identificar) e IMEI que no este reportado para acceder al servicio
- Un telefono primero debe pasar por una primera revision y se debe guardar el primer diagnostico
- Se debe tener la autorizacion escrita del usuario y el abono del 50% de la reparacion para que acceda al servicio
- Los tecnicos pueden tener uno o varios skills que se adecuen a la marca de telefono que se necesita acceder al servicio
- Los repuestos se agregaran a la reparacion de telefono
- Se debe mostrar el estado del equipo en sus diferentes estaciones de trabajo 

*/

// PARA EFECTOS PRÁCTICOS, EL NRO SERIE TENDRÁ 5 DIGITOS (no 15) Y EL IMEI TENDRÁ 6 DÍGITOS (no 15)

dbReportados = ["123456", "654321", "456789"]

class Central{
    constructor(RUC, nombre, direccion){
        this.RUC = RUC;
        this.nombre = nombre,
        this.direccion = direccion;
        this.sucursales = [];
    }
    agregarSucursal(id,nombre){
        let sucursalNueva = new Sucursal(id,nombre);
        this.sucursales.push(sucursalNueva);
        return sucursalNueva;
    }
    consultarEmpleadosxSucursal(sucursal){
        return sucursal.tecnicos;
    }
    consultarCelularesRobadosxSucursal(sucursal){
        return sucursal.celularesRobados;
    }
    consultarTicketsxSucursal(sucursal){
        return sucursal.tickets;
    }
    
}

class Sucursal{

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
        this.tecnicos = [];
        this.clientes = [];        
        this.tickets = [];
        this.celularesRobados = [];        
    }

    contratarTecnico(idTecnico, nombreTecnico){        
        const tecnico = new Tecnico(idTecnico, nombreTecnico);
        this.tecnicos.push(tecnico);
        //console.log("TECNICO AGREGADO");
        return tecnico;
    }

    registrarCliente(dniPersona,nombrePersona,celular){
        const cliente = new Cliente(dniPersona, nombrePersona, celular);
        this.clientes.push(cliente);
        //console.log("CLIENTE AGREGADO");
        return cliente;
    }

    registrarCelularRobado(celular){
        this.celularesRobados.push(celular);
    }

    crearTicket(idTicket, celular, cliente){

        if(dbReportados.includes(celular.imei)){
            console.log("IMEI REPORTADO!");            
            this.registrarCelularRobado(celular);
            return null;
        }else{
            let tecnicosAptos = [];

            this.tecnicos.forEach((tecnico) => {
                if(tecnico.habilidades.includes(celular.marca)){
                    tecnicosAptos.push(tecnico);
                }            
            });

            //if(!tecnicosAptos){
            if(tecnicosAptos.length === 0){
                console.log("NO HAY TÉCNICOS CON ESTA HABILIDAD");
                return null;                
            }else{                
                //console.log("HAY TÉCNICOS CON ESTA HABILIDAD:");
                
                let menosTareas = tecnicosAptos[0].tareas.length;
                let tecnicoSeleccionado = tecnicosAptos[0];

                for (let x in tecnicosAptos){                    
                    if(tecnicosAptos[x].tareas.length<menosTareas){
                        menosTareas = tecnicosAptos[x].tareas;
                        tecnicoSeleccionado = tecnicosAptos[x];
                    }
                }
                let ticketFinal = new Ticket(idTicket,celular,cliente,tecnicoSeleccionado);
                tecnicoSeleccionado.tareas.push(ticketFinal);
                this.tickets.push(ticketFinal);
                return ticketFinal;
            }            
        }        
    }

}

class Tecnico{

    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
        this.habilidades = [];
        this.tareas = [];
    }

    cargarHabilidades(...habilidades){
       this.habilidades.push(...habilidades);
       //console.log("HABILIDADES AGREGADAS");
    }
}

class Cliente{

    constructor(dni, nombre){
        this.dni = dni;
        this.nombre = nombre;
        this.celulares = [];
    }
    declararCelular(serieCelular, imeiCelular, marcaCelular){
        const celular = new Celular(serieCelular, imeiCelular, marcaCelular);
        this.celulares.push(celular);
        //console.log("CELULAR REGISTRADO");
        return celular;
    }
    aceptarCotizacion(ticket,cotizacion){        
        cotizacion.estadoPago = true;
        ticket.actualizarEstadoTicket(`MONTO PAGADO: S/ ${cotizacion.monto} por concepto de: ${cotizacion.concepto}. Asegurar autorización del cliente para proceder`);
    }
    autorizarServicio(ticket,cotizacion){        
        if(cotizacion.estadoPago){
            ticket.actualizarEstadoTicket(`Se autorizó: ${cotizacion.concepto}`);
        }else{
            ticket.actualizarEstadoTicket(`Se autorizó: ${cotizacion.concepto} pero está pendiente de pago...`);
        }
    }
}

class Celular{

    constructor(serie, imei, marca){
        this.serie = serie;
        this.imei = imei;
        this.marca = marca;        
    }
}

class Ticket{

    constructor(id, celular,cliente,tecnico){
        this.id = id;
        this.celular = celular;        
        this.cliente = cliente;
        this.tecnico = tecnico;
        this.inicio = obtenerFechaActual();
        this.historial = [];
        this.cotizaciones = [];
        this.fin = null;
    }
    actualizarEstadoTicket(comentario){
        this.historial.push(comentario);
    }
    crearCotización(idCotización,concepto,monto,cliente){
        let cotizacionNueva = new Cotizacion(idCotización,concepto,monto,cliente);
        this.cotizaciones.push(cotizacionNueva);        
        return cotizacionNueva;
    }
    consultarIngresos(){
        let acc=0;
        for(let z in this.cotizaciones){
            acc += this.cotizaciones[z].monto;
        }
        return acc;
    }
    cerrarTicket(){        
        this.fin = obtenerFechaActual();
    }
}

class Cotizacion{
    constructor(idCotización,concepto,monto,cliente){
        this.idCotización = idCotización;
        this.concepto = concepto;
        this.monto = monto;
        this.cliente = cliente;
        this.fecha = obtenerFechaActual();
        this.estadoPago = false;
    }
}

function obtenerFechaActual() {
    const fecha = new Date();

    // Obtenemos componentes de la fecha
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Enero = 0
    const año = String(fecha.getFullYear()).slice(-2); // Solo dos dígitos
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');

    // Formato: DD/MM/AA HH:MM
    return `${dia}/${mes}/${año} ${hora}:${minutos}`;
}

const central01 = new Central("20700035810","Reparaciones Techs","Av. José Pardo 629, Miraflores, Lima, Perú");

let sucursal01 = central01.agregarSucursal("SUC001","Tienda Angamos");
let sucursal02 = central01.agregarSucursal("SUC002","Tienda San Borja");

let tecnico01 = sucursal01.contratarTecnico("TEC001","Carlos Medina");
let tecnico02 = sucursal01.contratarTecnico("TEC002","Eduardo Lezama");
let tecnico03 = sucursal01.contratarTecnico("TEC003","Isabel Lara");

tecnico01.cargarHabilidades("Samsung","Xiaomi");
tecnico01.cargarHabilidades("Iphone","Xiaomi");
tecnico02.cargarHabilidades("Samsung");
tecnico03.cargarHabilidades("Iphone","Xiaomi");

let cliente01 = sucursal01.registrarCliente("70003581","Georgina Velarde");
let cliente02 = sucursal01.registrarCliente("70513421","Juan Castillo");

let celular01 = cliente01.declararCelular("SERIE001","123426","Samsung");
let celular02 = cliente01.declararCelular("SERIE002","123450","Xiaomi");
let celular03 = cliente01.declararCelular("SERIE003","456700","Samsung");

let ticket01 = sucursal01.crearTicket("TIC001",celular02,cliente01);
let ticket02 = sucursal01.crearTicket("TIC002",celular03,cliente02);

ticket02.actualizarEstadoTicket("PANTALLA MUY DAÑADA POR CAÍDA. SE COBRARÁ INICIALMENTE S/40.00 (50% DE S/80.00 TOTAL) ");
cotizacion0201 = ticket02.crearCotización("COT201","PAGO DEL 50% DEL SERVICIO",40.00,ticket02.cliente.nombre);

//Técnico en diagnóstico y cobro de 50% de servicio inicial
ticket01.actualizarEstadoTicket("PANTALLA MUY DAÑADA POR CAÍDA. SE COBRARÁ INICIALMENTE S/40.00 (50% DE S/80.00 TOTAL) ");
cotizacion01 = ticket01.crearCotización("COT001","PAGO DEL 50% DEL SERVICIO",40.00,ticket01.cliente.nombre);
//Cliente acepta pagar el servicio
cliente01.aceptarCotizacion(ticket01,cotizacion01);
cliente01.autorizarServicio(ticket01,cotizacion01);

//Técnico en operación
ticket01.actualizarEstadoTicket("Se solicita cambio de pantalla. A la espera de confirmación de cotización...");
cotizacion02 = ticket01.crearCotización("COT002",`Pantalla para celular ${ticket01.celular.marca}`,122.90,ticket01.cliente.nombre);
//Cliente acepta comprar piezas
cliente01.aceptarCotizacion(ticket01,cotizacion02);
cliente01.autorizarServicio(ticket01,cotizacion02);

//Técnico terminando
ticket01.actualizarEstadoTicket("Se reparó con éxito el dispositivo, a la espera de la cancelación total del servicio...");
cotizacion03 = ticket01.crearCotización("COT003","PAGO DEL 50% DEL SERVICIO",40.00,ticket01.cliente.nombre);
//Cliente acepta pagar el total del servicio
cliente01.aceptarCotizacion(ticket01,cotizacion03);
cliente01.autorizarServicio(ticket01,cotizacion02);

//Técnico entrega dispositivo reparado al cliente y cierra el Ticket
ticket01.actualizarEstadoTicket("Se entregó el dispositivo operativo al cliente");
ticket01.cerrarTicket();

console.log(ticket01);
console.log(sucursal01);

//Celular reportado
let celular04 = cliente01.declararCelular("SERIE122","123456","Iphone");
let ticket03 = sucursal01.crearTicket("TIC002",celular04,cliente01);

console.log("EMPLEADOS POR SUCURSAL:");
console.log(central01.consultarEmpleadosxSucursal(sucursal01));
console.log("CELULARES REPORTADOS POR SUCURSAL:");
console.log(central01.consultarCelularesRobadosxSucursal(sucursal01));
console.log("TICKETS POR SUCURSAL:");
console.log(central01.consultarTicketsxSucursal(sucursal01));

/*
MODO DE USO
1. Crear Sucursal desde Central: ID, Nombre.
2. Crear Técnico desde Sucursal: ID, Nombre.
3. Cargar habilidades del Técnico: cargarHabilidades(strHabilidad)
4. Crear Cliente desde Sucursal: DNI, Nombre.
5. Crear Celular desde Cliente: nroSerie, Imei, Marca
6. Crear Ticket desde Sucursal: ID, Celular, Cliente.
*. Se detecta si el IMEI figura en DBReportados.
*. El Técnico es asignado si cumple con la habilidad y tiene menos tareas que sus pares.
*. Se agrega automáticamente la fecha de creación

--- GESTIÓN DE TICKETS ---

8. El Técnico:
- Actualiza el estado del ticket con el primer diagnóstico.
- Crea una cotización del 50% del costo del servicio inicial
9. El cliente:
- Acepta pagar el servicio

10. El Técnico:
- Inicia la revisión a profundidad y las pruebas de descarte.
- Puede generar nueva cotización para adquirir nuevas piezas.
11. El Cliente:
- Acepta pagar las nuevas piezas

12. El Técnico:
- Termina de reparar el equipo, queda a la espera del pago total del servicio.
13. El Cliente:
- Termina de pagar el costo del servicio

14. El Técnico:
- Entrega el equipo al cliente y registra la entrega
- Cierra el Ticket con la Fecha y Hora actual.

*/
