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
class Television {
    #stock = 0;
    constructor(serie,marca, modelo, precio=0 ){
        this.serie = serie;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.garantia = true;
    }

    getStock(){
        if(admin)
            return this.#stock;
    }

    setStock(newValue){
        if(admin)
            this.#stock = newValue;
    }


    prender(){
        console.log(`La TV de marca ${this.marca} se esta prendiendose`);
    }
}

let objTV1 = new Television(123456,"Sony", "KYT123");

console.log(objTV1.serie);

let objTV2 = new Television(987654321, "JVC", "kkk", 1250);
console.log(objTV2.serie);

objTV1.prender();
objTV2.prender();

console.log(objTV2.precio);

objTV1.garantia = false;

console.log(objTV1.garantia);

objTV1.setStock(99)
console.log(objTV1.getStock());
