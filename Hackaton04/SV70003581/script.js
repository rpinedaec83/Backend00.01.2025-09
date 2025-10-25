// 1. Crear una función que retorne la suma de dos números.
async function ejercicio01a(){

    let valor1 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[0]} \n === Ingrese primer número ===`,"Por ejemplo: 123"); if (valor1 == "Salir"){return null;};  
    let valor2 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[0]} \n === Ingrese segundo número ===`,"Por ejemplo: 123"); if (valor2 == "Salir"){return null;};

    function sumarNumeros(num1=0, num2=0){
        return num1 + num2;
    }

    Swal.fire(`La suma de ${valor1} + ${valor2} es: ${sumarNumeros(valor1, valor2)}`);
}


// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
async function ejercicio02a(){
    
    let valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones01[1]} \n === Ingrese un número entero para base ===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};  
    let valor2 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones01[1]} \n === Ingrese un número entero para exponente ===`,"Por ejemplo: 3"); if (valor2 == "Salir"){return null;};
    
    function potenciarNumero(numBase=0, numExponente=0){
        return numBase ** numExponente;
    }
    Swal.fire(`${valor1} a la ${valor2} es: ${potenciarNumero(valor1, valor2)}`);
}
// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

async function ejercicio03a(){
    let valor1 = 1;
    let numIngresos = [];
    do{
        valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones01[2]} \n === Ingrese un número entero ó 0 para Salir===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};
        numIngresos.push(valor1);
    } while(valor1!==0)

        //console.log(numIngresos);

    function sumarCubos(...args){
        let total = 0;
        for (let i in args){
            total += args[i] ** 3;
        }
        return total;
    }

    Swal.fire(`Suma de cubos: ${sumarCubos(...numIngresos)}`);
}

// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
// triArea(3, 2) ➞ 3
async function ejercicio04a(){

    let valor1 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[3]} \n === Ingrese un número para base ===`,"Por ejemplo: 123"); if (valor1 == "Salir"){return null;};  
    let valor2 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[3]} \n === Ingrese un número para altura===`,"Por ejemplo: 123"); if (valor2 == "Salir"){return null;};

    function calcularArea(numBase=0, numAltura=0){
        return numBase * numAltura;
    }

    Swal.fire(`El área de un triángulo de ${valor1}cms de base y ${valor2}cms de altura es: ${calcularArea(valor1,valor2)}cms`);
}

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
// (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
    
async function ejercicio05a(){
    
    let valor1 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[4]} \n === Ingrese primer número ===`,"Por ejemplo: 123"); if (valor1 == "Salir"){return null;};  
    let valor2 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones01[4]} \n === Ingrese segundo número ===`,"Por ejemplo: 123"); if (valor2 == "Salir"){return null;};
    let valor3 = await obtenerString("Ingrese signo (+, -, /, x, %)",`${nombreFunciones01[4]} \n === Ingrese un signo para operar ===`, "Por ejemplo: +"); if(valor3 == "Salir"){return null};

    function calculator(num1=0, num2=0, strOperacion=""){
        switch(strOperacion){
            case "+":
                return num1 + num2;            
            case "-":
                return num1 - num2;
            case "/":
                return num1 / num2;
            case "x":
                return num1 * num2;
            case "%":
                return num1 % num2;
            default:
                console.log("El parámetro no es reconocido.");
                swal.fire("El parámetro no es reconocido.");
                return `Error: ${strOperacion} no es un signo matemático.`;
        }
    }

    swal.fire(`${valor1} ${valor3} ${valor2} = ${calculator(valor1,valor2,valor3)}`);
}
// 6. ¿Cómo defines una función?
async function ejercicio06a(){
    swal.fire(        
        {
            title: 'Definición de una función:',
            html: `<p style="font-size:18px;">Bloque de código reutilizable, puede consumir parámetros, hace una tarea específica y termina al retornar un valor.</p>
            <p style="font-size:16px; text-align:left;">
            function sumarValores01(parametro01 = 0, parametro02 = 0){ <br>
            &nbsp;&nbsp;&nbsp;&nbsp;return parametro01 + parametro02; <br>}</p>`
        }
    );
}

/* Función Declarada : 
// Tiene nombre (sumarNumeros01).
function sumarValores01(parametro01 = 0, parametro02 = 0){ 
    return parametro01 + parametro02;
};
console.log("Función declarada:");
console.log(typeof(sumarValores01(parametro01 = 2, parametro02 = 3)));
console.log(sumarValores01(parametro01 = 2, parametro02 = 3));


// Función Expresada : 
// Se almacena en una variable (Se declara dentro de una expresión)
// Es anónima, no tiene nombre.
let suma01 = function(parametro01 = 0, parametro02 = 0){ 
    return parametro01 + parametro02;
};
console.log("Función expresada:");
console.log(typeof(suma01(parametro01 = 2, parametro02 = 3)));
console.log(suma01(parametro01 = 2, parametro02 = 3));


// Función Flecha
let suma02 = (parametro01 = 0, parametro02 = 0) => parametro01 + parametro02;
console.log("Función flecha:");
console.log(typeof(suma02(parametro01 = 2, parametro02 = 3)));
console.log(suma02(parametro01 = 2, parametro02 = 3));


// Callback
function sumarValores02(parametro01 = 0, parametro02 = 0, funcionCallback){
    return funcionCallback(parametroCallback01 = parametro01, parametroCallback02 = parametro02);
}
console.log("Función callback:");
console.log(typeof(sumarValores02(parametro01 = 2, parametro02 = 3, (parametroCallback01, parametroCallback02) => parametroCallback01 + parametroCallback02)));
console.log(sumarValores02(parametro01 = 2, parametro02 = 3, (parametroCallback01, parametroCallback02) => parametroCallback01 + parametroCallback02));


// Función Recursiva
// Función que se llama a sí misma en su definición
// Permite dividir un problema grande en problemas más pequeños del mismo tipo
// hasta llegar a un caso tan simple que pueda resolverse directamente (caso base)
function calcularFactorial(parametro01 = 0){
    if(parametro01 === 1){ // Caso base
        return 1;
    }
    return parametro01 * calcularFactorial(parametro01 - 1); // Decrementa el parámetro para evitar bucle infinito
}
console.log("Función recursiva:");
console.log(typeof(calcularFactorial(parametro01 = 5)));
console.log(calcularFactorial(parametro01 = 5));

*/

// 7. ¿Hasta cuantos argumentos puedes declarar en una función?
async function ejercicio07a(){
    swal.fire(        
        {
            title: '¿Hasta cuantos argumentos puedes declarar en una función?',
            html: `<p style="font-size:18px;">Puede tener hasta 255 argumentos declarados, aunque también es posible crear funciones que acepten un número ilimitado de argumentos utilizando la sintaxis de parámetros (...args) como en el ejercicio 03.</p>`
        }
    );
}

// 1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

async function ejercicio01(){
    
    let saludo = (parametro01 = 0, parametro02 = 0, parametro03 = 0) => "Hola, mi nombre es " + parametro01 + " " + parametro02 + " y mi edad es " + parametro03;

    let valor1 = await obtenerString("Ingrese su nombre",`${nombreFunciones02[0]} \n === Ingrese su nombre ===`, "Por ejemplo: Juan"); if(valor1 == "Salir"){return null};
    let valor2 = await obtenerString("Ingrese su apellido",`${nombreFunciones02[0]} \n === Ingrese su apellido ===`, "Por ejemplo: Perez"); if(valor2 == "Salir"){return null};
    let valor3 = await obtenerNumber("Entero","Ingrese su edad",`${nombreFunciones02[0]} \n === Ingrese su edad ===`,"Por ejemplo: 28"); if (valor3 == "Salir"){return null;};

    Swal.fire(saludo(valor1, valor2, valor3));    
}

// 2. Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

async function ejercicio02(){
    let valor1 = 1;
    let numIngresos = [];
    do{
        valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones02[1]} \n === Ingrese un número entero ó 0 para Salir===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};
        numIngresos.push(valor1);
    } while(valor1!==0)

    function sumarCubos(...args){
        let total = 0;
        for (let i in args){
            total += args[i] ** 3;
        }
        return total;
    }

    Swal.fire(`Suma de cubos: ${sumarCubos(...numIngresos)}`);
}

// 3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

async function ejercicio03(){
    
    function mostrarTipoDato(valor1){

        if (valor1==="true" || valor1 === "false"){
            return "boolean"}
        if (valor1==="undefined"){
            return "undefined"}
        if (valor1==="null"){
            return "null"}
        
        if(!isNaN(valor1)){
            if(Number.isInteger(Number(valor1))){
                return "number integer";
            }
            return "number";       
        }
        return "string";
    }

    let valor1 = await obtenerString("Ingrese cualquier valor",`${nombreFunciones02[2]} \n === Ingrese cualquier valor ===`, "Por ejemplo: abc"); if(valor1 == "Salir"){return null};   
    Swal.fire(`El tipo de dato de ${valor1} es ${mostrarTipoDato(valor1)}. \n Nota: La toma de datos de usuario siempre retorna string`);
}

// 4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

async function ejercicio04(){

    let valor1 = 1;
    let numIngresos = [];
    do{
        valor1 = await obtenerNumber("General","Ingrese un número",`${nombreFunciones02[3]} \n === Ingrese un número ó 0 para Salir===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};
        numIngresos.push(valor1);
    } while(valor1!==0)

    function sumarNumeros(...args){
        let total = 0;
        for (let i in args){
            total += args[i];
        }
        return total;
    }

    Swal.fire(`La suma total es: ${sumarNumeros(...numIngresos)}`);

}

