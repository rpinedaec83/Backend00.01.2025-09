//Seccion 1
const contenedor = document.getElementById('contenedor-botones');

for (let i = 1; i <= 5; i++) {
  const boton = document.createElement('button');
  boton.textContent = `Ejercicio ${i}`;
  boton.className = 'boton';
  boton.addEventListener('click', () => {
    
    const funcion = window[`btn${i}`];
        funcion();
    });
  contenedor.appendChild(boton);
}
//Seccion 2
const contenedor2 = document.getElementById('contenedor-botones-2');

for (let j = 1; j <= 22; j++) {
  const boton = document.createElement('button');
  boton.textContent = `Ejercicio ${j}`;
  boton.className = 'boton';
  boton.addEventListener('click', () => {

    const funcion = window[`btn2_${j}`];
        funcion();

  });
  contenedor2.appendChild(boton);
}

// Crea una función que retorne la suma de dos números.
function btn1 (a,b){
    a = parseInt(prompt('Ingresa un numero'));
    b = parseInt(prompt('Ingresa tu segundo digito'));
    return alert(`La suma de los numeros son ${a + b} `)
}
//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function btn2(base,exponente){
    base = parseFloat(prompt('Ingresa el número base'));
    exponente = parseFloat(prompt('Ingresa el exponente'));
    const resultado = Math.pow(base, exponente);
    alert(`${base} elevado a la ${exponente} es igual a ${resultado}`);
}
// Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function btn3(){
    let entrada = prompt('Ingresa varios números separados por comas (ejemplo: 1,5,9)');
    let numeros = entrada.split(',').map(num => parseFloat(num.trim()));
    let sumaCubos = numeros.reduce((acumulador, n) => acumulador + Math.pow(n, 3), 0);
    alert(`La suma de los cubos de [${numeros.join(', ')}] es ${sumaCubos}`);
}

// Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3
function btn4(){
    const base = parseFloat(prompt('Ingresa la base del triangulo:'));
    const altura = parseFloat(prompt('Ingresa la altura del triangulo:'));
    const area = (base * altura) / 2; 
    return alert(`El area del triangulo es ${area}`)
}

// Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
function calculator(num1,num2,operacion){
    switch (operacion) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case 'x':
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: división por cero';
        case '%': return num1 % num2;
        default: return 'El parámetro no es reconocido';
    }
}
function btn5() {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const operacion = prompt('Ingresa la operación (+, -, x, /, %):');    
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));


  const resultado = calculator(num1, num2,operacion);
  alert(`Resultado: ${resultado}`);
}
// //SECION 2
// Utilizando función arrow, crear una función que reciba como parámetros un nombre,
// apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián
// yabiku y mi edad 33”
const miNombre = (nombre,apellido,edad) => {
    return alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`)
}

function btn2_1 (){
    const nombre = prompt('Ingresa tu nombre');
    const apellido = prompt('Ingresa tu apellido');
    const edad = prompt('Ingresa tu edad');
    
    miNombre(nombre,apellido,edad);
}
// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
//  Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function btn2_2 () {
    btn3();
}

// Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los
// distintos tipos de js

function btn2_3(){

    function tipoDeValor(valor) {
        return typeof valor;
    }

    const ejemplos = [
        42,                 
        "Hola mundo",       
        true,               
        undefined,          
        null,               
        { nombre: "Ana" },  
        [1, 2, 3],
        function() {},      
        Symbol('id'),       
        10n                 
    ];

    let resultado = "Tipos de valores en JavaScript:\n\n";

    
    ejemplos.forEach(valor => {
        let valorComoTexto =
        typeof valor === "symbol" ? valor.toString() : String(valor);
        resultado += `${valorComoTexto} -> ${tipoDeValor(valor)}\n`;
    });

    alert(resultado);
} 

// Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros
// rest)

function btn2_4(){
    function sumar(...numeros) {
        return numeros.reduce((acum, n) => acum + n, 0);
    }

    let entrada = prompt("Ingresa números separados por comas:");
    let numeros = entrada.split(",").map(n => parseFloat(n.trim()));
    let resultado = sumar(...numeros);

    alert(`La suma de los números es: ${resultado}`);
}

//  Crear una función que reciba un array de valores y filtre los valores que no son string

function btn2_5(){
    
    function convertirTipo(valor) {
        if (valor === "true") return true;
        if (valor === "false") return false;
        if (!isNaN(valor) && valor.trim() !== "") return parseFloat(valor);
        if (valor === "null") return null;
        if (valor === "undefined") return undefined;
        return valor; 
    }

    function filtrarStrings(arr) {
        return arr.filter(valor => typeof valor === "string");
    }

    let entrada = prompt("Ingresa varios valores separados por comas (ej: 10, hola, true, mundo):");
    let elementos = entrada.split(",").map(v => convertirTipo(v.trim()));
    let resultado = filtrarStrings(elementos);

    alert(`Los valores que son strings son: [${resultado.join(", ")}]`);
}

//  Cree una función que tome una matriz de números y devuelva los números mínimos y
// máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

function btn2_6 () {

    function minMax(arr){
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return [min,max]
    }

    let entrada = prompt("Ingresa una lista de números separados por comas (ej: 1,2,3,4,5):");
    let numeros = entrada.split(",").map(n => parseFloat(n.trim()));

    let resultado = minMax(numeros)
    alert(`El número mínimo es ${resultado[0]} y el máximo es ${resultado[1]}`)
}

// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una
// cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
function btn2_7(){
    function formatPhoneNumber(numeros) {
        if (numeros.length !== 10 || numeros.some(n => isNaN(n) || n < 0 || n > 9)) {
        return "Debe ingresar exactamente 10 números entre 0 y 9.";
        }
        let parte1 = numeros.slice(0, 3).join("");
        let parte2 = numeros.slice(3, 6).join("");
        let parte3 = numeros.slice(6).join("");
        return `(${parte1}) ${parte2}-${parte3}`;
    }

    let entrada = prompt("Ingresa 10 números separados por comas (ej: 1,2,3,4,5,6,7,8,9,0):");
    let numeros = entrada.split(",").map(n => parseInt(n.trim()));

    let resultado = formatPhoneNumber(numeros);

    alert(resultado);
}

// Cree una función que tome una matriz de matrices con números. Devuelve una nueva
// matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function btn2_8(){
    function findLargestNums(matriz) {
        return matriz.map(subArray => Math.max(...subArray));
    }

    let entrada = prompt("Ingresa varias listas de números (ej: [4,2,7,1]; [20,70,40,90]; [1,2,0])");

    let grupos = entrada.split(";").map(grupo =>
        grupo.replace(/[\[\]]/g, "").split(",").map(n => parseFloat(n.trim()))
    );

    let resultado = findLargestNums(grupos);

    alert(`El número mayor de cada sublista es: [${resultado.join(", ")}]`);
}


// Dada una palabra, escriba una función que devuelva el primer índice y el último índice
// de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.


function btn2_9(){
    function charIndex(palabra, caracter) {
        let primero = palabra.indexOf(caracter);
        let ultimo = palabra.lastIndexOf(caracter);
        if (primero === -1) return "El carácter no se encuentra en la palabra.";
        return [primero, ultimo];
    }

    let palabra = prompt("Ingresa una palabra:");
    let caracter = prompt("Ingresa el carácter a buscar:");

    let resultado = charIndex(palabra, caracter);

    alert(`Resultado: ${Array.isArray(resultado) ? `[${resultado.join(", ")}]` : resultado}`);
}

// Escriba una función que convierta un objeto en una matriz, donde cada elemento
// representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function btn2_10(){

    function toArray(obj) {
        return Object.entries(obj);
    }

    let entrada = prompt('Ingresa un objeto en formato clave:valor separado por comas (ej: a:1, b:2):');

    let pares = entrada.split(",").map(par => par.trim().split(":"));
    let objeto = {};

    pares.forEach(([clave, valor]) => {
        objeto[clave] = isNaN(valor) ? valor : parseFloat(valor);
    });

    let resultado = toArray(objeto);

    alert(`El objeto convertido en matriz es: ${JSON.stringify(resultado)}`);
    
}

// Cree la función que toma una matriz con objetos y devuelve la suma de los
// presupuestos de las personas.
// getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve", age: 32, budget: 40000 },
//  { name: "Martin", age: 16, budget: 2700 }
// ]) ➞ 65700

function btn2_11(){

    function getBudgets(personas) {
        return personas.reduce((total, persona) => total + persona.budget, 0);
    }

    let entrada = prompt(
        'Ingresa los datos en formato nombre:edad:presupuesto separados por punto y coma.\nEjemplo:\nJohn:21:23000; Steve:32:40000; Martin:16:2700'
    );

    let personas = entrada.split(";").map(p => {
        let [nombre, edad, presupuesto] = p.trim().split(":");
        return {
        name: nombre.trim(),
        age: parseInt(edad.trim()),
        budget: parseFloat(presupuesto.trim())
        };
    });

    let resultado = getBudgets(personas);

    alert(`La suma total de los presupuestos es: ${resultado}`);
    
}

// Cree una función que tome una matriz de estudiantes y devuelva una matriz de
// nombres de estudiantes.
// getStudentNames([
//  { name: "Steve" },
//  { name: "Mike" },
//  { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

function btn2_12(){
    function getStudentNames(estudiantes) {
        return estudiantes.map(e => e.name);
    }

    let entrada = prompt(
        'Ingresa los nombres de los estudiantes separados por comas (ej: Steve, Mike, John):'
    );

    let estudiantes = entrada.split(",").map(nombre => ({ name: nombre.trim() }));

    let resultado = getStudentNames(estudiantes);

    alert(`Los nombres de los estudiantes son: [${resultado.join(", ")}]`);

}

// Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//  likes: 2,
//  dislikes: 3,
//  followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
function btn2_13(){
    function objectToArray(obj) {
        return Object.entries(obj);
    }

    let entrada = prompt('Ingresa un objeto en formato clave:valor separado por comas (ej: likes:2, dislikes:3, followers:10):');

    let pares = entrada.split(",").map(par => par.trim().split(":"));
    let objeto = {};

    pares.forEach(([clave, valor]) => {
        objeto[clave] = isNaN(valor) ? valor : parseFloat(valor);
    });

    let resultado = objectToArray(objeto);

    alert(`El objeto convertido en matriz es: ${JSON.stringify(resultado)}`);
}

// Cree una función donde, dado el número n, devuelva la suma de todos los números
// cuadrados incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function btn2_14(){
      function squaresSum(n) {
        let suma = 0;
        for (let i = 1; i <= n; i++) {
        suma += i * i;
        }
        return suma;
    }

    let n = parseInt(prompt("Ingresa un número:"));
    let resultado = squaresSum(n);

    alert(`La suma de los cuadrados hasta ${n} es: ${resultado}`);
}

// Cree una función para multiplicar todos los valores en una matriz por la cantidad de
// valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function btn2_15(){
      function multiplyByLength(arr) {
        return arr.map(num => num * arr.length);
    }

    let entrada = prompt("Ingresa una lista de números separados por comas (ej: 2,3,1,0):");
    let numeros = entrada.split(",").map(n => parseFloat(n.trim()));

    let resultado = multiplyByLength(numeros);

    alert(`El resultado es: [${resultado.join(", ")}]`);
}

// Cree una función que tome un número como argumento y devuelva una matriz de
// números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
function btn2_16(){
      function countdown(n) {
        let resultado = [];
        for (let i = n; i >= 0; i--) {
        resultado.push(i);
        }
        return resultado;
    }

    let n = parseInt(prompt("Ingresa un número:"));
    let resultado = countdown(n);

    alert(`Cuenta regresiva: [${resultado.join(", ")}]`);
}

//  Cree una función que tome una matriz y devuelva la diferencia entre los números más
// grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function btn2_17(){
     function diffMaxMin(arr) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);
        return max - min;
    }

    let entrada = prompt("Ingresa una lista de números separados por comas (ej: 10,4,1,4,-10,-50,32,21):");
    let numeros = entrada.split(",").map(n => parseFloat(n.trim()));

    let resultado = diffMaxMin(numeros);

    alert(`La diferencia entre el mayor y el menor es: ${resultado}`);
}

// Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que
// solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

function btn2_18(){
     function filterList(arr) {
        return arr.filter(valor => Number.isInteger(valor));
    }

    let entrada = prompt('Ingresa valores separados por comas (ej: 1,2,3,"x","y",10):');
    let elementos = entrada.split(",").map(v => {
        let valor = v.trim();
        if (!isNaN(valor) && valor !== "") return parseFloat(valor);
        return valor;
    });

    let resultado = filterList(elementos);

    alert(`Los valores enteros son: [${resultado.join(", ")}]`);
}

//  Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento
// (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento
// (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado
// en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function btn2_19(){
    function repeat(elemento, veces) {
        return Array(veces).fill(elemento);
    }

    let elemento = prompt("Ingresa el elemento a repetir:");
    let veces = parseInt(prompt("Ingresa cuántas veces deseas repetirlo:"));

    // Convierte a número si es posible
    elemento = isNaN(elemento) ? elemento : parseFloat(elemento);

    let resultado = repeat(elemento, veces);

    alert(`Resultado: [${resultado.join(", ")}]`);
}

//  Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando
// todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

function btn2_20(){
    String.prototype.vreplace = function(vocal) {
        return this.replace(/[aeiou]/gi, vocal);
    };

    let texto = prompt("Ingresa una frase (ej: apples and bananas):");
    let vocal = prompt("Ingresa la vocal por la que deseas reemplazar (a, e, i, o, u):");

    let resultado = texto.vreplace(vocal);

    alert(`Resultado: ${resultado}`);
}

// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una
// cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra
// nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function btn2_21(){
    function findNemo(frase) {
        let palabras = frase.split(" ");
        let indice = palabras.indexOf("Nemo");
        if (indice === -1) return "¡No encontré a Nemo!";
        return `¡Encontré a Nemo en la palabra número ${indice + 1}!`;
    }

    let frase = prompt('Ingresa una frase (ej: "I am finding Nemo !"):');
    let resultado = findNemo(frase);

    alert(resultado);
}
// Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"
function btn2_22(){
    function capLast(frase) {
        return frase
        .split(" ")
        .map(palabra => 
            palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()
        )
        .join(" ");
    }

    let frase = prompt('Ingresa una frase (ej: "hello world"):');
    let resultado = capLast(frase);

    alert(`Resultado: ${resultado}`);
}


