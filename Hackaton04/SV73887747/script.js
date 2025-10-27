//------------------------------------------------------------------
//--------------------Reto 1----------------------------------------
//------------------------------------------------------------------
function problema1(){
    //1. Crea una función que retorne la suma 
    // de dos números.
    function suma(num1,num2){
        num1 = Number.parseInt( prompt("Ingrese primer numero: "));
        num2 = Number.parseInt( prompt("Ingrese segundo numero: "));
        //return console.log(`La suma de ${num1} con ${num2} es ` + (num1+num2)) 
        return alert(`La suma de ${num1} con ${num2} es ` + (num1+num2));
    }
    suma();
}

function problema2(){
    //2. Crea una función que retorne la potencia 
    // de un número dado, esta función deberá recibir 
    // la potencia y el número a potenciar.
    function aLaPotenciaDe(potencia,numeroAPotenciar){
        potencia = Number.parseInt( prompt("Ingrese la potencia:"));
        numeroAPotenciar = Number.parseInt( prompt("Ingrese el numero a potenciar:"));
        let numeroPotenciado = Math.pow(numeroAPotenciar,potencia);
        alert(`El numero ${numeroAPotenciar} a la potencia de ${potencia} es `+numeroPotenciado);
    }
    aLaPotenciaDe();
}

function problema3(){
    //3. Crea una función que tome números y devuelva 
    // la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
    // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    let alCubo = (valor)=> Math.pow(valor,3);
    function sumOfCube(n1,n2,n3){
        n1=Number.parseInt( prompt("Ingrese el primer numero:"));
        n2=Number.parseInt( prompt("Ingrese el segundo numero:"));
        n3=Number.parseInt( prompt("Ingrese el tercer numero:"));
        let sumaDeN = alCubo(n1) + alCubo(n2) + alCubo(n3);
        alert(`La suma de los cubos de ${n1}, ${n2} y ${n3} es ${sumaDeN} .`);


    }
    sumOfCube();
}

function problema4(){
    //4. Escribe una función que tome la base y 
    // la altura de un triángulo y devuelva su 
    // área.
    // triArea(3, 2) ➞ 3

    function triArea(base,altura){
        base = Number.parseInt( prompt("Ingrese la base del triangulo:"));
        altura = Number.parseInt( prompt("Ingrese la altura del triangulo:"));
        let calcArea = (base*altura)/2;
        alert(`El area de un triangulo con base ${base} y altura ${altura} es ${calcArea}.`);
    }
    triArea();
}

function problema5(){
    //5. Crea una función llamada calculator que 
    // recibe 3 parámetros, dos números y una 
    // operación matemática (+,-,/,x,%), y si la 
    // operación no es correcta que envié un mensaje 
    // “El parámetro no es reconocido” 
    // calculator(2,"+", 2) ➞ 4
    function calculator(nu1,nu2,operacion){
        nu1=Number.parseInt( prompt("Ingrese el primer numero:"));
        nu2=Number.parseInt( prompt("Ingrese el segundo numero:"));
        operacion=prompt("Ingrese el caracter de la operacion ( + , - , / , x , % ):");
        let resultado=0;
        switch(operacion){
            case "+":
                resultado = nu1+nu2;
                break;
            case "-":
                resultado = nu1-nu2;
                break;
            case "/":
                resultado = nu1/nu2;
                break;
            case "x":
                resultado = nu1*nu2;
                break;
            case "%":
                resultado = nu1%nu2;
                break;
            default:
                alert(`El parámetro ${operacion} no es reconocido`);
                return;
        }
        if(resultado!==0){
            alert(`El resultado de ${nu1} ${operacion} ${nu2} es ${resultado}.`);
        }
    }
    calculator();
}

//------------------------------------------------------------------ 
//--------------------Reto 2----------------------------------------
//------------------------------------------------------------------
function R2problema1(){
    //1.Utilizando función arrow, crear una función que reciba como parámetros 
    // un nombre, apellido y edad y los retorne en un string concatenado 
    // “Hola mi nombre es sebastián yabiku y mi edad 33”
    let concatenar = (nombre,apellido,edad)=> alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);
    nombre = prompt("Ingrese su nombre:");
    apellido = prompt("Ingrese su apellido:");
    edad = Number.parseInt( prompt("Ingrese su edad:"));
    concatenar(nombre,apellido,edad);
}

