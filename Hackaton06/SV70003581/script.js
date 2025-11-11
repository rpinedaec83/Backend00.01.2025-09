const db = new DB();
// central01 es el objeto Central principal del sistema

const loadingSystem = () => {
    const branches = db.getData("Sucursales");
    //console.log("Branches loaded",branches);

    const arrayBranches = branches.map(branch => {
        const newBranch = new Sucursal(branch.id, branch.nombre);
        return newBranch;
    });
    central01.loadingBranches(arrayBranches);    
}

const saveBranch = (System) => {
    //console.log("saveBranch", System.sucursales);
    const branchesValues = System.sucursales.map(elemento => elemento.toValue());
    //console.log("branchesValues", branchesValues);
    db.saveData("Sucursales", branchesValues);
}

//Tal vez
const loadingBranches = (System) => {
    const optionItem = document.querySelector("#sucursal");
    let arrayOptions = [];
    const selectInitial = document.createElement("option");

    selectInitial.value="no-option";
    selectInitial.textContent = "Seleccione una sucursal";
    arrayOptions.push(selectInitial)
    
    System.sucursales.forEach(element => {
        const optionItem = document.createElement("option");
        optionItem.value = element.nombre;
        optionItem.textContent = element.nombre;
        arrayOptions.push(optionItem);
    });

    optionItem.replaceChildren(...arrayOptions);
}


/*====NO TOCAR====*/

let arrObjUsuarios = [];
let usuarioActual = null;

function crearUsuarioSistema(tipo, clave) {
    nuevo = new UsuarioSistema(tipo, clave);
    arrObjUsuarios.push(nuevo);
    return nuevo;
}

crearUsuarioSistema(central01,"123");

dbReportados = ["IMEI0003", "IMEI0007", "IMEI0008"];

function obtenerFechaActual() {
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Enero = 0
    const año = String(fecha.getFullYear()).slice(-2); // Solo dos dígitos
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${año} ${hora}:${minutos}`;
}

async function mostrarFormulario() {
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de usuario</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Contraseña</div>
            <input type="password" id="swal-input2" class="swal2-input">            
        </div>`,
        confirmButtonText: `Iniciar sesión`,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        /*======== ADMINISTRADOR ========*/
        if (formValues[0] == "admin" && formValues[1] == "123") {
            usuarioActual = arrObjUsuarios[0];
            document.getElementById("divCentral").style.display = "block";
            document.getElementById("crearSucursal").onclick = crearNuevaSucursal;
            document.getElementById("verSucursales").onclick = verSucursales();
            document.getElementById("cerrarSesion").onclick = () => cerrarSesion("divCentral");            
        }
        /*======== MORTALES ========*/
        for (x in arrObjUsuarios) {
            if (formValues[0] == arrObjUsuarios[x].tipo.id && formValues[1] == arrObjUsuarios[x].clave) {
                
                if (arrObjUsuarios[x].tipo instanceof Sucursal) {
                    console.log("Es Sucursal");

                    usuarioActual = arrObjUsuarios[x];

                    document.getElementById("divSucursal").style.display = "block";

                    document.getElementById("crearTicket").onclick = crearNuevoTicket;
                    document.getElementById("verTickets").onclick = verTickets;

                    document.getElementById("crearTecnico").onclick = crearNuevoTecnico;
                    document.getElementById("verTecnicos").onclick = verTecnicos;

                    document.getElementById("crearCliente").onclick = crearNuevoCliente;
                    document.getElementById("verClientes").onclick = verClientes;

                    document.getElementById("cerrarSesionSucursal").onclick = () => cerrarSesion("divSucursal");
                    document.getElementById("verUsuarioActual").innerText = arrObjUsuarios[x].tipo.nombre;
                    verTecnicos();
                    verClientes();
                    verTickets();
                    
                }

                if (arrObjUsuarios[x].tipo instanceof Cliente) {
                    console.log("Es Cliente");
                    usuarioActual = arrObjUsuarios[x];
                    document.getElementById("divCliente").style.display = "block";
                    document.getElementById("crearCelular").onclick = crearCelular;
                    //document.getElementById("verCelulares").onclick = verCelulares;
                    document.getElementById("autorizarAtencion").onclick = autorizarAtencion;
                    document.getElementById("pagarCotizacion").onclick = pagarCotizacion;
                    document.getElementById("cerrarSesionCliente").onclick = () => cerrarSesion("divCliente");
                    document.getElementById("verUsuarioActualCliente").innerText = arrObjUsuarios[x].tipo.nombre;
                    verCelulares()
                    verTicketsCliente();
                    verCotizacionesCliente();
                    
                }

                if (arrObjUsuarios[x].tipo instanceof Tecnico) {
                    console.log("Es Técnico");
                    usuarioActual = arrObjUsuarios[x];
                    document.getElementById("divTecnico").style.display = "block";
                    document.getElementById("crearHabilidad").onclick = crearHabilidad;
                    //document.getElementById("verHabilidades").onclick = verHabilidades;
                    //document.getElementById("verTicketsTecnico").onclick = verTicketsTecnico;
                    document.getElementById("crearCotizacion").onclick = crearCotizacion;
                    document.getElementById("atenderTicket").onclick = atenderTicket;
                    document.getElementById("declararEstadoCelular").onclick = declararEstadoCelular;
                    document.getElementById("cerrarTicket").onclick = cerrarTicket;
                    document.getElementById("cerrarSesionTecnico").onclick = () => cerrarSesion("divTecnico");
                    document.getElementById("verUsuarioActualTecnico").innerText = arrObjUsuarios[x].tipo.nombre;
                    verHabilidades();
                    verTicketsTecnico();
                    verCotizacionesTecnico();
                }
            }
        }
        if(usuarioActual == null){mostrarFormulario();};
    }
}

