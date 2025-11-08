const x = document.getElementById("soportado");
if (typeof(Storage) !== "undefined") {
  x.innerHTML = "Your browser supports Web storage!";
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}

// localStorage.setItem("carrito", "Habilitado");

// x.innerHTML = localStorage.getItem("carrito")

// //localStorage.removeItem("carrito")

// // sessionStorage.setItem("token","dfhsdjkhfaskjldh");
// x.innerHTML = sessionStorage.getItem("token");

let objDatos = {
    nombre: "Roberto",
    apellido: "Pineda",
    isSoltero: true,
    edad: 42,
    hobbies: [
        "aeromodelismo",
        "musica"
    ],
    padre: {
        nombre:"Rene"
    },
    madre:{
        nombre:"Miriam"
    }
}

let strJson = `{"nombre":"Roberto","apellido":"Pineda","isSoltero":true,"edad":42,"hobbies":["aeromodelismo","musica"],"padre":{"nombre":"Rene"},"madre":{"nombre":"Miriam"}}`


x.innerText = JSON.stringify(objDatos);

let objNuevoDato = JSON.parse(strJson);



console.log(objNuevoDato)

console.log(objNuevoDato.nombre)

let strArrObjeto= `[{"nombre":"Roberto","apellido":"Pineda","isSoltero":true,"edad":42,"hobbies":["aeromodelismo","musica"],"padre":{"nombre":"Rene"},"madre":{"nombre":"Miriam"}},{"nombre":"Roberto","apellido":"Pineda","isSoltero":true,"edad":42,"hobbies":["aeromodelismo","musica"],"padre":{"nombre":"Rene"},"madre":{"nombre":"Miriam"}},{"nombre":"Roberto","apellido":"Pineda","isSoltero":true,"edad":42,"hobbies":["aeromodelismo","musica"],"padre":{"nombre":"Rene"},"madre":{"nombre":"Miriam"}}]`;

let arrObjeto=JSON.parse(strArrObjeto);

arrObjeto.forEach(element => {
    console.log(element.apellido)
});

let arrDiv = document.getElementsByClassName("autenticado");
console.log(arrDiv);

let arrP = document.getElementsByName("inpotp");

let arrEtiqueta = document.getElementsByTagName("p")


console.log(arrP)
console.log(arrEtiqueta)

let primerDiv = document.getElementById("div1");
primerDiv.innerText = "Este es el nuevo texto";

let segundoDiv = document.getElementById("div2");
// segundoDiv.innerHTML = `<select>
// <option>Uno</option>
// <option>Dos</option>
// <option>Tres</option>
// <option>Cuatro</option>
// </select>`;

let newNodoP = document.createElement("p");
newNodoP.innerText = "Este es un nuevo p";

let imgNuevo = document.createElement("img");
imgNuevo.src = "https://plamoscale.com/images/dcampos/fulls/31.jpg";
imgNuevo.height=200;

segundoDiv.appendChild(newNodoP)

segundoDiv.appendChild(imgNuevo);

document.getElementById("div2").addEventListener("mouseleave",(e)=>{
    console.log("Salio de aqui")
})