function R2problema2(){
    //Cree una función que tome números y devuelva la suma de sus cubos.
    //sumOfCubes(1, 5, 9) ➞ 855
    // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    let alCubo = (valor)=> Math.pow(valor,3);
    let sumOfCube = (n1,n2,n3) => alert(`La suma de los cubos de ${n1}, ${n2} y ${n3} es ${sumaDeN} .`);
        n1=Number.parseInt( prompt("Ingrese el primer numero:"));
        n2=Number.parseInt( prompt("Ingrese el segundo numero:"));
        n3=Number.parseInt( prompt("Ingrese el tercer numero:"));
        let sumaDeN = alCubo(n1) + alCubo(n2) + alCubo(n3);
    sumOfCube(n1,n2,n3);
}

function R2problema3(){
    //3.Crear una funcion que me retorne el tipo de valor entregado, 
    // invocar la función para los distintos tipos de js.
    function detectarTipoDesdePrompt() {
        const entrada = prompt("Ingresa un valor:");
        let valor;

        if (entrada === "true") {
            valor = true;
        } else if (entrada === "false") {
            valor = false;
        } else if (entrada === "null") {
            valor = null;
        } else if (entrada.trim() === "") {
            valor = ""; // cadena vacía
        } else if (!isNaN(entrada)) {
            valor = Number(entrada);
        } else {
            valor = entrada;
        }

        return typeof valor;
    }

    alert(`El tipo es: ` + detectarTipoDesdePrompt());
}

function R2problema4(){
    //4.Crear una función que reciba n cantidad de argumentos y 
    // los sume ( utilizar parametros rest)
    const sumar = (...numeros) => {
        const resultado = numeros.reduce((total, num) => total + num, 0);
        alert("La suma es: " + resultado);
    };

    const entrada = prompt("Ingresa números separados por coma:");
    const valores = entrada.split(",").map(Number);

    sumar(...valores);
}

function R2problema5(){
    //Crear una función que reciba un array de valores y 
    // filtre los valores que no son string.
    const filtrarNoStrings = () => {
        const entrada = prompt("Ingresa valores separados por coma:");
        const valores = entrada.split(",").map(valor => {
        const limpio = valor.trim();
        if (limpio === "true") return true;
        if (limpio === "false") return false;
        if (limpio === "null") return null;
        if (!isNaN(limpio) && limpio !== "") return Number(limpio);
        return limpio;
    });
    const noStrings = valores.filter(v => typeof v !== "string");
    alert("Los valores que NO son string son: " + noStrings.join(", "));
    };

filtrarNoStrings();
}

function R2problema6(){
    //Cree una función que tome una matriz de números y devuelva los 
    // números mínimos y máximos, en ese orden.
    //minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
    const minMax = () => {
        const entrada = prompt("Ingresa números separados por coma:");
        const numeros = entrada.split(",").map(valor => Number(valor.trim())).filter(num => !isNaN(num));

        const minimo = Math.min(...numeros);
        const maximo = Math.max(...numeros);

        alert(`Mínimo y máximo: [ ${minimo} , ${maximo} ]`);
    };

    minMax();
}

function R2problema7(){
    //7.Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) 
    // y devuelva una cadena en forma de un número de teléfono.
    //formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
    const fotmatPhoneNumber = () => {
        const entrada = prompt("Ingrese 10 números entre 0 y 9, separados por coma:");
        const numero = entrada.split(",").map(valor => Number(valor.trim())).filter(valor=> Number.isInteger(valor) && valor>= 0 && valor<=9);
        
        if(numero.length !== 10){
            alert("Debes ingresar 10 numeros entre 0 y 9.");
            return;
        }
        const area = numero.slice(0,3).join("");
        const central = numero.slice(3,6).join("");
        const linea = numero.slice(6).join("");
        alert(`Numero de telefono: (${area}) ${central}-${linea}.`);
    }

    fotmatPhoneNumber();
}

