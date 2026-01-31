class Telefono {
    constructor(imei, serie, marca, modelo) {
        this.imei = imei;
        this.serie = serie;
        this.marca = marca;
        this.modelo = modelo;
        this.reportado = false;      // Por defecto NO está reportado
        this.diagnostico = null;     // Aún sin diagnóstico
    }

    verificarReporte() {
        if (imeisReportados.includes(this.imei) || seriesReportadas.includes(this.serie)) {
            console.log("🚨 El teléfono está reportado");
            return false;
        } else {
            console.log("✅ El teléfono NO está reportado");
            return true;
        }   
    }


    primeraRevision(diagnostico) {
        this.diagnostico = diagnostico;
        console.log("📝 Primera revisión guardada:", diagnostico);
    }

    mostrarInfo() {
        console.log("📱 Teléfono:");
        console.log("IMEI:", this.imei);
        console.log("Serie:", this.serie);
        console.log("Marca:", this.marca);
        console.log("Modelo:", this.modelo);
        console.log("Diagnóstico:", this.diagnostico);
    }
}

class Cliente {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.autorizacion = false;
        this.abono = 0;
    }

    autorizar() {
        this.autorizacion = true;
        console.log(` ${this.nombre} ha autorizado la reparación`);
    }

    registrarAbono(monto) {
        this.abono = monto;
        console.log(` Abono registrado: S/${monto}`);
    }

    validarIngreso(costoReparacion) {
    if (this.autorizacion && this.abono >= costoReparacion * 0.5) {
        console.log(" Cliente cumple requisitos para iniciar reparación");
        return true;
        } else {
            console.log(" No cumple: necesita autorización y 50% de abono");
            return false;
        }
    }
}

class Tecnico {

    constructor(id, nombre, skills = []) {
        this.id = id;
        this.nombre = nombre;
        this.skills = skills;   // Ej: ["Samsung", "Apple", "Xiaomi"]
    }

    mostrarDatos() {
        return `ID: ${this.id}
        Nombre: ${this.nombre}
        Skills: ${this.skills.join(", ")}`;
    }

    agregarSkill(nuevoSkill) {
        if (!this.skills.includes(nuevoSkill)) {
            this.skills.push(nuevoSkill);
        }
    }

    eliminarSkill(skill) {
        this.skills = this.skills.filter(s => s !== skill);
    }

    puedeReparar(marca) {
        return this.skills.includes(marca);
    }
}

class Repuesto {
    constructor(id, nombre, marca, precio) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}

class Sucursal {
    constructor(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.reparaciones = [];
        this.tecnicos = [];
    }

    agregarTecnico(tecnico) {
        this.tecnicos.push(tecnico);
    }

    agregarReparacion(reparacion) {
        this.reparaciones.push(reparacion);
    }

    mostrarReparaciones() {
        console.log(`Reparaciones en la sucursal ${this.nombre}:`);
        this.reparaciones.forEach(rep => console.log(rep));
    }
}

class Reparacion {
    constructor(id, telefono, cliente) {
        this.id = id;
        this.telefono = telefono;
        this.cliente = cliente;
        this.diagnostico = "";
        this.autorizado = false;
        this.abono = 0;
        this.tecnico = null;
        this.repuestos = [];
        this.estado = "Recibido"; // Recibido | En revisión | En reparación | Listo | Entregado
    }

    // Primer diagnóstico
    agregarDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
        this.estado = "En revisión";
    }

    // Autorización del cliente y abono 50%
    autorizar(abono, costoTotal) {
        if (abono >= (costoTotal * 0.5)) {
            this.autorizado = true;
            this.abono = abono;
            console.log("Reparación autorizada por el cliente.");
        } else {
            console.log("El abono debe ser mínimo del 50%.");
        }
    }

    // Asignar técnico según skills
    asignarTecnico(tecnico) {
        if (tecnico.skills.includes(this.telefono.marca)) {
            this.tecnico = tecnico;
            console.log(`Técnico ${tecnico.nombre} asignado.`);
        } else {
            console.log("El técnico no tiene skills para esta marca.");
        }
    }

    // Agregar repuestos
    agregarRepuesto(repuesto) {
        this.repuestos.push(repuesto);
    }

    // Cambiar estado del equipo
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    // Mostrar información completa del proceso
    mostrarDetalle() {
        console.log("DETALLE DE LA REPARACIÓN");
        console.log("Cliente:", this.cliente.nombre);
        console.log("Teléfono:", this.telefono.marca, this.telefono.modelo);
        console.log("Diagnóstico:", this.diagnostico);
        console.log("Autorizado:", this.autorizado);
        console.log("Abono:", this.abono);
        console.log("Técnico:", this.tecnico ? this.tecnico.nombre : "No asignado");
        console.log("Estado:", this.estado);
        console.log("Repuestos:", this.repuestos.map(r => r.nombre).join(", "));
    }
}
const imeisReportados = [
    "111111111111111",
    "222222222222222",
    "333333333333333"
];

