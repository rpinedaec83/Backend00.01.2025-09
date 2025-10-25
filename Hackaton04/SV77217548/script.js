console.log("Inicio de Hackathon04");

//1. Crea una función que retorne la suma de dos números.
function suma(primerNumero, segundoNumero){
    let resultado = primerNumero + segundoNumero;
    console.log("Suma:", resultado);
    return resultado;
};
suma(78, 83);

//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
function potencia(numero, exponente){
    let resultado = numero ** exponente;
    console.log("Potencia: ", resultado);
    return resultado;
};
potencia(2, 3);

//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
function sumOfCubes(...numeros){
    let arrCubos = numeros.map(n => n ** 3);
    let total = arrCubos.reduce((acumulado, n) => acumulado + n, 0);
    console.log("Suma de los cubos: ", total);
    return total;
};
sumOfCubes(1, 5, 9);

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
//triArea(3, 2) ➞ 3
const triArea = (base, altura) => {
    let area = (base * altura) / 2;
    console.log("Area del triangulo: ", area);
    return area;
};
triArea(3, 2);

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
function calculator(a, operador, b){
    let resultado;
    switch (operador) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "/":
            resultado = a / b;
            break;
        case "x":
        case "X":
        case "*":
            resultado = a * b;
        break;
        case "%":
            resultado = a % b;
        break;
        default:
            resultado = "El parametro no es reconocido";
    }
    console.log(`calculadora(${a},"${operador}",${b}) =>`, resultado);
    return resultado;
}
calculator(2, "+", 2);
calculator(10, "x", 5);
calculator(10, "%", 3);
calculator(7, "-", 2);
calculator(9, "/", 3);
calculator(8, "asd", 4);

//PREGUNTAS:  

/*-  ¿Cómo defines una función?
     Puedo definirla de 2 formas:
        1. Forma clasica:
        function nombreDeFuncion(parametro1, parametro2) { ... funcionalidad ... };
        2. Función como expresion:
        const nombreDeFuncion = function(parametro1, parametro2) => { ... funcionalidad ... }; 
        */


/*-  ¿Hasta cuantos argumentos puedes declarar en una función?
     No hay un limite definido, puedo declarar tantos argumentos como necesite, pero se ve poco legible si son demasiados,
     en esos casos mejoor podria usar arreglos u objetos para agrupar los datos.
     */




// Inicio de Reto 2:
console.log("Inicio del Reto 2 - Hackathon04");

//1.	Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
const presentacion = (nombre, apellido, edad) =>
    console.log("Ejercicio01:\n", `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);
presentacion("Rony", "Chang", 26);

//2.	Cree una función que tome números y devuelva la suma de sus cubos.
//sumOfCubes(1, 5, 9) ➞ 85543
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
const sumOfCubesReto = (...numeros) => {
    const arrCubos = numeros.map(n => n ** 3);
    const total = arrCubos.reduce((acumulado, n) => acumulado + n, 0);
    console.log("Ejercicio02:\n", "Suma de los cubos: ", total);
};
sumOfCubesReto(1, 5, 9);

//3.	Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
const tipoDeValor = (valor) =>{
    if (valor === null){
        console.log("Ejercicio03:\n", "Tipo de valor: null");
        return;
    };
    if (Array.isArray(valor)){
        console.log("Ejercicio03:\n", "Tipo de valor: array");
        return;
    };
    const tipoValor = typeof valor;
    console.log("Ejercicio03:\n", "Tipo de valor: ", tipoValor); 
}
tipoDeValor(undefined);
tipoDeValor(null);
tipoDeValor("hola");
tipoDeValor(7);
tipoDeValor(true);
tipoDeValor([1,2,3]);
tipoDeValor({a:2});
tipoDeValor((a,b)=>{a+b});
tipoDeValor(10n);
tipoDeValor(Symbol("s"));

//4.	Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
const sumarTodos = (...nums) => {
    const total = nums.reduce((acumulado, n) => acumulado + n, 0);
    console.log("Ejercicio04:\n", "Suma de todos los numeros: ", total);
}
sumarTodos(1,2,3,4,5);

//5.	Crear una función que reciba un array de valores y filtre los valores que no son string
const soloStrings = (arr) =>{
    const resultado = arr.filter(v => typeof v === "string");
    console.log("Ejercicio05:\n", "Solo strings: ", resultado);
}
soloStrings([1, "a", true, "b", null, "c", 10n, ["x","y"]]);

//6.	Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
const minMax = (arr) =>{
    const [minimo,maximo] = [Math.min(...arr), Math.max(...arr)];
    console.log("Ejercicio06:\n", "Min y Max: ", [minimo, maximo]);
}
minMax([1, 2, 3, 4, 5]);

//7.	Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
const formatPhoneNumber = (digits) => {
    const a = digits.slice(0,3).join("");
    const b = digits.slice(3,6).join("");
    const c = digits.slice(6).join("");
    console.log("Ejercicio07:\n",`(${a}) ${b}-${c}`);
}
formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

//8.	Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
const findLargestNums = (matriz) => {
    const matrizMaximos = matriz.map(sub => Math.max(...sub));
    console.log("Ejercicio08:\n", "Mayores de cada submatriz: ", matrizMaximos);
}
findLargestNums([[4,2,7,1],[20,70,40,90],[1,2,0]]);

//9.	Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
const charIndex = (palabra, char) => {
    const [first,last] = [palabra.indexOf(char),palabra.lastIndexOf(char)];
    console.log("Ejercicio09:\n", [first, last]);
};
charIndex("hello", "l");
charIndex("circumlocution", "c");

//10.	Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
const toArray = (obj) => {
    const convertidoMatriz = Object.entries(obj);
    console.log("Ejercicio10:\n", convertidoMatriz);
}
toArray({a:1, b:2});

//11.	Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
//getBudgets([
//  { name: "John", age: 21, budget: 23000 },
//  { name: "Steve",  age: 32, budget: 40000 },
//  { name: "Martin",  age: 16, budget: 2700 }
//]) ➞ 65700


//12.	Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//  { name: "Steve" },
//  { name: "Mike" },
//  { name: "John" }
//]) ➞ ["Becky", "John", "Steve"]


//13.	Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//  likes: 2,
//  dislikes: 3,
//  followers: 10
//}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


//14.	Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14


//15.	Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]



//16.	Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]


//17.	Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.


//18.	Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]



//19.	Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
//repeat(13, 5) ➞ [13, 13, 13, 13, 13]



//20.	Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//"apples and bananas".vreplace("u") ➞ "upplus und bununus"



//21.	Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"



//22.	Cree una función que capitalice la última letra de cada palabra.
//capLast("hello") ➞ "hellO"