// 5. Crear una función que reciba un array de valores y filtre los valores que no son string

async function ejercicio05(){

    let valor1 = 1;
    let numIngresos = [];
    do{
        valor1 = await obtenerString("Ingrese cualquier valor",`${nombreFunciones02[4]} \n === Ingrese un valor ó 0 para Salir===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};
        numIngresos.push(valor1);
    } while(valor1!=="0")

    function filtrarTipos(...args){

        let cantBool = 0, cantUndefined = 0, cantNull = 0, cantNumber = 0, cantInteger = 0, cantString = 0;
        console.log(numIngresos);

        let i=0;
        for (i in args){
            console.log(args[2])
            if (args[i]==="true" || args[i] === "false"){                
                cantBool++;}else
            if (args[i]==="undefined"){                
                cantUndefined++;}else
            if (args[i]==="null"){                
                cantNull++;}else
            
            if(!isNaN(args[i])){
                if(Number.isInteger(Number(args[i]))){
                    cantInteger++;                    
                }
                cantNumber++;                
            }else{cantString++;}
            
        }

        Swal.fire(`Cant. Booleanos: ${cantBool}. \nCant. Undefined's: ${cantUndefined}. \nCant. Null's: ${cantNull}. \nCant. Núm.Enteros: ${cantInteger-1}. \nCant. Núm. Decimales: ${cantNumber-cantInteger}. \nCant. String's: ${cantString}. \n`);

    }

    filtrarTipos(...numIngresos);

}

// 6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

async function ejercicio06(){

    let valor1 = 1;
    let numIngresos = [];   

    do{
        valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones02[5]} \n === Ingrese un número entero ó 0 para Salir===`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;};
        numIngresos.push(valor1);
    } while(valor1!==0)
    
    numIngresos.pop();    

    function minMax(...arr) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return [min, max];
    }
    
    Swal.fire(`${minMax(...numIngresos)}`);
}

// 7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

async function ejercicio07(){

    let x
    let numIngresos = [];   

    for(x=0;x<10;x++){
        valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones02[6]} \n === Ingrese un número entero de un dígito`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;} if(valor1>9){return null;};
        numIngresos.push(valor1);
    }

    function crearTelefono(...args){
        let strFinal = "(";
        let i, j, k;
        for(i=0;i<3;i++){
            strFinal += args[i];
        }
        strFinal += ") ";
        for(j=3;j<6;j++){
            strFinal += args[j];
        }
        strFinal += "-";
        for(k=6;k<10;k++){
            strFinal += args[k];
        }


        return strFinal;
    }

    Swal.fire(crearTelefono(...numIngresos));
}