function R2problema8(){
    //8.Cree una función que tome una matriz de matrices con números.
    // Devuelve una nueva matriz (única) con el mayor número de cada uno.
    //findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
    const findLargestNums = () => {
        const entrada = prompt("Ingresa varias filas de números.\nCada fila separada por salto de línea (\\n), y cada número separado por coma.\nEjemplo:\n4,2,7,1\n20,70,40,90\n1,2,0");
        const matriz = entrada.split("\n").map(fila =>fila.split(",").map(n => Number(n.trim())).filter(n => !isNaN(n)) );

        const mayores = matriz.map(subarray => Math.max(...subarray));

        alert(`Mayores por fila: [${mayores.join(", ")}]`);
    };
    findLargestNums();
}

function R2problema9(){
    //9.Dada una palabra, escriba una función que devuelva el primer índice 
    // y el último índice de un carácter.
    //charIndex("hello", "l") ➞ [2, 3]
    // The first "l" has index 2, the last "l" has index 3.
    //charIndex("circumlocution", "c") ➞ [0, 8]
    // The first "c" has index 0, the last "c" has index 8.

    const charIndex = () => {
        const palabra = prompt("Ingresa una palabra:");
        const caracter = prompt("Ingresa el carácter que deseas buscar:");
        const primero = palabra.indexOf(caracter);
        const ultimo = palabra.lastIndexOf(caracter);

        if (primero === -1) {
        alert(`El carácter "${caracter}" no se encuentra en la palabra "${palabra}".`);
        } else {
        alert(`Índices de "${caracter}" en "${palabra}": [${primero}, ${ultimo}]`);
        }
    };

charIndex();
}

function R2problema10(){
    //10.Escriba una función que convierta un objeto en una matriz, 
    // donde cada elemento representa un par clave-valor.
    //toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
    const toArray = () => {
        const entrada = prompt('Ingresa un objeto en formato JSON.\nEjemplo: {"a": 1, "b": 2}' );

        let objeto;
        try {
        objeto = JSON.parse(entrada);
        } catch (error) {
        alert(`Formato inválido. Asegúrate de usar comillas dobles y sintaxis JSON válida.`);
        return;
        }
        const resultado = Object.entries(objeto);
        alert(`Matriz de pares clave-valor: ${JSON.stringify(resultado)}`);
    };

toArray();
}

function R2problema11(){
    //11.Cree la función que toma una matriz con objetos y devuelve la 
    // suma de los presupuestos de las personas.
        //getBudgets([
        //{ name: "John", age: 21, budget: 23000 },
        //{ name: "Steve",  age: 32, budget: 40000 },
        //{ name: "Martin",  age: 16, budget: 2700 }
        //]) ➞ 65700

    const getBudgets = () => {
        const entrada = prompt(`Ingresa una matriz de objetos en formato JSON:
        Ejemplo: 
        [{"name": "John", "age": 21, "budget": 23000}, 
        {"name": "Steve", "age": 32, "budget": 40000}, 
        {"name": "Martin", "age": 16, "budget": 2700}]`);

        let personas;
        try {
            personas = JSON.parse(entrada);
        } catch (error) {
            alert(`Formato inválido. Asegúrate de usar comillas dobles y sintaxis JSON válida.`);
        return;
        }
        const total = personas.reduce((suma, persona) => suma + (persona.budget || 0), 0);
        alert(`La suma total de los presupuestos es: ${total}`);
    };

getBudgets();
}

function R2problema12(){
    //12. Cree una función que tome una matriz de estudiantes y 
    // devuelva una matriz de nombres de estudiantes.
    //getStudentNames(
    // [
    //{ name: "Steve" },
    // { name: "Mike" },
    // { name: "John" }
    //]) 
    // ➞ ["Becky", "John", "Steve"]

    let getStudentNames = ()=>{
        const entrada = prompt(`Ingrese una matriz de nimbres en formato JSON:
            Ejemplo:
            [
            {name: "Steve"},
            {name: "Mike},
            {name: "John"}
            ]`);
        let estudiantes;
        try{
            estudiantes = JSON.parse(entrada);
        }catch(error){
            alert(`Formato invalido. Asegurate de usar comillas dobles y sintaxis JSON valida.`);
        }
        const nombres = estudiantes.map(value =>value.name);
        alert(`Los nombres de los estudiantes son: ${nombres.join(", ")}`);
    };
getStudentNames();
}

