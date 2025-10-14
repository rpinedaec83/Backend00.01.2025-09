//console.log("Inicio de la applicacion");
/*
document.getElementById("btnClick01").addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Otro Boton desde el archivo js")
})
*/

var primerNumero = 55;
console.log(primerNumero);
primerNumero = 88;
console.log(primerNumero);
primerNumero = "ochenta y ocho";
console.log(primerNumero);

//Number

//Strings 

//Bool

console.log(typeof(primerNumero));

var primerNumero = 88;
console.log(typeof(primerNumero));

let segundoNumero = 88;
let tercerNumero = 33;
{
    let segundoNumero = 99;
    let tercerNumero = 66;
    console.log(segundoNumero + tercerNumero)
}

console.log(segundoNumero);

const PI = 3.14159;

//PI = 3.15;

let nombre = "Roberto David"
let apellidos = 'Pineda Lopez';
console.log(apellidos)

let respuesta = `Hola 
me 
llamo 
${nombre} ${apellidos}`;


let otraRespuesta = `Esta es la suma : ${segundoNumero + tercerNumero}`

console.log(otraRespuesta)

console.log(apellidos[7])

let fecha= '      2025-10-13      ';
fecha = fecha.trim();
let año = fecha.substring(0,4);
let mes = fecha.substring(5, 7)
let dia = fecha.substring(8, 10)
console.log(dia) 

let dato = segundoNumero.toString().padStart(10,'*')
console.log(dato)

let text = "Please visit Microsoft!, Microsoft, Microsoft";
let newText = text.replace("Microsoft", "W3Schools");

console.log(newText);

let text1 = "Please visit Microsoft!, Microsoft, Microsoft";
let newText1 = text1.replaceAll("Microsoft", "W3Schools");

console.log(newText1);