// 8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

async function ejercicio08(){
    
    let arrActual = [];
    let arrFinal = [];
    let numMatrizActual = 1;

    do{
        valor1 = await obtenerNumber("Entero","Ingrese un número entero",`${nombreFunciones02[7]} \n === Ingrese un número entero de un dígito para la Matriz ${numMatrizActual} ===\n - Presione -1 para terminar matriz actual y empezar con la siguiente -\n - Presione 0 para terminar y procesar datos -`,"Por ejemplo: 2"); if (valor1 == "Salir"){return null;}        
        if(valor1===-1){
            arrFinal.push(arrActual);
            arrActual = [];
            numMatrizActual++;
        }else if(valor1!==0){
            arrActual.push(valor1);    
        }
        
    } while (valor1!==0)    
    arrFinal.push(arrActual);

    for(i in arrFinal){
        numMax = arrFinal[i][0];
        //console.log(numMax);
        for(j in arrFinal[i]){
            if(arrFinal[i][j]>=numMax){
                numMax = arrFinal[i][j];
            }
            if(j == (arrFinal[i].length)-1){
                arrFinal[i] = [];
                arrFinal[i].push(numMax);
                //console.log(`Llego al final j con ${j} y metió ${numMax}`);
            }
        }
    }
    Swal.fire(`Arreglo final con valores máximos de cada matríz: ${arrFinal}`);   
}