function R2problema13(){
    //Escriba una función que convierta un objeto en una matriz 
    // de claves y valores.
    //objectToArray({
    //likes: 2,
    //dislikes: 3,
    //followers: 10
    //}) 
    //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

    const objectToArray = () => {
        const entrada = prompt(`Ingrese un objeto en formato JSON:
            Ejemplo:
            {"likes": 2, "dislikes": 3, "followers": 10}`);
            
        let objeto;
        try{
            objeto = JSON.parse(entrada);
        }catch(error){
            alert( `Formato invalido. Asegurese de usar comillas dobles y sintaxis JSON valida.`);
            return;
        }
        const resultado = Object.entries(objeto);
        alert(`La matriz de pares clave-valor: ${JSON.stringify(resultado)}.`);
    };
objectToArray();
}

function R2problema14(){
    //14. Cree una función donde, dado el número n, devuelva la suma
    // de todos los números cuadrados  incluyendo n.
    //squaresSum(3) ➞ 14
    // 1² + 2² + 3² =
    // 1 + 4 + 9 =
    // 14

    const alCuadrado = (x) => x*x;

    const squaresSum = () => {
        let entrada = Number.parseInt( prompt(`Ingrese un numero para sumar todo los cuadrados: `));
        if(isNaN(entrada)){
            alert(`Debe ingresar un numero.`);
            return;
        } 
        let suma=0;
        function sumaRecursiva(x){
            if (x ===0){
                return;
            }
            suma = suma + alCuadrado(x);
            sumaRecursiva(x-1);
        }
        sumaRecursiva(entrada);
        alert(`La suma de los cuadrados de ${entrada} es ${suma}.`);
        
    }
    squaresSum();
}

function R2problema15(){
    //Cree una función para multiplicar todos los valores 
    //en una matriz por la cantidad de valores en la 
    //matriz dada
    //multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

    const multiplyByLength = () =>{
        let entrada = prompt(`Ingrese una matriz de numero separados por coma:
            Ejemplo:
            (2, 3, 1, 0)
            => [8, 12, 4, 0] `);

        let arrayEntrada;
        try{
            arrayEntrada = entrada.split(",");
        }catch(error){
            alert(`Formato invalido. Asegurese de escribir los numero separados por comas.`);
        }
        const resultado = arrayEntrada.map(valor => valor*arrayEntrada.length);
        alert(`La nueva matriz es ${arrayEntrada} por ${arrayEntrada.length}: [${resultado}].`);
    }
multiplyByLength();
}

function R2problema16(){
    //16. Cree una función que tome un número como argumento 
    // y devuelva una matriz de números contando desde este 
    // número a cero.
    //countdown(5) ➞ [5, 4, 3, 2, 1, 0]

    const countdown = () =>{
        const entrada = Number.parseInt( prompt(`Ingrese un numero al cual llegar:`));
        if(isNaN(entrada)){
            alert(`Debe ingresar un numero.`);
            return;
        }
        let arrayCountdown = [];
        function contar(x){
            if(x===0){
                arrayCountdown.push(x);
                return arrayCountdown;
            }
            arrayCountdown.push(x);
            return contar(x-1);
        }
        contar(entrada);
        alert(`La cuenta regresiva desde ${entrada} es [${arrayCountdown}].`);
    };
    countdown();
}

function R2problema17(){
    //17. Cree una función que tome una matriz y devuelva 
    // la diferencia entre los números más grandes y más 
    // pequeños.
    //diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
    // Smallest number is -50, biggest is 32.

    const diffMaxMin = () => {
        const entrada = prompt(`Ingrese una matriz de numeros separados por coma:`);

        let arrayEntrada;
        try{
            arrayEntrada = entrada.split(",");
        }catch(error){
            alert( `Formato invalido. Debe ingresar numeros separados por coma.`);
            return;
        }

        let maxArrEntrada = Math.max(...arrayEntrada);
        let minArrEntrada = Math.min(...arrayEntrada);
        let resultado = maxArrEntrada - minArrEntrada;
        alert(`El menor numero es ${minArrEntrada} y el mayor es ${maxArrEntrada}, la diferencia entre ellos es: ${resultado}.`);
    }
    diffMaxMin();
}

