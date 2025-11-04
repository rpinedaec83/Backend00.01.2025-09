const Reparacion = (function () {
    let txtSucursal;

    function configurar() {
        $("#txtSucursal").text(txtSucursal);
    }

    function eventos() {
        $("#btnIniciarReparacion").on("click", iniciarReparacion);
    }

    async function iniciarReparacion(e) {
        e.preventDefault();
        console.log("Iniciando reparación");

        $("#divReparacion").hide();

        const { value: telefonoValues } = await Swal.fire({
            title: "Datos del Teléfono",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Siguiente",
            cancelButtonText: "Cancelar",
            html: `
                <div class="form-group">
                    <input id="marca" type="text" placeholder="Marca del teléfono" class="form-control">
                </div>
                <div class="form-group">
                    <input id="modelo" type="text" placeholder="Modelo del teléfono" class="form-control">
                </div>
                <div class="form-group">
                    <input id="serie" type="text" placeholder="Número de Serie" class="form-control">
                </div>
                <div class="form-group">
                    <input id="imei" type="text" placeholder="IMEI" class="form-control">
                </div>
            `,
            preConfirm: () => {
                const serie = $("#serie").val();
                const imei = $("#imei").val();
                if (serie === "REPORTADO" || imei === "REPORTADO") {
                    Swal.showValidationMessage("Serie o IMEI reportado. No se puede acceder al servicio.");
                    return false;
                }
                return {
                    marca: $("#marca").val(),
                    modelo: $("#modelo").val(),
                    serie: serie,
                    imei: imei
                };
            }
        });

        if (!telefonoValues) return;

        let objTelefono = new Telefono(telefonoValues.marca, telefonoValues.modelo, telefonoValues.serie, telefonoValues.imei);

        const { value: diagnosticoValue } = await Swal.fire({
            title: "Primera Revisión",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Siguiente",
            cancelButtonText: "Cancelar",
            html: `
                <div class="form-group">
                    <textarea id="diagnostico" placeholder="Diagnóstico inicial" class="form-control"></textarea>
                </div>
            `,
            preConfirm: () => {
                return $("#diagnostico").val();
            }
        });

        if (!diagnosticoValue) return;

        const { value: clienteValues } = await Swal.fire({
            title: "Datos del Cliente",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Siguiente",
            cancelButtonText: "Cancelar",
            html: `
                <div class="form-group">
                    <input id="dni" type="text" placeholder="DNI" class="form-control">
                </div>
                <div class="form-group">
                    <input id="nombres" type="text" placeholder="Nombres" class="form-control">
                </div>
                <div class="form-group">
                    <input id="apellidos" type="text" placeholder="Apellidos" class="form-control">
                </div>
                <div class="form-group">
                    <input id="direccion" type="text" placeholder="Dirección" class="form-control">
                </div>
                <div class="form-group">
                    <input id="telefono" type="text" placeholder="Teléfono" class="form-control">
                </div>
            `,
            preConfirm: () => {
                return {
                    dni: $("#dni").val(),
                    nombres: $("#nombres").val(),
                    apellidos: $("#apellidos").val(),
                    direccion: $("#direccion").val(),
                    telefono: $("#telefono").val()
                };
            }
        });

        if (!clienteValues) return;

        let objCliente = new Cliente(clienteValues.dni, clienteValues.nombres, clienteValues.apellidos, clienteValues.direccion, clienteValues.telefono, "CLI" + Math.random().toString(36).substr(2, 9));

        const { value: autorizacionValues } = await Swal.fire({
            title: "Autorización y Abono",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Siguiente",
            cancelButtonText: "Cancelar",
            html: `
                <div class="text-left mb-3">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="swal-autorizacion">
                        <label class="custom-control-label" for="swal-autorizacion">
                            Autorizo la reparación (escrita)
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <input id="swal-costo" type="number" placeholder="Costo total estimado" class="form-control">
                </div>
                <div class="form-group">
                    <input id="swal-abono" type="number" placeholder="Abono (50% del costo)" class="form-control">
                </div>
            `,
            preConfirm: () => {
                const autorizacion = document.getElementById('swal-autorizacion').checked;
                const costoTotal = parseFloat(document.getElementById('swal-costo').value);
                const abono = parseFloat(document.getElementById('swal-abono').value);

                if (!autorizacion) {
                    Swal.showValidationMessage('Debe autorizar la reparación.');
                    return false;
                }
                if (isNaN(costoTotal) || costoTotal <= 0) {
                    Swal.showValidationMessage('Ingrese un costo total válido.');
                    return false;
                }
                if (isNaN(abono) || abono < costoTotal * 0.5) {
                    Swal.showValidationMessage(`El abono debe ser al menos el 50% (${costoTotal * 0.5})`);
                    return false;
                }

                return { autorizacion: true, abono: abono, costoTotal: costoTotal };
            }
        });

        if (!autorizacionValues) return;

        const tecnicosDisponibles = [
            new Tecnico("123456", "Juan", "Pérez", "Lima", "999999999", "TEC001", ["Samsung", "Apple"]),
            new Tecnico("654321", "Maria", "López", "Lima", "888888888", "TEC002", ["Huawei", "Xiaomi"])
        ];

        let objTecnico = tecnicosDisponibles.find(tec => tec.skills.includes(objTelefono.marca));
        if (!objTecnico) {
            await Swal.fire("Error", "No hay técnico disponible para esta marca.", "error");
            return;
        }

        let repuestos = [];
        const { value: repuestosValues } = await Swal.fire({
            title: "Agregar Repuestos",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Finalizar",
            cancelButtonText: "Cancelar",
            html: `
                <div class="form-group">
                    <input id="repuesto1" type="text" placeholder="Repuesto 1 (ej: Batería)" class="form-control">
                </div>
                <div class="form-group">
                    <input id="repuesto2" type="text" placeholder="Repuesto 2 (opcional)" class="form-control">
                </div>
            `,
            preConfirm: () => {
                const rep1 = $("#repuesto1").val();
                const rep2 = $("#repuesto2").val();
                if (rep1) repuestos.push(new Repuesto(rep1, 100));
                if (rep2) repuestos.push(new Repuesto(rep2, 150));
                return repuestos;
            }
        });

        if (!repuestosValues) return;

        let objReparacion = new Reparaciones(objTelefono, objCliente, diagnosticoValue, autorizacionValues.autorizacion, autorizacionValues.abono, objTecnico);
        repuestos.forEach(rep => objReparacion.agregarRepuesto(rep));

        objReparacion.actualizarEstado("En Revisión");
        objReparacion.actualizarEstado("En Reparación");
        objReparacion.actualizarEstado("Listo para Entrega");

        dibujarDetalles(objReparacion);

        console.log(objReparacion);
    }

    function dibujarDetalles(obj) {
        $("#clienteNombres").val(obj.cliente.nombres);
        $("#clienteApellidos").val(obj.cliente.apellidos);
        $("#telefonoMarca").val(obj.telefono.marca);
        $("#telefonoModelo").val(obj.telefono.modelo);
        $("#telefonoSerie").val(obj.telefono.serie);
        $("#telefonoIMEI").val(obj.telefono.imei);
        $("#diagnosticoInicial").val(obj.diagnosticoInicial);
        $("#abono").val(obj.abono);
        $("#tecnicoNombre").val(obj.tecnico.nombres + " " + obj.tecnico.apellidos);
        $("#repuestos").val(obj.arrRepuestos.map(r => r.nombre).join(", "));
        $("#estado").val(obj.estadoActual);

        $("#divReparacion").show();
    }

    return {
        init: function (parametros) {
            txtSucursal = parametros.sucursal;
            configurar();
            eventos();
        }
    };
})();