// 9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞ [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

async function ejercicio09(){

    let valor1 = 1;

    function charIndex(palabra, caracter) {
    
        const primer = palabra.indexOf(caracter);    
        const ultimo = palabra.lastIndexOf(caracter);
        
        if (primer === -1) return []; // Si no hay caracter retorna -1

        return [primer, ultimo];
    }

    valor1 = await obtenerString("Ingrese una palabra con dos letras, vocales ó números repetidos.",`${nombreFunciones02[8]} \n === Ingrese una palabra que tenga al menos dos letras, vocales ó números repetidos.===`,"Por ejemplo: caracter"); if (valor1 == "Salir"){return null;};
    valor2 = await obtenerString("Ingrese un caracter.",`${nombreFunciones02[8]} \n === Ingrese una letra. vocal o número.===`,"Por ejemplo: a"); if (valor1 == "Salir"){return null;};
    resultado = charIndex(valor1,valor2);
       
    Swal.fire(`[${resultado.join(",")}]`);
 
}

// 10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
async function ejercicio10(){

    valor1 = await obtenerString("Ingrese un objeto",`${nombreFunciones02[9]} \n === Escriba elementos de un objeto.===`,"Por ejemplo: a: 1, b: 2"); if (valor1 == "Salir"){return null;};
    let strSinEspacio = valor1.replace(/\s+/g, '');

    function toArray(str) {
        return str.split(',').map(par => {
            let [clave, valor] = par.split(':');
            return [clave, Number(valor)];
        });
    }

    console.log(JSON.stringify(toArray(strSinEspacio)));    
    Swal.fire(toArray(strSinEspacio).join(","));
}

// 11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700


async function ejercicio11(){

    valor1 = await obtenerString("Ingrese una matriz con objetos",`${nombreFunciones02[10]} \n === Escriba una matriz con objetos.===`,'Por ejemplo: [{ "name": "John", "age": 21, "budget": 23000 },{ "name": "Steve",  "age": 32, "budget": 40000 },{ "name": "Martin",  "age": 16, "budget": 2700 }]'); if (valor1 == "Salir"){return null;};
    
    try {
        // Convertir el texto a un array real de objetos
        const datos = JSON.parse(valor1);

        // Validar que realmente sea un array
        if (!Array.isArray(datos)) {
            Swal.fire("Error", "Debe ingresar una matriz (array) de objetos", "error");
            return;
        }

        // Calcular la suma de los presupuestos
        const totalBudget = datos.reduce((suma, persona) => {
            // Verifica que cada objeto tenga 'budget'
            return suma + (typeof persona.budget === "number" ? persona.budget : 0);
        }, 0);

        // Mostrar el resultado
        Swal.fire("Resultado", `La suma total de los presupuestos es: ${totalBudget}`, "success");
        console.log("Total de presupuestos:", totalBudget);

    } catch (error) {
        // Si el JSON no es válido
        Swal.fire("Error", "El formato ingresado no es válido. Verifique las comillas o la sintaxis.", "error");
        console.error("Error al convertir JSON:", error);
    }
    
}

// 12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
// getStudentNames(
//                  [{ name: "Steve" },{ name: "Mike" },{ name: "John" }]
// ) ➞ ["Becky", "John", "Steve"]

