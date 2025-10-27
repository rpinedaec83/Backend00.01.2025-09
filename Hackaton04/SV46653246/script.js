
// 1. Crea una función que retorne la suma de dos números.

function sumar(a, b) {
  return a + b;
}


let resultado = sumar(5, 3);
console.log("La suma es:", resultado); 

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}


let resultado2 = potencia(2, 3);
console.log("La potencia es:", resultado); 

// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function sumOfCubes(...numeros) {
  return numeros.reduce((suma, num) => suma + Math.pow(num, 3), 0);
}


let resultado3 = sumOfCubes(1, 5, 9);
console.log("La suma de los cubos es:", resultado3); 

// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
// triArea(3, 2) => 3

function triArea(base, altura) {
  return (base * altura) / 2;
}


console.log(triArea(3, 2)); 

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4


function calculator(num1, operacion, num2) {
  switch (operacion) {
    case "+":   
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
    case "X":
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: división por cero";
    case "%":
      return num2 !== 0 ? num1 % num2 : "Error: módulo por cero";
    default:
      return "El parámetro no es reconocido";
  }
}

console.log(calculator(2, "+", 2)); 
console.log(calculator(10, "x", 3)); 
console.log(calculator(10, "/", 10)); 
console.log(calculator(5, "?", 5)); 

// PREGUNTAS

// -  ¿Cómo defines una función?

// Una función es un bloque de código reutilizable que realiza una tarea específica. Puedes definirla de varias formas, pero aquí te muestro las más comunes

// -  ¿Hasta cuantos argumentos puedes declarar en una función?
// No hay un límite fijo en la cantidad de argumentos que puedes declarar en una función



// -----------EJERCICIOS DE GOOGLE

// 1.- Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33

const presentar = (nombre, apellido, edad) => `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;

console.log(presentar('sebastián', 'yabiku', 33));

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}


let resultado5 = potencia(2, 3);
console.log("La potencia es:", resultado); 

//3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

function tipoDe(valor) {
    if (valor === null) return 'null';
    if (Array.isArray(valor)) return 'array';
    if (typeof valor === 'number' && Number.isNaN(valor)) return 'NaN';
    if (valor instanceof Date) return 'date';
    if (valor instanceof RegExp) return 'regexp';
    return typeof valor;
}

console.log(tipoDe('hola'));         // "string"
console.log(tipoDe(42));             // "number"
console.log(tipoDe(true));           // "boolean"
console.log(tipoDe(undefined));      // "undefined"
console.log(tipoDe(null));           // "null"
console.log(tipoDe([1, 2, 3]));      // "array"
console.log(tipoDe({ a: 1 }));       // "object"
console.log(tipoDe(() => {}));       // "function"
console.log(tipoDe(Symbol('s')));    // "symbol"
console.log(tipoDe(10n));            // "bigint"
console.log(tipoDe(NaN));            // "NaN"
console.log(tipoDe(new Date()));     // "date"
console.log(tipoDe(/abc/));          // "regexp"

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function sumarTodos(...numeros) {
    return numeros.reduce((suma2, n) => suma2 + n, 0);
}

console.log(sumarTodos(1, 2, 3,4,5));          


// 5.Crear una función que reciba un array de valores y filtre los valores que no son string

const filtrarStrings = (valores) => {
  return valores.filter(valor => typeof valor === "string");
};

const datos = [42, "hola", true, "mundo", null, "JavaScript", 3.14];
const soloStrings = filtrarStrings(datos);

console.log(soloStrings); 


// 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden. minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

const minMax = (numeros) => {
  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);
  return [minimo, maximo];
};

console.log(minMax([1, 2, 3, 4, 5])); 
console.log(minMax([10, -3, 7, 22])); 

// 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono. formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const formatPhoneNumber = (numeros) => {
  if (numeros.length !== 10 || !numeros.every(n => typeof n === "number" && n >= 0 && n <= 9)) {
    return "Entrada inválida";
  }

  const [a, b, c, d, e, f, g, h, i, j] = numeros;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
};

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// ➞ "(123) 456-7890"

// 8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno. findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]


const findLargestNums = (matriz) => {
  return matriz.map(subarray => Math.max(...subarray));
};
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));
// ➞ [7, 90, 2]




// 9.Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.

const charIndex = (palabra, caracter) => {
  const primero = palabra.indexOf(caracter);
  const ultimo = palabra.lastIndexOf(caracter);

  return primero === -1 ? null : [primero, ultimo];
};

console.log(charIndex("hello", "e"));         
console.log(charIndex("circumlocution", "c")); 
console.log(charIndex("javascript", "z"));     




// 10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

const toArray = (objeto) => Object.entries(objeto);
console.log(toArray({ a: 1, b: 2 }));




// 11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

const getBudgets = (personas) => {
  return personas.reduce((total, persona) => total + persona.budget, 0);
};

const datos7 = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 }
];

console.log(getBudgets(datos7)); // ➞ 65700



// 12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

const getStudentNames = (estudiantes) => {
  return estudiantes.map(est => est.name);
};

const lista = [
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
];

console.log(getStudentNames(lista));



// 13. Escriba una función que convierta un objeto en una matriz de claves y valores.

const objectToArray = (objeto) => {
  return Object.entries(objeto);
};

console.log(objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}));



// 14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.

const squaresSum = (n) => {
  let suma7 = 0;
  for (let i = 1; i <= n; i++) {
    suma7 += i * i;
  }
  return suma7;
};

console.log(squaresSum(3)); 




// 15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

const multiplyByLength = (array) => {
  const longitud = array.length;
  return array.map(valor => valor * longitud);
};

console.log(multiplyByLength([2, 3, 1, 0]));




// 16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero

const countdown = (n) => {
  const resultado = [];
  for (let i = n; i >= 0; i--) {
    resultado.push(i);
  }
  return resultado;
};

console.log(countdown(5));
// ➞ [5, 4, 3, 2, 1, 0]





// 17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

const diffMaxMin = (numeros) => {
  const max = Math.max(...numeros);
  const min = Math.min(...numeros);
  return max - min;
};

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));
// ➞ 82
// 32 - (-50) = 82





// 18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

const filterList = (lista) => {
  return lista.filter(valor => typeof valor === "number" && Number.isInteger(valor));
};

console.log(filterList([1, 2, 3, "x", "y", 10]));
// ➞ [1, 2, 3, 10]





// 19.Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.

const repeat = (elemento, veces) => {
  return Array(veces).fill(elemento);
};

console.log(repeat(13, 5));
// ➞ [13, 13, 13, 13, 13]



// 20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

String.prototype.vreplace = function(vocal) {
  return this.replace(/[aeiou]/gi, vocal);
};

console.log("apples and bananas".vreplace("u"));




// 21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

const findNemo = (frase) => {
  const palabras = frase.split(" ");
  const posicion = palabras.indexOf("Nemo");

  return `I found Nemo at ${posicion + 1}!`;
};

console.log(findNemo("I am finding Nemo !"));
// ➞ "I found Nemo at 4!"



// 22.Cree una función que capitalice la última letra de cada palabra.

const capLast = (texto) => {
  return texto
    .split(" ")
    .map(palabra => {
      const longitud = palabra.length;
      return longitud > 0
        ? palabra.slice(0, longitud - 1) + palabra.charAt(longitud - 1).toUpperCase()
        : "";
    })
    .join(" ");
};

console.log(capLast("hello"));                  // ➞ "hellO"
