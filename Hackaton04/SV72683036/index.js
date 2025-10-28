// Primera parte 1-5

function sum(a, b) {
  //1. Crea una función que retorne la suma de dos números.

  return a + b;
}

//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function calcularPotencia(base, exponente) {
  return Math.pow(base, exponente);
}

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const sumOfCubes = (...num) => {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total = total + Math.pow(num[i], 3);
  }

  return total;
};

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function triArea(base, altura) {
  return (base * altura) / 2;
}

/*
5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
 */
// switch
function calculator(num1, operacion, num2) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: No se puede dividir por cero.";
      }
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return "El parámetro no es reconocido";
  }
}
//--------------------------->segunda parte<------------------------------
//1 Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const presentarDatos = (nombre, apellido, edad) => {
  return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
};
//2 crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
//(ejercicio 3 de la parte 1)

//3Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const typeDefinition = (valor) => typeof valor;

//4Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumarArgumentos = (...numeros) => {
  return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
};

//5Crear una función que reciba un array de valores y filtre los valores que no son string

const filterArray = (arr) => {
  const result = arr.filter((valor) => typeof valor != "string");

  return result;
};

//6 Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
function minMax(arr) {
  const minimo = Math.min(...arr);
  const maximo = Math.max(...arr);
  return [minimo, maximo];
}

/*
7
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
*/

function formatPhoneNumber(numbers = []) {
  if (numbers.length != 10) {
    return "El arreglo debe tener 10 elementos";
  }

  const first = numbers.slice(0, 3).join("");
  const second = numbers.slice(3, 6).join("");
  const third = numbers.slice(6, 10).join("");

  return `(${first}) ${second}-${third}`;
}
//8 Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function findLargestNums(arrDeArrays) {
  return arrDeArrays.map(function (subArrays) {
    return Math.max(...subArrays);
  });
}

/*9
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
*/

const charIndex = (word = "", char = "") => {
  const first = word.indexOf(char);
  const last = word.lastIndexOf(char);

  return [first, last];
};

/* 10
Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*/
function toArray(obj) {
  return Object.entries(obj);
}

/*11
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

*/

const getBudgets = (arr = []) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.budget,
    0
  );
};

/*12
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]

*/

function getStudentNames(estudiantes) {
  const nombres = estudiantes.map(function (estudiantes) {
    return estudiantes.name;
  });
  return nombres.sort();
}

/*13
Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
function objectToArray(obj) {
  return Object.entries(obj);
}

/*14
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/
function squaresSum(n) {
  let sumTotal = 0;
  for (let i = 1; i <= n; i++) {
    sumTotal += i * i;
  }
  return sumTotal;
}

/*15
Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/
function multiplyByLength(arr) {
  const length = arr.length;
  return arr.map(function (valor) {
    return valor * length;
  });
}

/*16
Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/
function countdown(n) {
  const resultado = [];
  for (let i = n; i >= n; i++) {
    resultado.push(i);
  }
  return resultado;
}

/*17
Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

*/
function diffMaxMin(arr) {
  const minimo = Math.min(...arr);
  const maximo = Math.max(...arr);
  return maximo - minimo;
}

/*18
Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/

function filterList(arr) {
  return arr.filter(function (elemento) {
    return typeof elemento === "number";
  });
}

/*19
Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/
function repeat(elemento, veces) {
  const resultado = [];
  for (let i = 0; i < veces; i++) {
    resultado.push(elemento);
  }
  return resultado;
}

/*20
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/

String.prototype.vreplace = function (nuevaVocal) {
  return this.replace(/[aeiou]/gi, nuevaVocal);
};

/*21
Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/
function findNemo(frase) {
  const palabras = frase.split(" ");
  const indiceNemo = palabras.findIndex(function (palabra) {
    return palabra === "Nemo";
  });
  if (indiceNemo !== -1) {
    const posicion = indiceNemo + 1;
    return `¡Encontré a Nemo en ${posicion}!`;
  } else {
    return "No pude encontrar a Nemo :(";
  }
}

/*22
Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"
*/
function capLast(frase) {
  const palabras = frase.split(" ");
  const palabrasCapitalizadas = palabras.map(function (palabra) {
    if (palabra.length === 0) {
      return palabra;
    }
    const inicio = palabra.slice(0, -1);
    const ultimaLetra = palabra.slice(-1).toUpperCase();
    return inicio + ultimaLetra;
  });
  return palabrasCapitalizadas.join(" ");
}