async function ejercicio12(){

    valor1 = await obtenerString("Ingrese una matriz de objetos",`${nombreFunciones02[11]} \n === Escriba una matriz de objetos.===`,'Por ejemplo: [{ "name": "Steve" },{ "name": "Mike" },{ "name": "John" }]'); if (valor1 == "Salir"){return null;};


    try {
        // Convertir el texto JSON a un array real
        const datos = JSON.parse(valor1);

        // Verificar que sea un array
        if (!Array.isArray(datos)) {
            Swal.fire("Error", "Debe ingresar una matriz (array) de objetos", "error");
            return;
        }

        // Extraer los nombres de los objetos
        const nombres = datos.map(estudiante => estudiante.name);

        // Mostrar el resultado
        Swal.fire("Resultado", `Los nombres de los estudiantes son:<br><b>${nombres.join(", ")}</b>`, "success");
        console.log("Nombres obtenidos:", nombres);

    } catch (error) {
        // Capturar errores de formato
        Swal.fire("Error", "El formato ingresado no es válido. Verifique las comillas o la sintaxis.", "error");
        console.error("Error al convertir JSON:", error);
    }

}

// 13. Escriba una función que convierta un objeto en una matriz de claves y valores.
// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

async function ejercicio13() {
    
    const valor1 = await obtenerString("Ingrese un objeto",`${nombreFunciones02[12]} \n === Escriba un objeto con claves y valores.===`,'Por ejemplo: { "likes": 2, "dislikes": 3, "followers": 10 }');if (valor1 === "Salir") {console.log("Operación cancelada por el usuario."); return null;}

    try {
        // Convertir el texto JSON a un objeto real
        const datos = JSON.parse(valor1);

        // Verificar que sea un objeto y no un array
        if (Array.isArray(datos)) {
            Swal.fire("Error", "Debe ingresar un objeto, no una matriz (array).", "error");
            return;
        }

        // Convertir el objeto a una matriz de pares [clave, valor]
        const resultado = Object.entries(datos);

        // Mostrar el resultado
        Swal.fire("Resultado", `El objeto convertido es:<br><b>${JSON.stringify(resultado)}</b>`, "success");
        console.log("Objeto convertido a matriz:", resultado);

    } catch (error) {
        // Mostrar error si el formato no es válido
        Swal.fire("Error", "El formato ingresado no es válido. Verifique las comillas o la sintaxis.", "error");
        console.error("Error al convertir JSON:", error);
    }
}


// 14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// // 1² + 2² + 3² =
// // 1 + 4 + 9 =
// // 14

async function ejercicio14() {
    
    const valor1 = await obtenerNumber("Entero","Ingrese un número",`${nombreFunciones02[13]} \n === Escriba un número entero.===`, "Por ejemplo: 3"); if (valor1 === "Salir") {console.log("Operación cancelada por el usuario."); return null;}

    // Convertir la entrada a número
    const n = Number(valor1);

    // Verificar que la entrada sea un número válido
    if (isNaN(n) || n <= 0) {
        Swal.fire("Error", "Debe ingresar un número entero positivo.", "error");
        return;
    }

    // Calcular la suma de los cuadrados desde 1 hasta n
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }

    // Mostrar el resultado
    Swal.fire("Resultado", `La suma de cuadrados hasta ${n} es <b>${suma}</b>`, "success");
    console.log(`Suma de cuadrados hasta ${n}:`, suma);
}


// 15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

async function ejercicio15() {
    // Pedir al usuario que ingrese una matriz de números
    const valor1 = await obtenerString("Ingrese una matriz de números",`${nombreFunciones02[14]} \n === Escriba una matriz de números.===`,"Por ejemplo: [2, 3, 1, 0]");if (valor1 === "Salir") {console.log("Operación cancelada por el usuario.");return null;}

    // Convertir la cadena a un array
    let arr;
    try {
        arr = JSON.parse(valor1);
    } catch (error) {
        Swal.fire("Error", "Formato no válido. Ingrese una matriz válida, por ejemplo: [2, 3, 1, 0]", "error");
        return;
    }

    // Verificar que todos los elementos sean números
    if (!Array.isArray(arr) || !arr.every(num => typeof num === "number")) {
        Swal.fire("Error", "Todos los elementos deben ser números.", "error");
        return;
    }

    // Multiplicar cada valor por la longitud de la matriz
    const resultado = arr.map(num => num * arr.length);

    // Mostrar el resultado
    Swal.fire("Resultado", `La nueva matriz es: <b>[${resultado.join(", ")}]</b>`, "success");
    console.log("Resultado:", resultado);
}


// 16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

