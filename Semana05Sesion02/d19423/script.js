


const Reserva = (function () {
    let txtPais, txtNombre;

    function configurar(){
        $("#txtPais").text(txtPais);
        // document.getElementById("txtPais").innerText = txtPais;
        $("#txtNombre").text(txtNombre);
    }
    function eventos(){
        $("#btnReservar").on("click",(e)=>{
            e.preventDefault();
            console.log("Hizo click");
        });
        // document.getElementById("btnReservar").addEventListener("click",(e)=>{

        // })
    }

    return {
        init: function(parametros){
            txtNombre = parametros.nombre;
            txtPais = parametros.pais;
            configurar();
            eventos();
        }
    }
})();

class Persona{
    #isLogged = false;
    constructor(dni, nombre, apellidos,direccion, telefono){
        this.dni = dni;
        this.nombre= nombre;
        this.apellidos=apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getLogged(){
        return this.#isLogged;
    }
    setLogged(newLog){
        if(this.#isLogged && newLog){
            return "Ya tienes iniciada la sesion";
        }
        else{
        if(newLog){
            this.#isLogged = newLog;
            return "haz iniciado tu sesion correctamente"
        }
        else{
            this.#isLogged = newLog;
            return "haz cerrado tu sesion correctamente"
        }
    }
    }

    login(){
       console.log( this.setLogged(true));

        
    }
    logout(){
        console.log( this.setLogged(false));
    }
}

let objPersona = new Persona("123515","Roberto","Pineda", "Lima", 916730940);

objPersona.login();

objPersona.login();

objPersona.logout();

objPersona.login();