//------------------------------->mostrar resultados<-------------------------------------------
function main() {
  //primera parte
  // ejercicio1
  const result = sum(5, 3);
  console.log("ejercicio 1: result", result);

  //ejercicio 2
  const resultado2 = calcularPotencia(5, 2);
  console.log("b5 elevado a 2 es:", resultado2);

  //ejercicio3
  const result3 = sumOfCubes(1, 5, 9);

  console.log("------------------");
  console.log(`valores enviados:1,5,9 \n result:`, result3);

  //ejercicio4
  const resultado4 = triArea(7, 4);
  console.log("triArea(7, 4) = ", resultado4);

  //ejercico 5
  console.log(`calculator(2, "+", 2) ➞ ${calculator(2, "+", 2)}`);
  console.log(`calculator(5, "x", 3) ➞ ${calculator(5, "x", 3)}`);
  console.log(`calculator(10, "/", 2) ➞ ${calculator(10, "/", 2)}`);

  //segunda parte
  console.log("--------Segunda parte----------");

  console.log("--------ejercicio 1----------");

  const resultado1 = presentarDatos("Kevin", "Melgarejo", 21);
  console.log(resultado1);

  console.log("--------ejercicio 3----------");
  console.log(
    "Tipo de valor entregado:",
    typeDefinition({
      nombre: "jose",
    })
  );

  console.log("--------ejercicio 4----------");
  const result4 = sumarArgumentos(1, 2, 3, 4, 5);
  console.log(`sumarArgumentos(1, 2, 3, 4, 5) ➞ ${result4}`);

  console.log("--------ejercicio 5----------");

  const result5 = filterArray([1, "jose", 2, "pedro", true, "lucia"]);
  console.log(
    `valores enviados:[1, "jose", 2, "pedro", true, "lucia"] \n result:`,
    result5
  );

  console.log("--------ejercicio 6----------");
  const arrayNumeros = [50, 10, 80, 5];
  const resultado = minMaxTradicional(arrayNumeros);
  console.log(`Minimo y maximo array dado :([50, 10, 80, 5]) ➞ [${resultado}]`);

  console.log("--------ejercicio 7----------");

  console.log(
    `valores enviados:([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])\n result`,
    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  );

  console.log("--------ejercicio 8----------");
  const resultado8 = findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ]);
  console.log(
    `findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [${resultado8}]`
  );

  console.log("--------ejercicio 9----------");
  console.log(
    `valores enviados:("circumlocution", "c") \n result:`,
    charIndex("circumlocution", "c")
  );

  console.log("--------ejercicio 10----------");
  const objeto1 = { a: 1, b: 2 };
  const resultado10 = toArray(objeto1);
  console.log(`toArray({ a: 1, b: 2 }) ➞ `);
  console.log(resultado10);

  console.log("--------ejercicio 11----------");

  console.log(
    `valores enviados:
        [
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve",  age: 32, budget: 40000 },
        { name: "Martin",  age: 16, budget: 2700 }
      ]
        \n result:`,
    getBudgets([
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve", age: 32, budget: 40000 },
      { name: "Martin", age: 16, budget: 2700 },
    ])
  );
  console.log("--------ejercicio 12----------");
  const listaDeEstudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" },
    { name: "Becky" },
  ];
  const resultado12 = getStudentNames(listaDeEstudiantes);
  console.log(`getStudentNames([...]) ➞ [${resultado12.join(", ")}]`);

  console.log("--------ejercicio 13----------");
  const datosRedes = {
    likes: 2,
    dislikes: 3,
    followers: 10,
  };
  const resultado13 = objectToArray(datosRedes);
  console.log("toArray(datosRedes) ➞ ");
  console.log(resultado13);

  console.log("--------ejercicio 14----------");
  const resultado14 = squaresSum(3);
  console.log(`squaresSum(3) ➞ ${resultado14}`);

  console.log("--------ejercicio 15----------");
  const resultado15 = multiplyByLength([2, 3, 1, 0]);
  console.log(`multiplyByLength([2, 3, 1, 0]) ➞ [${resultado15.join(", ")}]`);

  console.log("--------ejercicio 16----------");
  const resultado16 = countdown(5);
  console.log(`countdown(5) ➞ [${resultado16.join(", ")}]`);

  console.log("--------ejercicio 17----------");
  const array1 = [10, 4, 1, 4, -10, -50, 32, 21];
  const resultado17 = diffMaxMin(array1);
  console.log(`diffMaxMin([${array1.join(", ")}]) ➞ ${resultado17}`);

  console.log("--------ejercicio 18----------");
  const lista1 = [1, 2, 3, "x", "y", 10];
  const resultado18 = filterList(lista1);
  console.log(
    `filterList([1, 2, 3, "x", "y", 10]) ➞ [${resultado18.join(", ")}]`
  );

  console.log("--------ejercicio 19----------");
  const resultado19 = repeat(13, 5);
  console.log(`repeat(13, 5) ➞ [${resultado19.join(", ")}]`);

  console.log("--------ejercicio 20----------");
  const cadena = "apples and bananas";
  const resultado20 = cadena.vreplace("u");
  console.log(`"${cadena}".vreplace("u") ➞ "${resultado20}"`);

  console.log("--------ejercicio 21----------");
  const resultado21 = findNemo("I am finding Nemo !");
  console.log(`findNemo("I am finding Nemo !") ➞ ${resultado21}`);

  console.log("--------ejercicio 22----------");
  const resultado22 = capLast("hello");
  console.log(`capLast("hello") ➞ "${resultado22}"`);
}

main();