async function cerrarSesion(div) {
    document.getElementById(div).style.display = "none";
    usuarioActual = null;
    mostrarFormulario();
}

async function verSucursales() {
    let cuerpoTabla = document.getElementById("tablaSucursales");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
        
        //Lista de ID's de Tecnicos
        let idTecnicos = sucursal.tecnicos.map(tecnico => tecnico.id).join(",");
        let cantTecnicos = sucursal.tecnicos.length;

        //Lista de ID's de Clientes
        let idClientes = sucursal.clientes.map(cliente => cliente.id).join(",");
        let cantClientes = sucursal.clientes.length;

        //Lista de ID's de Tickets
        let idTickets = sucursal.tickets.map(ticket => ticket.id).join(",");
        let cantTickets = sucursal.tickets.length;

        //Lista de ID's de Reportados
        let idReportados = sucursal.reportados.map(reportado => reportado.id).join(",");
        let cantReportados = sucursal.reportados.length;
                
        let fila = document.createElement("tr");
        fila.innerHTML = `
      <td>${sucursal.id}</td>
      <td>${sucursal.nombre}</td>
      <td>${cantTecnicos}: <br>${idTecnicos ? `${idTecnicos}` : ""}</td>
      <td>${cantClientes}: <br>${idClientes ? `${idClientes}` : ""}</td>
      <td>${cantTickets}: <br>${idTickets ? `${idTickets}` : ""}</td>
      <td>${cantReportados}: <br>${idReportados ? `${idReportados}` : ""}</td>`;
        cuerpoTabla.appendChild(fila);
    });
}