async function ejercicio16() {
    // Pedir al usuario que ingrese un número
    const valor1 = await obtenerString("Ingrese un número",`${nombreFunciones02[15]} \n === Escriba un número entero.===`,"Por ejemplo: 5");if (valor1 === "Salir") {console.log("Operación cancelada por el usuario.");return null;}

    // Convertir la entrada a número
    const n = Number(valor1);

    // Verificar que sea un número válido
    if (isNaN(n) || n < 0) {
        Swal.fire("Error", "Debe ingresar un número entero mayor o igual a 0.", "error");
        return;
    }

    // Crear una matriz que cuente desde el número ingresado hasta 0
    const resultado = [];
    for (let i = n; i >= 0; i--) {
        resultado.push(i);
    }

    // Mostrar el resultado
    Swal.fire("Resultado", `Cuenta regresiva: <b>[${resultado.join(", ")}]</b>`, "success");
    console.log("Resultado:", resultado);
}


// 17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// // Smallest number is -50, biggest is 32.

async function ejercicio17() {
    // Pedir al usuario que ingrese una matriz de números
    const valor1 = await obtenerString("Ingrese una matriz de números",`${nombreFunciones02[16]} \n === Escriba una matriz de números.===`,"Por ejemplo: [10, 4, 1, 4, -10, -50, 32, 21]");if (valor1 === "Salir") {console.log("Operación cancelada por el usuario.");return null;}

    // Convertir la cadena a un array
    let arr;
    try {
        arr = JSON.parse(valor1);
    } catch (error) {
        Swal.fire("Error", "Formato no válido. Ingrese una matriz válida, por ejemplo: [10, 4, 1, -10]", "error");
        return;
    }

    // Verificar que todos los elementos sean números
    if (!Array.isArray(arr) || !arr.every(num => typeof num === "number")) {
        Swal.fire("Error", "Todos los elementos deben ser números.", "error");
        return;
    }

    // Calcular el número mayor y el menor
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Calcular la diferencia
    const diferencia = max - min;

    // Mostrar el resultado
    Swal.fire("Resultado", `La diferencia entre el mayor (${max}) y el menor (${min}) es <b>${diferencia}</b>`, "success");
    console.log(`Mayor: ${max}, Menor: ${min}, Diferencia: ${diferencia}`);
}


// 18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]

async function ejercicio18() {
    // Pedir al usuario que ingrese una matriz con números y cadenas
    const valor1 = await obtenerString(
        "Ingrese una matriz con números y cadenas",
        `${nombreFunciones02[17]} \n === Escriba una matriz con números y cadenas.===`,
        'Por ejemplo: [1, 2, 3, "x", "y", 10]'
    );

    // Salir si el usuario cancela
    if (valor1 === "Salir") {
        console.log("Operación cancelada por el usuario.");
        return null;
    }

    // Convertir la cadena a un array
    let arr;
    try {
        arr = JSON.parse(valor1);
    } catch (error) {
        Swal.fire("Error", "Formato no válido. Ingrese una matriz válida, por ejemplo: [1, 2, 3, \"x\", 10]", "error");
        return;
    }

    // Filtrar solo los valores de tipo número
    const resultado = arr.filter(item => typeof item === "number");

    // Mostrar el resultado
    Swal.fire("Resultado", `La nueva matriz con solo enteros es: <b>[${resultado.join(", ")}]</b>`, "success");
    console.log("Resultado:", resultado);
}


// 19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

async function ejercicio19() {
    // Pedir al usuario que ingrese un elemento y la cantidad de veces que se repetirá
    const valor1 = await obtenerString(
        "Ingrese el elemento y la cantidad de repeticiones",
        `${nombreFunciones02[18]} \n === Escriba el elemento y la cantidad de veces que se repetirá, separados por coma.===`,
        "Por ejemplo: 13, 5"
    );

    // Salir si el usuario cancela
    if (valor1 === "Salir") {
        console.log("Operación cancelada por el usuario.");
        return null;
    }

    // Separar los valores ingresados
    const partes = valor1.split(",").map(p => p.trim());

    // Validar que haya exactamente dos valores
    if (partes.length !== 2) {
        Swal.fire("Error", "Debe ingresar dos valores separados por coma. Ejemplo: 13, 5", "error");
        return;
    }

    // Obtener el elemento y el número de repeticiones
    const elemento = isNaN(partes[0]) ? partes[0] : Number(partes[0]);
    const veces = Number(partes[1]);

    // Verificar que el número de repeticiones sea válido
    if (isNaN(veces) || veces < 1) {
        Swal.fire("Error", "El segundo valor debe ser un número entero positivo.", "error");
        return;
    }

    // Crear una matriz con el elemento repetido
    const resultado = Array(veces).fill(elemento);

    // Mostrar el resultado
    Swal.fire("Resultado", `El resultado es: <b>[${resultado.join(", ")}]</b>`, "success");
    console.log("Resultado:", resultado);
}