class Persona {
    #isLogged = false;
    constructor(dni, nombres, apellidos, direccion, telefono) {
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getLogged() {
        return this.#isLogged;
    }
    setLogged(newLog) {
        if (this.#isLogged && newLog) {
            return "Ya tienes iniciada la sesión";
        } else {
            this.#isLogged = newLog;
            return newLog ? "Has iniciado tu sesión correctamente" : "Has cerrado tu sesión correctamente";
        }
    }
    login() {
        console.log(this.setLogged(true));
    }
    logout() {
        console.log(this.setLogged(false));
    }
}

class Cliente extends Persona {
    constructor(dni, nombres, apellidos, direccion, telefono, idCliente) {
        super(dni, nombres, apellidos, direccion, telefono);
        this.idCliente = idCliente;
    }
    autorizar() {
        console.log(`El cliente ${this.nombres} ${this.apellidos} ha autorizado la reparación.`);
    }
}

class Tecnico extends Persona {
    constructor(dni, nombres, apellidos, direccion, telefono, idTecnico, skills) {
        super(dni, nombres, apellidos, direccion, telefono);
        this.idTecnico = idTecnico;
        this.skills = skills || [];
    }
    reparar(telefono) {
        if (this.skills.includes(telefono.marca)) {
            console.log(`Técnico ${this.nombres} reparando teléfono ${telefono.marca}.`);
        } else {
            console.log(`Técnico no calificado para ${telefono.marca}.`);
        }
    }
}

class Telefono {
    constructor(marca, modelo, serie, imei) {
        this.marca = marca;
        this.modelo = modelo;
        this.serie = serie;
        this.imei = imei;
        this.reportado = false;
    }
}

class Repuesto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Reparaciones {
    constructor(telefono, cliente, diagnosticoInicial, autorizacion, abono, tecnico) {
        this.telefono = telefono;
        this.cliente = cliente;
        this.diagnosticoInicial = diagnosticoInicial;
        this.autorizacion = autorizacion;
        this.abono = abono;
        this.tecnico = tecnico;
        this.arrRepuestos = [];
        this.estados = ["Ingresado"];
        this.estadoActual = "Ingresado";
    }
    agregarRepuesto(repuesto) {
        this.arrRepuestos.push(repuesto);
    }
    actualizarEstado(nuevoEstado) {
        this.estados.push(nuevoEstado);
        this.estadoActual = nuevoEstado;
        console.log(`Estado actualizado a: ${nuevoEstado}`);
    }
}