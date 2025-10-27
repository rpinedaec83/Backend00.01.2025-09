const readline = require("readline");

//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado
// “Hola mi nombre es sebastián yabiku y mi edad 33”
// 1 Suma de dos números
const suma = (a, b) => a + b;

// 2 Potencia de un número
const potencia = (base, exp) => base ** exp;

// 4 Área de un triángulo
const triArea = (base, altura) => (base * altura) / 2;

// 5Calculadora simple
const calculator = (num1, operacion, num2) => {
    switch(operacion) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case 'x': case '*': return num1 * num2;
    case '/': return num1 / num2;
    case '%': return num1 % num2;
    default: return "El parámetro no es reconocido";
    }
};
const saludo = ( nombre, apellido, edad )=>{
    return "hola mi nombre es " + nombre + apellido + " y mi edad es " + edad;
}; 
//Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

const cubos = (num1, num2, num3) =>{
    let suma = 0;
    suma = (num1 **3)+(num2**3)+(num3**3);
    return suma;
}
//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const tipoDato = (dato)=>{
    return typeof dato;
}
//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumaParametros=(...valores)=>{
    let total = 0;
    for(let i =0; i < valores.length; i++){total+=valores[i];}
    return total;
}
//Crear una función que reciba un array de valores y filtre los valores que no son string
const filtrar=(array) =>{
    return array.filter(valor => typeof valor === "string")
}
//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMAx=()=>{
    matriz = [[3,5,6],[4,8,9],[10,1,3]];
    nuevaMatriz = [[],[],[]];
    for (let i = 0; i < matriz.length; i++) {
        nuevaMatriz[i][1] = Math.max(...matriz[i])
        nuevaMatriz[i][0] = Math.min(...matriz[i])
    }
    return nuevaMatriz
}
//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
function formatPhoneNumber(numbers) {
  // numbers: array de 10 dígitos
    const areaCode = numbers.slice(0, 3).join('');   // primeros 3 dígitos
    const firstPart = numbers.slice(3, 6).join('');  // siguientes 3 dígitos
    const secondPart = numbers.slice(6, 10).join(''); // últimos 4 dígitos

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

/*Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.*/

const charIndex = (word, char) =>{ 
    [word.indexOf(char), word.lastIndexOf(char)];
}
/*Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]*/
const toArray = obj => Object.entries(obj);

/*Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas. */
const getBudgets = ()=>{
    let matriz1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }];
    let suma =0;
    for (let i = 0; i < matriz1.length; i++) {
        suma += matriz1[i].budget
    }
    return suma;
}
// Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

const getStudentsNames =()=>{
    let matriz = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }];
    let matriz2 = [];
    for (let i = 0; i < matriz.length; i++) {
        matriz2[i] = matriz[i].name;
    }return matriz2;
}
//Escriba una función que convierta un objeto en una matriz de claves y valores.
const objectToArray= ()=>{
    let objeto1 ={
        dislikes: 3,
        followers: 10,
        likes: 2,};
        return Object.entries(objeto1);
}

//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
const squaresSum=(cantidad)=>{
    let sum = 0;
    for (let i = 1; i <= cantidad; i++) {
        sum+= i**2;
    }
    return sum;
}

//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
const multiplyByLength=(multiplicador)=>{
    let arreglo = [2, 3, 1, 0];
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i]= arreglo[i]*multiplicador;
    }return arreglo;
}
//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
const countdown = (num) =>{
    arreglo=[];
    for (let i = num; i >= 0; i--) {
        arreglo.push(i);
    }return arreglo;
}

//  Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
const diffMaxMin = () => {
    const arr = [10, 4, 1, 4, -10, -50, 32, 21];
    return Math.max(...arr) - Math.min(...arr);
};

//  Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
const filterList = () => {
    const arr = [1, 2, 3, "x", "y", 10];
    return arr.filter(e => typeof e === "number");
};

//  Cree una función que tome dos argumentos (elemento, tiempos). Devuelve un arreglo con ese elemento repetido 'veces'.
const repeat = (elemento, veces) => Array(veces).fill(elemento);

//  Escriba una función, .vreplace() que extienda el prototipo de cadena reemplazando todas las vocales con una vocal especificada.
const vreplace = (texto, vocal) => {
    return texto.replace(/[aeiou]/g, vocal);
}

// Te dan una cadena de palabras. Debes encontrar la palabra "Nemo" y devolver una cadena indicando su posición.
const findNemo = () => {
    const str = "I am finding Nemo !";
    const palabras = str.split(" ");
    const posicion = palabras.indexOf("Nemo") + 1;
    return posicion > 0 ? `I found Nemo at ${posicion}!` : "Nemo not found";
};

//Cree una función que capitalice la última letra de cada palabra.
const capLast = () => {
    const str = "hHola soy Jhandel";
    return str
        .split(" ")
        .map(p => p.slice(0, -1) + p.slice(-1).toUpperCase())
        .join(" ");
};
function main(){
    console.log(saludo("Jhandel ", "Zavaleta", 19));
    console.log("La suma de cubnos es de " + cubos(1,5,9));
    console.log(tipoDato(123));
    console.log(sumaParametros(4,2,17,19,73,31))
    console.log(filtrar([1, "hola", true, "mundo", 42, "JS"]));
    console.log(minMAx());
    console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
    console.log(charIndex("hello", "l"));
    console.log(toArray({ a: 1, b: 2 })); 
    console.log("Suma de 3 + 5:", suma(3, 5));                 
    console.log("2 elevado a 3:", potencia(2, 3));             
    console.log("Área de triángulo 3 x 2:", triArea(3, 2));   
    console.log("Calculadora 2 + 2:", calculator(2, "+", 2));    
    console.log("Calculadora 5 x 3:", calculator(5, "x", 3));    
    console.log("Calculadora 5 ^ 3:", calculator(5, "^", 3));
    console.log("La suma de los presupeustos es: " + getBudgets())
    console.log("Los nombres en la nueva matriz son: " + getStudentsNames())
    console.log("objeto a areglo: "+  objectToArray());
    console.log("La suma de los n primeros numeros es:" + squaresSum(3));
    console.log("El arreglo multilpicado por 4 es de: " + multiplyByLength(4));
    console.log("El contador de numeros como arreglo es: " + countdown(5));
    console.log("Diferencia de menor y mayor numero: " + diffMaxMin());
    console.log("Filtrar la matriz: " + filterList());
    console.log("arreglo repetido n veces: " + repeat(5,5));
    console.log("Buscando a nemo:", findNemo());
    console.log("Volviendo la ultima letra como mauscula", capLast());
    console.log(vreplace("peras y manzanar con quesillo y miel", "u")); 

}
main();
