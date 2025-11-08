// PREGUNTAS:  

// -  ¿Cómo defines una función?

// una función es un bloque de código reutilizable que realiza una tarea específica


// -  ¿Hasta cuantos argumentos puedes declarar en una función?

// no existe un limite de cantidad



function ejercicio01a(a, b) {
    // 1. Crea una función que retorne la suma de dos números.
    return a + b;
}
console.log('-> ejercicio01a')
console.log(ejercicio01a(7, 20))

function ejercicio02a(base, exponente) {
    // 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

    return base ** exponente;

}
console.log('-> ejercicio02a')
console.log(ejercicio02a(5, 2))

function ejercicio03a(...numeros) {
    // 3. Crea una función que tome números y devuelva la suma de sus cubos. ejercicio02(1, 5, 9) ➞ 855
    return numeros.reduce((suma, n) => suma + n ** 3, 0);

}

console.log('-> ejercicio03a')
console.log(ejercicio03a(1, 5, 9))

function ejercicio04a(base, altura) {
    //     4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
    // triArea(3, 2) ➞ 3

    return (base * altura) / 2

}

console.log('-> ejercicio04a')
console.log(ejercicio04a(5, 7));

function ejercicio05a(num1, operacion, num2) {
    //     5. Crea una función llamada ejercicio05a que recibe 3 parámetros, dos números y una operación matemática 
    // (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” ejercicio05a(2,"+", 2) ➞ 4

    switch (operacion) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";
        case "x":
            return num1 * num2;
        case "%":
            return num2 !== 0 ? num1 % num2 : "No se puede usar módulo con cero";
        default:
            return "El parámetro no es reconocido";
    }

}
console.log('-> ejercicio05a')
console.log(ejercicio05a(2, "+", 2));
console.log(ejercicio05a(10, "x", 3));
console.log(ejercicio05a(5, "/", 0));
console.log(ejercicio05a(7, "^", 2));

// 01) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const ejercicio01 = (nombre, apellido, edad) =>
    `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;

console.log('-> ejercicio01')
console.log(ejercicio01("sebastián", "yabiku", 33));

// 02) Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const ejercicio02 = (...numeros) =>
    numeros.reduce((suma, n) => suma + n ** 3, 0);

console.log('-> ejercicio02')
console.log(ejercicio02(1, 5, 9));

// 03) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const ejercicio03 = valor => {
    if (valor === null) return "null";
    if (Array.isArray(valor)) return "array";
    return typeof valor;
};

console.log('-> ejercicio03')
console.log(ejercicio03(123));
console.log(ejercicio03("Hola mundo"));
console.log(ejercicio03(true));
console.log(ejercicio03(undefined));
console.log(ejercicio03(null));
console.log(ejercicio03([1, 2, 3]));
console.log(ejercicio03({ nombre: "Jair" }));
console.log(ejercicio03(() => { }));
console.log(ejercicio03(Symbol("id")));
console.log(ejercicio03(BigInt(9007199254740991)));

// 04) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const ejercicio04 = (...numeros) =>
    numeros.reduce((suma, n) => suma + n, 0);

console.log('-> ejercicio04')
console.log(ejercicio04(1, 2, 3, 4));



// 05) Crear una función que reciba un array de valores y filtre los valores que no son string

const ejercicio05 = array => array.filter(valor => typeof valor === "string");

const datos = [42, "hola", true, "mundo", null, "JS"];
const soloStrings = ejercicio05(datos);
console.log('-> ejercicio05')
console.log(soloStrings);


// 06) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const ejercicio06 = numeros => [Math.min(...numeros), Math.max(...numeros)];

console.log('-> ejercicio06')
console.log(ejercicio06([1, 2, 3, 4, 5]));



// 07) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const ejercicio07 = numeros =>
    `(${numeros.slice(0, 3).join('')}) ${numeros.slice(3, 6).join('')}-${numeros.slice(6).join('')}`;

console.log('-> ejercicio07')
console.log(ejercicio07([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// 08) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const ejercicio08 = matriz => matriz.map(grupo => Math.max(...grupo));

console.log('-> ejercicio08')
console.log(ejercicio08([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


// 09) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

const ejercicio09 = (palabra, caracter) => [
    palabra.indexOf(caracter),
    palabra.lastIndexOf(caracter)
];

console.log('-> ejercicio09')
console.log(ejercicio09("hello", "l"));
console.log(ejercicio09("circumlocution", "c"));



// 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

const ejercicio10 = objeto => Object.entries(objeto);

console.log('-> ejercicio10')
console.log(ejercicio10({ a: 1, b: 2 }));


// 11) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

const ejercicio11 = personas =>
    personas.reduce((total, persona) => total + persona.budget, 0);

const datos01 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

console.log('-> ejercicio11')
console.log(ejercicio11(datos01));


// 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames([
//   { name: "Steve" },
//   { name: "Mike" },
//   { name: "John" }
// ]) ➞ ["Becky", "John", "Steve"]

const ejercicio12 = estudiantes => estudiantes.map(est => est.name);

const alumnos = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
];
console.log('-> ejercicio12')

console.log(ejercicio12(alumnos));



// 13) Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

const ejercicio13 = obj => Object.entries(obj);

console.log('-> ejercicio13')

console.log(ejercicio13({
    likes: 2,
    dislikes: 3,
    followers: 10
}));


// 14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

const ejercicio14 = n =>
    Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((suma, num) => suma + num, 0);

console.log('-> ejercicio14')

console.log(ejercicio14(3));


// 15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

const ejercicio15 = arr => arr.map(num => num * arr.length);

console.log('-> ejercicio15')

console.log(ejercicio15([2, 3, 1, 0]));


// 16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

const ejercicio16 = n => Array.from({ length: n + 1 }, (_, i) => n - i);

console.log('-> ejercicio16')

console.log(ejercicio16(5));


// 17) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

const ejercicio17 = arr => Math.max(...arr) - Math.min(...arr);

console.log('-> ejercicio17')

console.log(ejercicio17([10, 4, 1, 4, -10, -50, 32, 21]));


// 18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

const ejercicio18 = arr => arr.filter(item => Number.isInteger(item));

console.log('-> ejercicio18')

console.log(ejercicio18([1, 2, 3, "x", "y", 10]));



// 19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

const ejercicio19 = (elemento, veces) => Array(veces).fill(elemento);

console.log('-> ejercicio19')

console.log(ejercicio19(13, 5));



// 20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

String.prototype.vreplace = function (v) {
    return this.replace(/[aeiou]/g, v);
};

console.log('-> ejercicio20')

console.log("apples and bananas".vreplace("u"));

// 21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

const ejercicio21 = frase => {
    const palabras = frase.split(" ");
    const posicion = palabras.indexOf("Nemo");
    return posicion !== -1
        ? `I found Nemo at ${posicion + 1}!`
        : "I can't find Nemo!";
};

console.log('-> ejercicio21')


console.log(ejercicio21("I am finding Nemo !"));

console.log(ejercicio21("Where is he?"));

// 22) Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

const ejercicio22 = str =>
    str
        .split(" ")
        .map(palabra =>
            palabra.slice(0, -1) + palabra.slice(-1).toUpperCase()
        )
        .join(" ");

console.log('-> ejercicio22')


console.log(ejercicio22("hello")); 
