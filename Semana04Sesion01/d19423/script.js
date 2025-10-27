console.log("Inicio de la Aplicacion");

function suma(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
    console.log(resultado);
    return resultado;
};


let primeraRestuesta = suma(55, 100);
//alert(primeraRestuesta);
let segundaRespuesta = suma(77, 99);
//alert(segundaRespuesta);

function saludo(nombre = 'Anonimo') {
    alert(`Hola ${nombre}`);
};

//saludo()

let clima = function (ciudad = 'Lima') {
    console.log(`Este es el clima en la ciudad de ${ciudad}`);
};
clima();

let multiplicacion = (a, b) => a * b;


console.log(multiplicacion(33, 44));

let numero = 1;
function contar() {

    return numero++;
}


console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());

function mostrarUsuario({ nombre, apellido }) {
    return `Hola ${nombre} ${apellido}`
}

console.log(mostrarUsuario({ nombre: "Roberto", apellido: "Pineda" }));

function operar(a, b, fn) {
    return fn(a, b);
}


const resultado = operar(55, 42, (x, y) => x / y);

console.log(resultado)

function hanoi(n, from, aux, to) {
    if (n === 1) {
        console.log(`Mover disco de ${from} a ${to}`);
        return;
    }
    hanoi(n - 1, from, to, aux);
    console.log(`Mover disco de ${from} a ${to}`);
    hanoi(n - 1, aux, from, to);
}


hanoi(4, "A", "B", "C");

let arrNumeros = [1, 2, 3];
console.log(arrNumeros)
arrNumeros.push(4);
console.log(arrNumeros);

let arrNew = arrNumeros.map(n => n * 2);
console.log(arrNumeros);
console.log(arrNew);


for (let index = 0; index < arrNumeros.length; index++) {
    const element = arrNumeros[index];
    console.log(element);
};

arrNumeros.forEach(n => console.log(n));
let filtro = arrNumeros.filter(n => n > 2);
console.log(filtro);
let sumatoria = arrNumeros.reduce((acc, n) => acc + n);
console.log(sumatoria);

let objPersona = {
    nombre: "Roberto",
    apellido: "Pineda",
    edad: 42
};

console.log(objPersona.nombre);

let arrPersonas = [
    {
        nombre: "David",
        apellido: "Lopez",
        edad: 32
    },
    {
        nombre: "Roberto",
        apellido: "Pineda",
        edad: 42
    }, {
        nombre: "Deysi",
        apellido: "Chalan",
        edad: 17
    }
];

let arrMayores = arrPersonas.filter(p=>p.edad>18);
console.log(arrMayores)
let arrNombres = arrPersonas.map(p=>p.nombre);
console.log(arrNombres);
let sumEdad = arrPersonas.reduce((acc, p)=>acc+p.edad,0);

console.log(sumEdad);

let respuestaBDD = [
    {
        vendedor: "Roberto",
        monto: 500
    },
    {
        vendedor: "Roberto",
        monto: 3000
    },
    {
        vendedor: "David",
        monto: 1800
    },
    {
        vendedor: "David",
        monto: 900
    },
    {
        vendedor: "Deysi",
        monto: 5000
    },
    {
        vendedor: "Deysi",
        monto: 6000
    }
];

let arrResumen = respuestaBDD.reduce((acc, {vendedor, monto})=>{
    acc[vendedor] = (acc[vendedor] || 0) + monto;
    return acc;
},{});

console.log(arrResumen);

let ranking = Object.entries(arrResumen)
    .map(([vendedor, total])=>({vendedor, total}))
    .sort((a,b)=>b.total-a.total);

console.log(JSON.stringify(ranking));

const ventasImpuestos = respuestaBDD
    .filter(v=>v.monto>3000)
    .map(v=>({...v, impuesto: v.monto * 0.18}))
    .reduce((acc, v)=>acc + v.impuesto, 0);

console.log(ventasImpuestos);