function R2problema18(){
    //18. Cree una función que filtre las cadenas de una matriz y 
    // devuelva una nueva matriz que solo contenga enteros.
    //filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
    
      const filterList = () => {
        const entrada = prompt('Ingrese una matriz de cadenas con números, separados por coma:');

        let arrEntrada;
        try {
          arrEntrada = entrada.split(",");
        } catch (error) {
          alert("Formato inválido. Debe ingresarlos separados por coma.");
          return;
        }

        let filtrado = arrEntrada.filter(value => Number.isInteger(Number(value.trim())));
        alert(`La matriz [${arrEntrada}] filtrada sin string es: [${filtrado}].`);
    };
    filterList();
}

function R2problema19(){
    //19. Cree una función que tome dos argumentos (elemento, tiempos). 
    // El primer argumento (elemento) es el elemento que necesita repetirse, 
    // mientras que el segundo argumento (veces) es la cantidad de veces 
    // que se debe repetir el elemento. Devuelve el resultado en una matriz.
    //repeat(13, 5) ➞ [13, 13, 13, 13, 13]

    const elemento = prompt('Ingrese el elemento a repetir:');
    const veces = Number.parseInt(prompt('Ingrese cuántas veces desea repetirlo:'));

    if (isNaN(veces) || veces < 0) {
        alert('Debe ingresar un número válido mayor o igual a 0.');
        return;
    }

    function repeat(el, n) {
        if (n <= 0) {
        return [];
        }
        return [el].concat(repeat(el, n - 1));
    }

    const resultado = repeat(elemento, veces);
    alert(`Resultado: [${resultado}]`);
}

function R2problema20(){
    //20. Escriba una función, .vreplace () que extienda el prototipo de cadena
    // reemplazando todas las vocales en una cadena con una vocal especificada.
    //"apples and bananas".vreplace("u") ➞ "upplus und bununus"

    String.prototype.vreplace = function(vocal) {
        return this.replace(/[aeiou]/gi, vocal);
    };

    const texto = prompt('Ingrese una cadena para reemplazar sus vocales:');
    const nuevaVocal = prompt('Ingrese la vocal que desea usar para reemplazar (a, e, i, o, u):');

    if (!nuevaVocal || !/^[aeiouAEIOU]$/.test(nuevaVocal)) {
        alert(`Debe ingresar una sola vocal válida (a, e, i, o, u).`);
    return;
    }

    const resultado = texto.vreplace(nuevaVocal);
    alert(`Cadena modificada:\n\`${resultado}\``);

}

function R2problema21(){
    //21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y 
    // devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la 
    // palabra que encuentra nemo]!".
    //findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

    const frase = prompt('Ingrese una cadena de palabras:');

    function findNemo(texto) {
        const palabras = texto.split(' ');
        const posicion = palabras.indexOf('Nemo');

        if (posicion === -1) {
            return '¡No encontré a Nemo!';
        }

        return `¡Encontré a Nemo en la posición ${posicion + 1}!`;
    }

    const resultado = findNemo(frase);
    alert(resultado);
}

function R2problema22(){
    //22. Cree una función que capitalice la última letra de cada palabra.
    //capLast("hello") ➞ "hellO"

    const entrada = prompt('Ingrese una frase para capitalizar la última letra de cada palabra:');

    function capLast(frase) {
        const palabras = frase.split(' ');
        const resultado = palabras.map(palabra => {
        if (palabra.length === 0) return '';
            const ultima = palabra.slice(-1).toUpperCase();
            const resto = palabra.slice(0, -1);
            return resto + ultima;
        });
        return resultado.join(' ');
    }

    const salida = capLast(entrada);
    alert(`Resultado:\n\`${salida}\``);

}