async function crearNuevaSucursal(objCentral) {
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de Sucursal</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Nombre de Sucursal</div>
            <input id="swal-input2" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Contraseña para Sucursal</div>
            <input type="password" id="swal-input3" class="swal2-input">
        </div>`,
        confirmButtonText: `Crear Sucursal`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    });
    if (formValues) {
        let nuevaSucursal = arrObjUsuarios[0].tipo.crearSucursal(formValues[0], formValues[1]);
        crearUsuarioSistema(nuevaSucursal, formValues[2]);        
        verSucursales();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function crearNuevoTicket() {
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de Ticket</div>            
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Nro.Serie de Celular</div>
            <input id="swal-input2" class="swal2-input">
            <br><br>
            
        </div>`,
        confirmButtonText: `Crear Ticket`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        let nuevoTicket = usuarioActual.tipo.crearTicket(formValues[0], formValues[1]);
        if(nuevoTicket == "reportado"){Swal.fire("Celular figura como reportado.")}
        if(nuevoTicket == "Habilidad no encontrada."){Swal.fire("No hay técnicos con la habilidad necesaria.")}
        if(nuevoTicket == "Celular invalido."){Swal.fire("No hay celular registrado con ese Nro. de serie.")}
        verTickets();

        //LOCALSTORAGE
        saveBranch(central01);
    }
    
}
async function verTickets() {
    let cuerpoTabla = document.getElementById("tablaTickets");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    usuarioActual.tipo.tickets.forEach(ticket => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${ticket.id}</td>
        <td>${ticket.celular.id}</td>
        <td>${ticket.cliente.id}</td>
        <td>${ticket.tecnico.id}</td>
        <td>${ticket.inicio}</td>
        <td>${ticket.historial.length}</td>
        <td>${ticket.cotizaciones.length}</td>
        <td>${ticket.autorizacion}</td>
        <td>${ticket.fin}</td>`;
        cuerpoTabla.appendChild(fila);
    });
    verTecnicos();
    verClientes();
}
async function crearNuevoTecnico() {
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de Técnico</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Nombre de Técnico</div>
            <input id="swal-input2" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Contraseña para Técnico</div>
            <input type="password" id="swal-input3" class="swal2-input">
        </div>`,
        confirmButtonText: `Crear Técnico`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    });
    if (formValues) {
        let nuevoTecnico = usuarioActual.tipo.crearTecnico(formValues[0], formValues[1]);
        crearUsuarioSistema(nuevoTecnico, formValues[2]);
        verTecnicos();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function verTecnicos() {
    let cuerpoTabla = document.getElementById("tablaTecnicos");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    usuarioActual.tipo.tecnicos.forEach(tecnico => {
        //Lista de Nombres's de Habilidades
        let nombreHabilidad = tecnico.habilidades.map(habilidad => habilidad.nombre).join(", ");
        let cantHabilidades = tecnico.habilidades.length;
        //Lista de ID's de Tareas
        let idTicket = tecnico.tareas.map(tarea => tarea.id).join(",");
        let cantTickets = tecnico.tareas.length;

        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${tecnico.id}</td>
        <td>${tecnico.nombre}</td>
        <td>${cantHabilidades}: <br>${nombreHabilidad ? `${nombreHabilidad}` : ""}</td>
        <td>${cantTickets}: <br>${idTicket ? `${idTicket}` : ""}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

async function crearNuevoCliente() {
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de Cliente</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Nombre de Cliente</div>
            <input id="swal-input2" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Contraseña para Cliente</div>
            <input type="password" id="swal-input3" class="swal2-input">
        </div>`,
        confirmButtonText: `Crear Cliente`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    });
    if (formValues) {
        let nuevoCliente = usuarioActual.tipo.crearCliente(formValues[0], formValues[1]);
        crearUsuarioSistema(nuevoCliente, formValues[2]);
        verClientes();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}
async function verClientes() {
    let cuerpoTabla = document.getElementById("tablaClientes");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    usuarioActual.tipo.clientes.forEach(cliente => {

    //Lista de Id's de Celulares
        let idCelular = cliente.celulares.map(celular => celular.id).join(", ");
        let cantCelulares = cliente.celulares.length;
    
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${cliente.id}</td>
        <td>${cliente.nombre}</td>
        <td>${cantCelulares}: <br>${idCelular ? `${idCelular}` : ""}</td>`;
        cuerpoTabla.appendChild(fila);
    });
}

async function crearCelular(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Nro Serie de Celular</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">IMEI de Celular</div>
            <input id="swal-input2" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Marca de Celular</div>
            <input id="swal-input3" class="swal2-input">
        </div>`,
        confirmButtonText: `Registrar Celular`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value
            ];
        }
    });
    if (formValues) {
        usuarioActual.tipo.crearCelular(formValues[0], formValues[1], formValues[2]);
        verCelulares();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function verCelulares(){
    let cuerpoTabla = document.getElementById("tablaCelulares");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    usuarioActual.tipo.celulares.forEach(celular => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${celular.id}</td>
        <td>${celular.imei}</td>
        <td>${celular.marca}</td>
        <td>${celular.estado}</td>
        <td>${celular.esReportado}</td>`;        
        cuerpoTabla.appendChild(fila);
    });
}

