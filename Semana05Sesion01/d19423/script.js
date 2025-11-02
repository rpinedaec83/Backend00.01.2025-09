/*

Television
    Serie:
    Marca: JVC
    Modelo:
    Tamaño
    Puertos
    Precio:
    Garantia
    Salidas
    Tipo
    SO

    Prender
    Apagar
    CambiarCanal
    CambiarVolumen
    ReproducirStream

*/ 
const admin = true;
class Dispositivo{
    constructor(tipo, isActivo=false){
        this.tipo = tipo;
        this.isActivo = isActivo;
    }
}
class Electrodomesticos{
    #costo=0;
    constructor(serie, marca, modelo, conectividad,precio,fechaCompra=new Date() ){
        this.serie = serie;
        this.marca = marca;
        this.modelo = modelo;
        this.conectividad = conectividad;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
    }
    encender(){
        console.log(`El electrodomestico ${this.marca} se esta encendiendo`);
    }
    apagar(){
        console.log(`El electrodomestico ${this.marca} se esta apagando`);
    }
    getCosto(){
        if(admin)return this.#costo;
    }
    setCosto(newCosto){
        if(admin) this.#costo = newCosto;
    }
    conectarAlInternet(dispositivo){
        this.conectividad.forEach(element => {
            if(element.tipo === dispositivo){
                element.isActivo = true;
                console.log(`El dispositivo de conectividad: ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de conectividad: ${element.tipo} se ha desactivado`);
            }
        });
    }
}

class LineaBlanca extends Electrodomesticos{
    constructor(serie, marca, modelo, conectividad,precio,fechaCompra=new Date() ){
        super(serie, marca, modelo, conectividad,precio,fechaCompra);
    }
}

class LineaMarron extends Electrodomesticos{
    constructor(serie, marca, modelo, conectividad,precio,fechaCompra, entradas, salidas){
        super(serie, marca, modelo, conectividad,precio,fechaCompra);
        this.entradas = entradas;
        this.salidas = salidas;
    }
    cambiarEntrada(entrada){
        this.entradas.forEach(element => {
            if(element.tipo === entrada){
                element.isActivo = true;
                console.log(`El dispositivo de entrada: ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de entrada: ${element.tipo} se ha desactivado`);
            }
        });
    }
    cambiarSalida(salida){
        this.salidas.forEach(element => {
            if(element.tipo === salida){
                element.isActivo = true;
                console.log(`El dispositivo de salida: ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de salida: ${element.tipo} se ha desactivado`);
            }
        });
    }
}

class Television extends LineaMarron {
    constructor(serie, marca, modelo, conectividad,precio,fechaCompra, entradas, salidas,formato, tamaño, sistemaOperativo){
        super(serie, marca, modelo, conectividad,precio,fechaCompra, entradas, salidas);
        this.formato = formato;
        this.tamaño = tamaño;
        this.sistemaOperativo = sistemaOperativo;
    }
    cambiarCanal(numeroCanal){
        let exito = false;
        this.entradas.forEach(element => {
            if(element.isActivo && element.tipo === "Cable"){
                exito = true;
                console.log(`La television ${this.marca} ${this.modelo} esta mostrando el canal ${numeroCanal}`);
            }
        });
        if(!exito){
            console.log(`La television ${this.marca} ${this.modelo} no puede ejecutar la accion`);
        }
    }
    encender(){
        console.log(`La television ${this.marca} ${this.modelo} se esta encendiendo`);
    }
}


let objTV1 = new Television("A123","Sony","KTV01",[
    new Dispositivo("WIFI"), new Dispositivo("BT"), new Dispositivo("LAN", true)
],1500,null,[
    new Dispositivo("HDMI"), new Dispositivo("Cable",true), new Dispositivo("BT")
], [
    new Dispositivo("Parlantes"), new Dispositivo("BT")
], "4k",50,"GoogleTV");

objTV1.encender();
objTV1.apagar();
objTV1.cambiarCanal(55);
objTV1.cambiarEntrada("HDMI")
objTV1.cambiarSalida("BT")

// let objTV1 = new Television(123456,"Sony", "KYT123");

// console.log(objTV1.serie);

// let objTV2 = new Television(987654321, "JVC", "kkk", 1250);
// console.log(objTV2.serie);

// objTV1.prender();
// objTV2.prender();

// console.log(objTV2.precio);

// objTV1.garantia = false;

// console.log(objTV1.garantia);

// objTV1.setStock(99)
// console.log(objTV1.getStock());