const seriesReportadas = [
    "ABC123",
    "DEF456",
    "GHI789"
];
const clientes = [];
const telefonos = [];
const tecnicos = [];
const reparaciones = [];

let ultimoTelefono = null;
let ultimoCliente = null;

/* CLIENTE */
document.getElementById("formCliente").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = clienteNombre.value;
    const dni = clienteDni.value;

    const cliente = new Cliente(nombre, dni);
    clientes.push(cliente);
    ultimoCliente = cliente;

    actualizarClientes();
    this.reset();
});


/* TELEFONO */
document.getElementById("formTelefono").addEventListener("submit", function(e){
    e.preventDefault();

    const imei = telefonoImei.value;
    const serie = telefonoSerie.value;
    const marca = telefonoMarca.value;
    const modelo = telefonoModelo.value;
    const diagnostico = telefonoDiagnostico.value;

    const telefono = new Telefono(imei, serie, marca, modelo);

    if (!telefono.verificarReporte()) {
        alert("El teléfono está reportado");
        return;
    }

    telefono.primeraRevision(diagnostico);

    telefonos.push(telefono);
    ultimoTelefono = telefono;

    actualizarTelefonos();
    this.reset();
});


/* TECNICO */
document.getElementById("formTecnico").addEventListener("submit", function(e){
    e.preventDefault();

    const id = tecnicoId.value;
    const nombre = tecnicoNombre.value;
    const skills = tecnicoSkills.value.split(",").map(s => s.trim());

    const tecnico = new Tecnico(id, nombre, skills);
    tecnicos.push(tecnico);

    actualizarTecnicos();
    this.reset();
});


/* REPARACION */
document.getElementById("formReparacion").addEventListener("submit", function(e){
    e.preventDefault();

    if (!ultimoCliente || !ultimoTelefono) {
        alert("Primero registra un cliente y un teléfono");
        return;
    }

    const id = reparacionId.value;
    const costo = parseFloat(costoReparacion.value);
    const abono = parseFloat(abonoReparacion.value);

    const reparacion = new Reparacion(id, ultimoTelefono, ultimoCliente);

    reparacion.agregarDiagnostico(ultimoTelefono.diagnostico);
    reparacion.autorizar(abono, costo);

    let tecnicoAsignado = tecnicos.find(t => t.puedeReparar(ultimoTelefono.marca));

    if (tecnicoAsignado) {
        reparacion.asignarTecnico(tecnicoAsignado);
    }

    reparaciones.push(reparacion);

    actualizarReparaciones();
    this.reset();
});


function actualizarClientes(){
    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    clientes.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nombre} - DNI: ${c.dni}`;
        lista.appendChild(li);
    });
}

function actualizarTelefonos(){
    const lista = document.getElementById("listaTelefonos");
    lista.innerHTML = "";

    telefonos.forEach(t => {
        const li = document.createElement("li");
        li.textContent = `${t.marca} ${t.modelo} - IMEI: ${t.imei}`;
        lista.appendChild(li);
    });
}

function actualizarTecnicos(){
    const lista = document.getElementById("listaTecnicos");
    lista.innerHTML = "";

    tecnicos.forEach(t => {
        const li = document.createElement("li");
        li.textContent = `${t.nombre} - Skills: ${t.skills.join(", ")}`;
        lista.appendChild(li);
    });
}

function actualizarReparaciones(){
    const lista = document.getElementById("listaReparaciones");
    lista.innerHTML = "";

    reparaciones.forEach(r => {
        const li = document.createElement("li");
        li.textContent = `Reparación ${r.id} | ${r.telefono.marca} | Técnico: ${r.tecnico ? r.tecnico.nombre : "No asignado"} | Estado: ${r.estado}`;
        lista.appendChild(li);
    });
}