// 20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

async function ejercicio20() {
    // Pedir al usuario que ingrese una cadena y la vocal de reemplazo
    const valor1 = await obtenerString(
        "Ingrese una cadena y una vocal de reemplazo",
        `${nombreFunciones02[19]} \n === Escriba la cadena y la vocal, separados por coma.===`,
        'Por ejemplo: apples and bananas, u'
    );

    // Salir si el usuario cancela
    if (valor1 === "Salir") {
        console.log("Operación cancelada por el usuario.");
        return null;
    }

    // Separar la cadena y la vocal de reemplazo
    const partes = valor1.split(",").map(p => p.trim());

    // Validar que se ingresaron dos valores
    if (partes.length !== 2) {
        Swal.fire("Error", "Debe ingresar la cadena y la vocal, separados por coma.", "error");
        return;
    }

    const texto = partes[0];
    const vocal = partes[1];

    // Validar que la vocal sea una sola letra y sea una vocal
    if (!/^[aeiouAEIOU]$/.test(vocal)) {
        Swal.fire("Error", "El segundo valor debe ser una sola vocal (a, e, i, o, u).", "error");
        return;
    }

    // Extender el prototipo de String para reemplazar vocales
    String.prototype.vreplace = function (v) {
        return this.replace(/[aeiou]/gi, v);
    };

    // Aplicar el método al texto ingresado
    const resultado = texto.vreplace(vocal);

    // Mostrar el resultado
    Swal.fire("Resultado", `La nueva cadena es: <b>${resultado}</b>`, "success");
    console.log("Resultado:", resultado);
}


// 21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

async function ejercicio21() {
    // Pedir al usuario que ingrese una cadena de texto
    const valor1 = await obtenerString(
        "Ingrese una cadena de texto",
        `${nombreFunciones02[20]} \n === Escriba una oración que contenga la palabra Nemo.===`,
        "Por ejemplo: I am finding Nemo !"
    );

    // Salir si el usuario cancela
    if (valor1 === "Salir") {
        console.log("Operación cancelada por el usuario.");
        return null;
    }

    // Dividir la cadena en palabras
    const palabras = valor1.split(" ");

    // Buscar el índice de la palabra "Nemo"
    const posicion = palabras.findIndex(p => p.toLowerCase() === "nemo");

    // Verificar si se encontró la palabra
    if (posicion === -1) {
        Swal.fire("Resultado", "No se encontró la palabra 'Nemo' en la cadena.", "info");
        console.log("No se encontró la palabra 'Nemo'.");
        return;
    }

    // Crear el mensaje con la posición (sumar 1 porque los índices comienzan en 0)
    const resultado = `¡Encontré a Nemo en la posición ${posicion + 1}!`;

    // Mostrar el resultado
    Swal.fire("Resultado", resultado, "success");
    console.log(resultado);
}


// 22. Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

async function ejercicio22() {
    // Pedir al usuario que ingrese una cadena de texto
    const valor1 = await obtenerString(
        "Ingrese una cadena de texto",
        `${nombreFunciones02[21]} \n === Escriba una oración o palabra.===`,
        "Por ejemplo: hello world"
    );

    // Salir si el usuario cancela
    if (valor1 === "Salir") {
        console.log("Operación cancelada por el usuario.");
        return null;
    }

    // Dividir la cadena en palabras
    const palabras = valor1.split(" ");

    // Capitalizar la última letra de cada palabra
    const resultado = palabras
        .map(p => p.slice(0, -1) + p.slice(-1).toUpperCase())
        .join(" ");

    // Mostrar el resultado
    Swal.fire("Resultado", `La cadena resultante es: <b>${resultado}</b>`, "success");
    console.log("Resultado:", resultado);
}
