console.log("Inicio de la Aplicacion");

function suma(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    console.log(resultado);
    return resultado;
};


let primeraRestuesta =  suma(55,100);
//alert(primeraRestuesta);
let segundaRespuesta =  suma(77,99);
//alert(segundaRespuesta);

function saludo(nombre = 'Anonimo'){
    alert(`Hola ${nombre}`);
};

//saludo()

let clima = function(ciudad = 'Lima'){
    console.log(`Este es el clima en la ciudad de ${ciudad}`);
};
clima("Quito");

let multiplicacion = (a,b)=>a*b;


console.log(multiplicacion(33,44));

let numero =1;
function contar(){
    
    return numero++;
}


console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());

function mostrarUsuario({nombre, apellido}){
    return `Hola ${nombre} ${apellido}`
}

console.log(mostrarUsuario({nombre:"Roberto", apellido:"Pineda"}));

function operar(a, b, fn){
    return fn(a,b);
}


const resultado = operar(55,42, (x,y)=>x/y);

console.log(resultado)