async function verTicketsCliente(){
    let cuerpoTabla = document.getElementById("tablaTicketClientes");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    // Cliente que ha iniciado sesión
    let clienteLogueado = usuarioActual.tipo;

    // Buscar en TODAS las sucursales de la central principal
    arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
        sucursal.tickets.forEach(ticket => {
            // Comparar por ID de cliente
            if (ticket.cliente.id === clienteLogueado.id) {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${ticket.id}</td>
                    <td>${ticket.celular.id}</td>
                    <td>${ticket.cliente.nombre}</td>
                    <td>${ticket.tecnico.nombre}</td>
                    <td>${ticket.inicio || "—"}</td>
                    <td>
                        ${ticket.historial.length}:<br>
                        ${ticket.historial.map(c => c).join("<br>")}
                    </td>
                    <td>
                        ${ticket.cotizaciones.length}:<br>
                        ${ticket.cotizaciones.map(c => `ID: ${c.id}, ¿Pagado? ${c.estadoPago}`).join("<br>")}                        
                    </td>
                    <td>${ticket.autorizacion ? "Sí" : "No"}</td>
                    <td>${ticket.fin || "—"}</td>`;
                cuerpoTabla.appendChild(fila);
            }
        });
    });
}

async function crearHabilidad(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Nombre de Habilidad</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Años de Experiencia de Habilidad</div>
            <input id="swal-input2" class="swal2-input">            
        </div>`,
        confirmButtonText: `Registrar Habilidad`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        usuarioActual.tipo.crearHabilidad(formValues[0], formValues[1]);
        verHabilidades();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function verHabilidades(){
    console.log(`Usuario Actual: ${usuarioActual.tipo.nombre}, habilidades: ${usuarioActual.tipo.habilidades.length}`);
    let cuerpoTabla = document.getElementById("tablaHabilidades");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    usuarioActual.tipo.habilidades.forEach(habilidad => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${habilidad.nombre}</td>
        <td>${habilidad.experiencia}</td>`;        
        cuerpoTabla.appendChild(fila);
    });
}

async function verTicketsTecnico(){
    let cuerpoTabla = document.getElementById("tablaTicketsTecnicos");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    // Técnico que ha iniciado sesión
    let tecnicoLogueado = usuarioActual.tipo;

    // Buscar en TODAS las sucursales de la central principal
    arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
        sucursal.tickets.forEach(ticket => {
            // Comparar por ID de Tecnico
            if (ticket.tecnico.id === tecnicoLogueado.id) {
                let fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${ticket.id}</td>
                    <td>${ticket.celular.id}</td>
                    <td>${ticket.cliente.id}</td>
                    <td>${ticket.tecnico.id}</td>
                    <td>${ticket.inicio || "—"}</td>
                    <td>
                        ${ticket.historial.length}:<br>
                        ${ticket.historial.map(c => c).join("<br>")}
                    </td>

                    <td>
                        ${ticket.cotizaciones.length}:<br>
                        ${ticket.cotizaciones.map(c => `ID: ${c.id}, ¿Pagado? ${c.estadoPago}`).join("<br>")}                        
                    </td>

                    <td>${ticket.autorizacion ? "Sí" : "No"}</td>
                    <td>${ticket.fin || "—"}</td>`;
                cuerpoTabla.appendChild(fila);
            }
        });
    });
}

