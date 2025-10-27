function sum(a, b) {
  //1. Crea una función que retorne la suma de dos números.

  return a + b;
}

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

const sumOfCubes = (...num) => {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total = total + Math.pow(num[i], 3);
  }

  return total;
};

/*
5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
 */
// switch

//segunda parte

//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const typeDefinition = (valor) => typeof valor;

//Crear una función que reciba un array de valores y filtre los valores que no son string

const filterArray = (arr) => {
  const result = arr.filter((valor) => typeof valor != "string");

  return result;
};

/*

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

/*

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
/*
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
function main() {
  const result = sum(5, 3);
  console.log("ejercicio 1: result", result);

  const result2 = sumOfCubes(1, 5, 9);

  console.log("------------------");
  console.log(`valores enviados:1,5,9 \n result:`, result2);

  console.log("--------Segunda parte----------");

  console.log("--------ejercicio 3----------");
  console.log(
    "Tipo de valor entregado:",
    typeDefinition({
      nombre: "jose",
    })
  );
  console.log("--------ejercicio 5----------");

  const result5 = filterArray([1, "jose", 2, "pedro", true, "lucia"]);
  console.log(
    `valores enviados:[1, "jose", 2, "pedro", true, "lucia"] \n result:`,
    result5
  );

  console.log("--------ejercicio 7----------");

  console.log(
    `valores enviados:([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])\n result`,
    formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
  );
  console.log("--------ejercicio 9----------");
  console.log(
    `valores enviados:("circumlocution", "c") \n result:`,
    charIndex("circumlocution", "c")
  );
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
}

main();
