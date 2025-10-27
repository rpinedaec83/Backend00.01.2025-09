const contenedor01 = document.getElementById("contenedorPrincipal");
const nombreFunciones01 = ["1. Función que retorna la suma de dos números.", "2. Función que retorna la potencia de un número (base, exponente).","3. Función que suma los cubos de varios números.","4. Función que calcula el área de un triángulo.","5. Función calculator","6. Definición de una función.","7. Cantidad de argumentos de una función."];

for(let x = 1; x <= 7; x++){
    const boton = document.createElement("button");

    if (x % 3 == 0) {boton.className = "btn btn-warning";}else
    if (x % 2 == 0) {boton.className = "btn btn-success";}else
    if (x % 2 == 1) {boton.className = "btn btn-primary";}        
    if (x == Math.floor(Math.random() * 40)){boton.className = "btn btn-danger"}        

    boton.textContent = `Ejercicio ${x.toString().padStart(2, "0")}`; //Ejercicio01 nombre visual del botón
    boton.onclick = () => window[`ejercicio${x.toString().padStart(2, "0")}a`]?.(); //ejercicio01a()
    boton.title = `${nombreFunciones01[x-1]}`;
    contenedor01.appendChild(boton); //Agregar botón al div con id contenedorPrincipal
}


const contenedor02 = document.getElementById("contenedorPrincipal2");
const nombreFunciones02 = ["1. Función arrow que recibe nombre, apellido y edad, y retorna 'Hola mi nombre es X Y y mi edad Z'.",  "2. Función que suma los cubos de varios números (sumOfCubes(1,5,9) ➞ 855).",  "3. Función que retorna el tipo de valor recibido.",  "4. Función que recibe n argumentos y los suma (usando parámetros rest).",  "5. Función que recibe un array y filtra solo los valores string.",  "6. Función que devuelve el número mínimo y máximo de una matriz.",  "7. Función que convierte un array de 10 enteros en formato de número telefónico.",  "8. Función que toma una matriz de matrices y devuelve los mayores números de cada una.",  "9. Función que devuelve el primer y último índice de un carácter en una palabra.",  "10. Función que convierte un objeto en una matriz de pares clave-valor.",  "11. Función que suma los presupuestos de un array de objetos con personas.",  "12. Función que devuelve solo los nombres de los estudiantes de un array de objetos.",  "13. Función que convierte un objeto en una matriz con claves y valores.",  "14. Función que devuelve la suma de todos los números cuadrados hasta n (incluyendo n).",  "15. Función que multiplica todos los valores de un array por la cantidad de elementos del mismo.",  "16. Función que devuelve un array desde n hasta 0 (countdown).",  "17. Función que devuelve la diferencia entre el número mayor y menor de un array.",  "18. Función que filtra una matriz y devuelve solo los enteros.",  "19. Función que repite un elemento 'n' veces y devuelve un array con los resultados.",  "20. Método .vreplace() que reemplaza todas las vocales de un string por una vocal dada.",  "21. Función que busca la palabra 'Nemo' en una cadena y devuelve su posición.",  "22. Función que capitaliza la última letra de cada palabra de una cadena."];

for(let x = 1; x <= 22; x++){
    const boton = document.createElement("button");

    if (x % 3 == 0) {boton.className = "btn btn-warning";}else
    if (x % 2 == 0) {boton.className = "btn btn-success";}else
    if (x % 2 == 1) {boton.className = "btn btn-primary";}        
    if (x == Math.floor(Math.random() * 40)){boton.className = "btn btn-danger"}        

    boton.textContent = `Ejercicio ${x.toString().padStart(2, "0")}`; //Ejercicio01 nombre visual del botón
    boton.onclick = () => window[`ejercicio${x.toString().padStart(2, "0")}`]?.(); //ejercicio01()
    boton.title = `${nombreFunciones02[x-1]}`;
    contenedor02.appendChild(boton); //Agregar botón al div con id contenedorPrincipal
}



async function obtenerString(titulo, subtitulo, textoEjemplo){
    
    /*
    Obtiene entrada de usuario y retorna un string.
    - Evita valores vacíos.
    */

    let activo = true;
    let valorObtenido = "";

    while(activo == true){

        let {value: valorRecibido} = await Swal.fire({
        title: titulo,
        input: "text",
        inputLabel: subtitulo,
        inputPlaceholder: textoEjemplo,
        showCancelButton: true //retorna undefined
        });

        if (valorRecibido == undefined){
            console.log("Se canceló la operación por petición del usuario.");
            valorObtenido = "Salir";
            activo = false;
        }else if(valorRecibido.length > 0) {
            console.log(`Éxito. Valor ingresado: ${valorRecibido}`);            
            valorObtenido = valorRecibido;
            activo = false;
        }else{
            console.log(`Error. Valor no ingresado. ${valorRecibido}`);
            titulo = "Intente nuevamente";
            activo = true;
        }
    }

    return valorObtenido;
}



async function obtenerNumber(tipoDato, titulo, subtitulo, textoEjemplo){

    /*
    Obtiene números
    - "Hereda" evitar valores vacíos.
    - Evita cadenas de texto
    - Puede ser General o Entero
    */

    let aprobacion = false;
    let strValor;

    while(!aprobacion){

        strValor = await obtenerString(titulo, subtitulo, textoEjemplo);

        if (strValor=="Salir"){
            return "Salir";
        }

        switch(tipoDato){

            case "General":
                if(!isNaN(strValor)){                    
                    aprobacion = true;
                    return Number(strValor);
                    }else{titulo = "No ingresó un número válido."; console.log("No es general"); break;} 
            
            case "Entero":
                if(!isNaN(strValor) && Number.isInteger(Number(strValor))){                    
                    aprobacion = true;
                    return Number(strValor);
                    }else{titulo = "No ingresó un número entero válido."; console.log("No es entero."); break;}
            
            default:
                console.log(`No se definió tipo de número.`);
        }
    }       
}