async function crearCotizacion(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>

            <div class="subtitulosLogin">ID de Cotización</div>
            <input id="swal-input1" class="swal2-input">

            <br><br>
            <div class="subtitulosLogin">Concepto</div>
            <input id="swal-input2" class="swal2-input">

            <br><br>
            <div class="subtitulosLogin">Monto</div>
            <input id="swal-input3" class="swal2-input">

            <br><br>
            <div class="subtitulosLogin">ID de Ticket</div>
            <input id="swal-input4" class="swal2-input">
        </div>`,
        confirmButtonText: `Crear Cotización`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value,
                document.getElementById("swal-input3").value,
                document.getElementById("swal-input4").value
            ];
        }
    });
    if (formValues) {        
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.tickets.forEach(ticket => {
                if (ticket.id == formValues[3]){
                    ticket.crearCotizacion(formValues[0], formValues[1], formValues[2], usuarioActual.tipo, ticket.cliente,obtenerFechaActual());
                }
            });
        });        
        verCotizacionesTecnico();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function verCotizacionesTecnico(){
    let cuerpoTabla = document.getElementById("tablaCotizacionesTecnicos");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
        sucursal.tickets.forEach(ticket => {
            ticket.cotizaciones.forEach(cotizacion => {
                if (cotizacion.tecnico == usuarioActual.tipo){
                    let fila = document.createElement("tr");
                    fila.innerHTML = `
                    <td>${cotizacion.id}</td>
                    <td>${cotizacion.concepto}</td>
                    <td>S/ ${cotizacion.monto}</td>
                    <td>${cotizacion.cliente.id}</td>
                    <td>${cotizacion.tecnico.id}</td>
                    <td>${cotizacion.fecha}</td>
                    <td>${cotizacion.estadoPago}</td>
                    `;
                    cuerpoTabla.appendChild(fila);
                }
            });
        });
    });
}


async function atenderTicket(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Id de Ticket</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Anotación</div>
            <input id="swal-input2" class="swal2-input">
        </div>`,
        confirmButtonText: `Registrar Anotación`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.tickets.forEach(ticket => {
                if (ticket.id == formValues[0]){
                    ticket.actualizarEstadoTicket(formValues[1]);
                }
            });
        });
        verTicketsTecnico();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function autorizarAtencion(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Id de Ticket</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
        </div>`,
        confirmButtonText: `Autorizar Atención`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value
            ];
        }
    });
    if (formValues) {
                
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.tickets.forEach(ticket => {
                if (ticket.id == formValues[0]){
                    ticket.autorizarAtencion();
                }
            });
        });
        verTicketsCliente();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function pagarCotizacion(){

    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Id de Cotización</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
        </div>`,
        confirmButtonText: `Pagar Cotización`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value
            ];
        }
    });
    if (formValues) {
                
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.tickets.forEach(ticket => {
                ticket.cotizaciones.forEach(cotizacion => {
                    if (cotizacion.id == formValues[0] && cotizacion.cliente == usuarioActual.tipo){
                        cotizacion.pagarCotizacion();
                    }else{Swal.fire("Cotización no encontrada/asignada al cliente actual.")}
                });
            });
        });
        verCotizacionesCliente();
        verTicketsCliente();

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function verCotizacionesCliente(){
    let cuerpoTabla = document.getElementById("tablaCotizacionesClientes");
    cuerpoTabla.innerHTML = ""; // limpia el contenido previo

    arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
        sucursal.tickets.forEach(ticket => {
            ticket.cotizaciones.forEach(cotizacion => {
                if (cotizacion.cliente == usuarioActual.tipo){
                    let fila = document.createElement("tr");
                    fila.innerHTML = `
                    <td>${cotizacion.id}</td>
                    <td>${cotizacion.concepto}</td>
                    <td>S/ ${cotizacion.monto}</td>
                    <td>${cotizacion.cliente.id}</td>
                    <td>${cotizacion.tecnico.nombre}</td>
                    <td>${cotizacion.fecha}</td>
                    <td>${cotizacion.estadoPago}</td>
                    `;
                    cuerpoTabla.appendChild(fila);
                }
            });
        });
    });

}

/*AREGLAR*/
async function declararEstadoCelular(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">Nro. Serie de Celular</div>
            <input id="swal-input1" class="swal2-input">
            <br><br>
            <div class="subtitulosLogin">Estado Actual</div>
            <input id="swal-input2" class="swal2-input">            
        </div>`,
        confirmButtonText: `Actualizar Estado`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });
    if (formValues) {
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.clientes.forEach(cliente => {
                cliente.celulares.forEach(celular => {
                    if (celular.id == formValues[0]){
                        celular.actualizarEstado(formValues[1]);
                    }
                });
            });
        });

        //LOCALSTORAGE
        saveBranch(central01);
    }
}

async function cerrarTicket(){
    const { value: formValues } = await Swal.fire({
        html: `
        <div>
        <br><br><br>
            <i id="celularLogin" class="bi bi-phone"></i><i id="martilloLogin" class="bi bi-hammer"></i><br>
            <h3 class="titulosLogin">Reparaciones</h3><h1 class="titulosLogin">Vibe Phone</h1>
            <div class="subtitulosLogin">ID de Ticket</div>
            <input id="swal-input1" class="swal2-input">            
        </div>`,
        confirmButtonText: `Cerrar Ticket`,

        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value                
            ];
        }
    });
    if (formValues) {
        arrObjUsuarios[0].tipo.sucursales.forEach(sucursal => {
            sucursal.tickets.forEach(ticket => {
                if (ticket.id == formValues[0]){
                    ticket.cerrarTicket(obtenerFechaActual());
                }
            });
        });
    }
    verTicketsTecnico();

    //LOCALSTORAGE
    saveBranch(central01);
}

/*COSAS DE LOCALSTORAGE*/

//saveBranch(central01);
//loadingBranches(System);

loadingSystem();