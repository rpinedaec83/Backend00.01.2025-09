function generarBotones(){
    const contenedor01 = document.getElementById("contenedorPrincipal");

    const nombreFunciones = ["Número de 3 dígitos",  "Número negativo",  "Número terminado en 4",  "Números de menor a mayor",  "Tienda de zapatos (descuento por cantidad)",  "Sueldo semanal (horas normales y extras)",  "Tienda de helados (descuento por membresía)",  "Promedio de notas",  "Aumento de salario",  "Número par o impar",  "Mayor de tres números",  "Mayor de dos números",  "Vocal o consonante",  "Número primo (1 al 10)",  "Conversión de unidades (cm/pulgadas, lb/kg)",  "Día de la semana según número",  "Hora más un segundo",  "Venta de CDs (precio y ganancia)",  "Pago semanal por tipo de empleado",  "Operaciones con cuatro números",  "Factorial de un número",  "Suma de los n primeros números",  "Suma de impares hasta n",  "Suma de números pares hasta 1000",  "Factorial (método alternativo)",  "Cociente y resto por restas sucesivas",  "Media de números positivos (termina con negativo)",  "Suma de 1 a 100 (ciclo repetir)",  "Suma de 1 a 100 (ciclo mientras)",  "Suma de 1 a 100 (ciclo para)",  "Media de pares e impares (10 números)",  "Ciudad con mayor población",  "Continuar o salir del programa",  "Tabla de multiplicar (1 al 9)",  "Mayor y menor de veinte números",  "Serie de Fibonacci",  "Máximo común divisor (Euclides)",  "Número perfecto",  "Aproximación de π (serie Gregory-Leibniz)",  "Aproximación de π (serie Nilakantha)"];

    for(let x = 1; x <= 40; x++){
        const boton = document.createElement("button");

        if (x % 3 == 0) {boton.className = "btn btn-warning";}else
        if (x % 2 == 0) {boton.className = "btn btn-success";}else
        if (x % 2 == 1) {boton.className = "btn btn-primary";}        
        if (x == Math.floor(Math.random() * 40)){boton.className = "btn btn-danger"}        

        boton.textContent = `Ejercicio ${x.toString().padStart(2, "0")}`; //Ejercicio01 nombre visual del botón
        //boton.textContent = `Ejercicio ${x.toString().padStart(2, "0")} - ${nombreFunciones[x-1]}`; //Ejercicio01 nombre visual del botón con descripcion       
        //Acceder a propiedad del objeto global window usando []
        //?. : Si existe window["ejercicio01"] como función, la devuelve
        //() : Obtenida la función, los paréntesis la ejecutan
        boton.onclick = () => window[`ejercicio${x.toString().padStart(2, "0")}`]?.(); //ejercicio01()
        boton.title = `${nombreFunciones[x-1]}`;
        contenedor01.appendChild(boton); //Agregar botón al div con id contenedorPrincipal
    }
}
generarBotones(); // ¿Debería ser función anónima por ser usada una sola vez?

async function obtenerDatos(titulo, subtitulo, textoEjemplo){
    let activo = true;
    let valorObtenido = "";
    while(activo == true){
        let {value: valorRecibido} = await Swal.fire({
        title: titulo,
        input: "text",
        inputLabel: subtitulo,
        inputPlaceholder: textoEjemplo,
        showCancelButton: true //retorna dato de tipo undefined
        });

        if (valorRecibido==undefined){
            console.log("Se canceló la operación por petición del usuario.");
            valorObtenido = "Salir";
            activo = false;
        }else if(valorRecibido.length>0) {
            console.log(`Éxito. Valor ingresado: ${valorRecibido}`);            
            valorObtenido = valorRecibido;
            activo = false;
        }else{
            console.log(`Error. Valor no ingresado. ${valorRecibido}`);
            titulo = "Intente nuevamente";
            activo = true;}}  
    return valorObtenido;    
}

function asegurarEnteros(cadena){
    let entero = Number(cadena);

    if(isNaN(entero)){
        entero=false;
    }else if(Number.isInteger(entero)){

    }
    else {
        entero=false;
    }

    console.log(entero);
    
    return entero;
}


/* INICIO DE EJERCICIOS*/

async function ejercicio01(){
    // 1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.    
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un entero de 3 cifras","Por ejemplo: 123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        resultado = " Sí es un número entero";

        if((num1>99) && (num1<1000)){
            resultado+=" y sí es de 3 dígitos."
        }else{
            resultado+=" pero no es de 3 dígitos."}
        Swal.fire(`${num1} ${resultado}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado el número 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio02(){
    // 2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y determinar si es negativo.
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un entero negativo","Por ejemplo: -123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    
    if(num1){
        resultado = " Sí es un número entero";

        if(num1<0){
            resultado+=" y sí es negativo."
        }else if(num1>0){
            resultado+=" pero es positivo."}

        Swal.fire(`${num1} ${resultado}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado el número 0 que es neutro.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio03(){
    // 3. Hacer un algoritmo en Javascript que lea un número y determinar si termina en 4.
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un entero que termine en 4","Por ejemplo: 64"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        resultado = " Sí es un número entero";
        if(num1%10==4){
            console.log(num1%10);
            resultado+=" y sí termina en 4."
        }else {
            resultado+=" pero no termina en 4."}
        Swal.fire(`${num1} ${resultado}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado el número 0 que es neutro.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio04(){
    // 4. Hacer un algoritmo en Javascript que lea tres números enteros y los muestre de menor a mayor.
    let strValor1 = await obtenerDatos("Ingrese primer número","Ingrese un número entero","Por ejemplo: 123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    let strValor2 = await obtenerDatos("Ingrese segundo número","Ingrese un número entero","Por ejemplo: 456"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let num2 = asegurarEnteros(strValor2);
    let strValor3 = await obtenerDatos("Ingrese tercer número","Ingrese un número entero","Por ejemplo: 789"); console.log(typeof(strValor3),strValor3); if (strValor3 == "Salir"){return null;}
    let num3 = asegurarEnteros(strValor3);

    if(((!num1) && (strValor1 !== "0")) || ((!num2) && (strValor2 !== "0")) || ((!num3) && (strValor3 !== "0")) ){
        error1 = `Error al ingresar: `;
        if(!num1){error1+=`\n - Primer número: ${strValor1}`}
        if(!num2){error1+=`\n - Segundo número: ${strValor2}`}
        if(!num3){error1+=`\n - Tercer número: ${strValor3}`}
        Swal.fire(error1);
    }else{
        let temporal = 0
        if(num1 > num2){temporal = num1; num1=num2; num2=temporal;}
        if(num1 > num3){temporal = num1; num1=num3; num3=temporal;}
        if(num2 > num3){temporal = num2; num2=num3; num3=temporal;}
        Swal.fire(`Números ordenados de menor a mayor: \n ${num1} - ${num2} - ${num3}`);}
}

async function ejercicio05(){
    /* 5. Hacer un algoritmo en JS para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren.
            Si son más de diez, se les dará un 10% de descuento sobre el total de la compra;
            si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento;
            y si son más treinta zapatos se otorgará un 40% de descuento.
        El precio de cada zapato es de $80.    */
    
    let strValor1 = await obtenerDatos("Ingrese la cantidad","Ingrese cuántos pares de zapatos llevará","Por ejemplo: 1"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let cantidad = asegurarEnteros(strValor1);

    if(cantidad){
        let total = 0.00;
        if(cantidad>=30){total = cantidad * 80 * 0.60;}
        if((cantidad<30) && (cantidad >=20)){total = cantidad * 80 * 0.80;}
        if((cantidad<20) && (cantidad >=10)){total = cantidad * 80 * 0.90;}
        if (cantidad<10){total = cantidad * 80}
        Swal.fire(`Monto total: $ ${total}`);
    }else if(cantidad===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio06(){
    /* 6. Hacer un algoritmo en JS para ayudar a un trabajador a saber cuál será su sueldo semanal,
        se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora,
        pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.*/
    let strValor1 = await obtenerDatos("Ingrese la cantidad de horas por semana","Ingrese cuántas horas trabajará","Por ejemplo: 40"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let totalHoras = asegurarEnteros(strValor1);

    if(totalHoras){
        let sueldo = 0.00;
        if(totalHoras<=40){sueldo = totalHoras * 20;}
        if(totalHoras>40){sueldo = (40 * 20) + ((totalHoras-40) * 25);}
        Swal.fire(`Monto a pagar: $ ${sueldo}`);
    }else if(totalHoras===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio07(){
    /*7. Hacer un algoritmo en JS para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo,
        sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
		    Tipo A 10% de descuento
			Tipo B 15% de descuento
			Tipo C 20% de descuento
        No especifica lo que se quiere mostrar, por lo que mostrará una simulación de dscto aplicado a un precio*/
    let strValor1 = await obtenerDatos("Ingrese el importe total","Ingrese el total de la compra","Por ejemplo: 140.90"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let totalInicial = parseFloat(strValor1);

    let strValor2 = await obtenerDatos("Ingrese el tipo de usuario","\n Para tipo A : digite A \n Para tipo B : digite B \n Para tipo C : digite C \n Para tipo sin membresía : digite Z","Por ejemplo: B"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}

    if(isNaN(totalInicial)){
        Swal.fire(`Importe incorrecto. Ingresó: ${strValor1}`);
    }else{
        let totalFinal = 0.00;
        switch (strValor2.toUpperCase()){
            case "A":
                totalFinal = ` para miembro A: \n $ ${totalInicial * 0.90}`;
                break;
            case "B":
                totalFinal = ` para miembro B: \n $ ${totalInicial * 0.85}`;
                break;
            case "C":
                totalFinal = ` para miembro C: \n $ ${totalInicial * 0.80}`;
                break;
            default:
                totalFinal =  ` genérico: \n $ ${totalInicial}`;
                break;}
        Swal.fire(`Importe final${totalFinal}`);}
}

async function ejercicio08(){
    // 8. Hacer un algoritmo en JS para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
    let strValor1 = await obtenerDatos("Ingrese primera nota","Ingrese una nota","Por ejemplo: 14"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}    
    let nota1 = parseFloat(strValor1);
    let strValor2 = await obtenerDatos("Ingrese segunda nota","Ingrese una nota","Por ejemplo: 17"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}    
    let nota2 = parseFloat(strValor2);
    let strValor3 = await obtenerDatos("Ingrese tercera nota","Ingrese una nota","Por ejemplo: 20"); console.log(typeof(strValor3),strValor3); if (strValor3 == "Salir"){return null;}
    let nota3 = parseFloat(strValor3);

    if((isNaN(nota1)) || (isNaN(nota2)) || (isNaN(nota3))){
        Swal.fire(`Notas incorrectas. Ingresó: ${strValor1}, ${strValor2} y ${strValor3}`);
    }else{
        let promedio = 0.00;
        promedio = (nota1 + nota2 + nota3)/3;
        if (Math.round(promedio)>=14){
            Swal.fire(`Aprobado con nota final: ${Math.round(promedio)}`);
        }else{Swal.fire(`Desaprobado con nota final: ${Math.round(promedio)}`);}
    }
}

async function ejercicio09(){
    /*  9. Hacer un algoritmo en JS para determinar el aumento de un trabajador, 
        se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
        si generaba menos de $2000 su aumento será de un 10%. */
    let strValor1 = await obtenerDatos("Ingrese el sueldo","Ingrese el monto del sueldo actual","Por ejemplo: 1020"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let sueldoInicial = parseFloat(strValor1);
    
    if(isNaN(sueldoInicial)){
        Swal.fire(`Importe incorrecto. Ingresó: ${strValor1}`);
    }else{
        let aumento = 0.00;
        if(sueldoInicial>2000){aumento = sueldoInicial * 0.05;            
        }else if(sueldoInicial<=2000){
            aumento = sueldoInicial * 0.10;}
        Swal.fire(`Importe del aumento: ${aumento}. Por lo que sueldo final será: $ ${sueldoInicial+aumento}`);
    }
}

async function ejercicio10(){
    // 10. Hacer un algoritmo en JS que diga si un número es par o impar.
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un número entero","Por ejemplo: 123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        if(num1%2==0){Swal.fire(`El número ${num1} es par.`);}else
        if(num1%2==1){Swal.fire(`El número ${num1} es impar.`);}
    }else if(num1===0){
        Swal.fire("Ha ingresado 0 que no es par ni impar.");
    }else{
        Swal.fire("No ingresó un número entero.")}

}

async function ejercicio11(){
    // 11. Hacer un algoritmo en JS que lea tres números y diga cuál es el mayor.
    let strValor1 = await obtenerDatos("Ingrese primer número","Ingrese un número","Por ejemplo: 123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;} 
    let strValor2 = await obtenerDatos("Ingrese segundo número","Ingrese un número","Por ejemplo: 123"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let strValor3 = await obtenerDatos("Ingrese tercer número","Ingrese un número","Por ejemplo: 123"); console.log(typeof(strValor3),strValor3); if (strValor3 == "Salir"){return null;}

    let num1 = parseFloat(strValor1);
    let num2 = parseFloat(strValor2);
    let num3 = parseFloat(strValor3);

    if((isNaN(num1)) || (isNaN(num2)) || (isNaN(num3))){
        Swal.fire(`Ingreso de números incorrecto. Ingresó: ${strValor1}, ${strValor2} y ${strValor3}`);
    }else{
        if((num1>=num2) && (num1>=num3)){Swal.fire(`El mayor es: ${num1}`);}else
        if((num2>=num1) && (num2>=num3)){Swal.fire(`El mayor es: ${num2}`);}else
        if((num3>=num2) && (num3>=num1)){Swal.fire(`El mayor es: ${num3}`);}}
}

async function ejercicio12(){
    // 12. Hacer un algoritmo en JS que lea dos números y diga cuál es el mayor.
    let strValor1 = await obtenerDatos("Ingrese primer número","Ingrese un número","Por ejemplo: 123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;} 
    let strValor2 = await obtenerDatos("Ingrese segundo número","Ingrese un número","Por ejemplo: 123"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}

    let num1 = parseFloat(strValor1);
    let num2 = parseFloat(strValor2);

    if((isNaN(num1)) || (isNaN(num2))){
        Swal.fire(`Ingreso de números incorrecto. Ingresó: ${strValor1} y ${strValor2}`);
    }else{
        if(num1>=num2){Swal.fire(`El mayor es: ${num1}`);}else
        if(num2>=num1){Swal.fire(`El mayor es: ${num2}`);}}
}

async function ejercicio13(){
    // 13. Hacer un algoritmo en JS que lea una letra y diga si es una vocal.
    let strValor1 = await obtenerDatos("Ingrese una letra","Ingrese una letra","Por ejemplo: s"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;} 

    if((strValor1.toUpperCase() === "A") || (strValor1.toUpperCase() === "E") || (strValor1.toUpperCase() === "I") || (strValor1.toUpperCase() === "O") || (strValor1.toUpperCase() === "U")){
        Swal.fire(`${strValor1} sí es una vocal.`);
    }else{Swal.fire(`${strValor1} no es una vocal.`);}
}

async function ejercicio14(){
    // 14. Hacer un algoritmo en JS que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un número entero entre 1 y 9","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    let resto = false;
    if(num1>=1 && num1<=9){
        if(num1 === 1){resto=true;}
        for (x=2;x<=num1-1;x++){
            if((num1 % x) == 0){resto = true;}
        }
    }else{Swal.fire(`${strValor1} no está comprendido entre 1 y 9`); return null;}

    if(resto){
        Swal.fire(`${strValor1} no es primo.`);
    }else{
        Swal.fire(`${strValor1} sí es primo.`);
    }
}

async function ejercicio15(){
    // 15. Hacer un algoritmo en JS que convierta centímetros a pulgadas y libras a kilogramos.
    let strValor1 = await obtenerDatos("Ingrese primer número","Ingrese centímetros","Por ejemplo: 150"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;} 
    let strValor2 = await obtenerDatos("Ingrese segundo número","Ingrese libras","Por ejemplo: 75"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}

    let cm = parseFloat(strValor1);
    let lb = parseFloat(strValor2);

    if((isNaN(cm)) || (isNaN(lb))){
        Swal.fire(`Ingreso de números incorrecto. Ingresó: ${strValor1} y ${strValor2}`);
    }else{
        Swal.fire(`${strValor1} centímetros \n equivale a ${(cm*0.393701).toFixed(2)} pulgadas. \n ${strValor2} libras \n equivale a ${(lb*0.453592).toFixed(2)} kilogramos.`);
    }
}

async function ejercicio16(){
    // 16. Hacer un algoritmo en JS que lea un número y según ese número, indique el día que corresponde.
    let strValor1 = await obtenerDatos("Ingrese un número","Ingrese un número entero entre 1 y 7","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    
    switch(strValor1){
        case "1":
            Swal.fire("Lunes");
            break;
        case "2":
            Swal.fire("Martes");
            break;
        case "3":
            Swal.fire("Miércoles");
            break;
        case "4":
            Swal.fire("Jueves");
            break;
        case "5":
            Swal.fire("Viernes");
            break;
        case "6":
            Swal.fire("Sábado");
            break;
        case "7":
            Swal.fire("Domingo");
            break;
        default:
            Swal.fire("Número ingresado incorrectamente.");
    }
}

async function ejercicio17(){
    // 17. Hacer un algoritmo en JS donde se ingrese una hora y nos calcule la hora dentro de un segundo.
    let strValor1 = await obtenerDatos("Ingrese hora","Ingrese una hora en formato HH:MM:SS","Por ejemplo: 23:59:59 ó 00:00:01"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}

    if(strValor1.length==8){
        let hora = strValor1.slice(0,2);
        let minuto = strValor1.slice(3,5);
        let segundo = strValor1.slice(6,8);
        
        if ((Number(hora)>=0 && Number(hora)<=23) && (Number(minuto)>=0 && Number(minuto)<=59) && (Number(segundo)>=0 && Number(segundo)<=59)){
            let horaComp = Number(hora);
            let minutoComp = Number(minuto);
            let segundoComp = Number(segundo);

            segundoComp ++;
            if(segundoComp==60){segundoComp=0; minutoComp++;}
            if(minutoComp==60){minutoComp=0; horaComp++;}
            if(horaComp==24){horaComp = 0;}

            let strSegundo = segundoComp.toString()
            if(strSegundo.length==1){strSegundo="0"+strSegundo;}

            let strMinuto = minutoComp.toString()
            if(strMinuto.length==1){strMinuto="0"+strMinuto;}

            let strHora = horaComp.toString()
            if(strHora.length==1){strHora="0"+strHora;}

            Swal.fire(`La hora dentro de un segundo será: ${strHora}:${strMinuto}:${strSegundo}`);

        }else{Swal.fire("Hora ingresada no válida.");}
    }else{
            Swal.fire("Hora ingresada no válida.");
        }
}

async function ejercicio18(){
    /* 18. Hacer un algoritmo en JS para una empresa se encarga de la venta y distribución de CD vírgenes.
		Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
		    $10. Si se compran unidades separadas hasta 9.
		    $8. Si se compran entre 10 unidades hasta 99.
		    $7. Entre 100 y 499 unidades.
		    $6. Para mas de 500 unidades.
    	La ganancia para el vendedor es de 8,25 % de la venta.
        Realizar un algoritmo en JS que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.  */
    let strValor1 = await obtenerDatos("Ingrese la cantidad","Ingrese la cantidad CD's vendidos","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let cantidad = asegurarEnteros(strValor1);

    if(cantidad){
        if(cantidad>=500){
            Swal.fire(`Total a pagar: $ ${cantidad * 6} | Ganancia de venta: $ ${((cantidad * 6) * 0.0825).toFixed(2)}`);
        }else if(cantidad>=100){
            Swal.fire(`Total a pagar: $ ${cantidad * 7} | Ganancia de venta: $ ${((cantidad * 7) * 0.0825).toFixed(2)}`);
        }else if(cantidad>=10){
            Swal.fire(`Total a pagar: $ ${cantidad * 8} | Ganancia de venta: $ ${((cantidad * 8) * 0.0825).toFixed(2)}`);
        }else{
            Swal.fire(`Total a pagar: $ ${cantidad * 10} | Ganancia de venta: $ ${((cantidad * 10) * 0.0825).toFixed(2)}`);
        }
    }else if(cantidad===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio19(){
    /* 19. Hacer un algoritmo en JS para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
			Cajero (56$/día).
			Servidor (64$/día).
			Preparador de mezclas (80$/día).
			Mantenimiento (48$/día).
		El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos).
		Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó */
    
    let strValor1 = await obtenerDatos("Empleado","Tipo de Empleado => ID\nCajero ($56/día) => 1\nServidor ($64/día) => 2\nPrep. Mezclas ($80/día) => 3\nMantenimiento ($48/día) => 4\nIngrese ID de empleado","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    
    let strValor2 = await obtenerDatos("Ingrese la cantidad de días","Ingrese la cantidad de días (1-6) trabajados en la semana","Por ejemplo: 3"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let num2 = asegurarEnteros(strValor2);
    if (num2>=1 & num2<=6){
        switch (strValor1){
            case "1":
                Swal.fire(`Pagar al Cajero: $ ${56*num2}`);
                break;
            case "2":
                Swal.fire(`Pagar al Servidor: $ ${64*num2}`);
                break;
            case "3":
                Swal.fire(`Pagar al Preparador de mezclas: $ ${80*num2}`);
                break;
            case "4":
                Swal.fire(`Pagar al de Mantenimiento: $ ${48*num2}`);
                break;
            default:
                Swal.fire("ID no válido.");
        }
    } else {Swal.fire("Solo se permite ingresar entre 1 a 6 días.");}    
}

async function ejercicio20(){
    /* 20. Hacer un algoritmo en JS que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
		¿Cuántos números son Pares?
		¿Cuál es el mayor de todos?
		Si el tercero es par, calcular el cuadrado del segundo.
		Si el primero es menor que el cuarto, calcular la media de los 4 números.
		Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números. */
    
    let strValor1 = await obtenerDatos("Ingrese primer número","Ingrese un número entero positivo","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    let strValor2 = await obtenerDatos("Ingrese segundo número","Ingrese un número entero positivo","Por ejemplo: 6"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let num2 = asegurarEnteros(strValor2);
    let strValor3 = await obtenerDatos("Ingrese tercer número","Ingrese un número entero positivo","Por ejemplo: 7"); console.log(typeof(strValor3),strValor3); if (strValor3 == "Salir"){return null;}
    let num3 = asegurarEnteros(strValor3);
    let strValor4 = await obtenerDatos("Ingrese cuarto número","Ingrese un número entero positivo","Por ejemplo: 3"); console.log(typeof(strValor4),strValor4); if (strValor4 == "Salir"){return null;}
    let num4 = asegurarEnteros(strValor4);

    if((!num1) || (num1<=0) || (!num2) || (num2<=0) ||(!num3) || (num3<=0) || (!num4) || (num4<=0)){ 
        let error1 = `Error al ingresar: `;
        if(!num1 || (num1<=0)){error1+=`\n - Primer número: ${strValor1}`}
        if(!num2 || (num2<=0)){error1+=`\n - Segundo número: ${strValor2}`}
        if(!num3 || (num3<=0)){error1+=`\n - Tercer número: ${strValor3}`}
        if(!num4 || (num4<=0)){error1+=`\n - Cuarto número: ${strValor4}`}
        Swal.fire(error1);
    }else{
        let pares = 0;
        if(num1%2==0){pares++;}
        if(num2%2==0){pares++;}
        if(num3%2==0){pares++;}
        if(num4%2==0){pares++;}
        
        let mayor = 0;
        if((num1>=num2) && (num1>=num3) && (num1>=num4)){mayor = num1;}
        if((num2>=num1) && (num2>=num3) && (num2>=num4)){mayor = num2;}
        if((num3>=num1) && (num3>=num2) && (num3>=num4)){mayor = num3;}
        if((num4>=num1) && (num4>=num2) && (num4>=num3)){mayor = num4;}
        
        let cuadradoSegundo = 0;
        if(num3%2==0){cuadradoSegundo = num2 * num2;}
        
        let media = 0.00;
        if(num1<num4){media=((num1+num2+num3+num4)/4).toFixed(2);}

        let suma = 0;
        if(num2>num3){
            if(num3>=50 && num3<=700){suma = (num1+num2+num3+num4);}}

        let mensaje01 = "";
        let mensaje02 = "";
        let mensaje03 = "";
        if (cuadradoSegundo != 0){mensaje01 = `\n El cuadrado del segundo número es: ${cuadradoSegundo}`}
        if (media != 0.00){mensaje02 = `\n La media general es: ${media}`}
        if (suma != 0){mensaje03 = `\n La suma de todos los números es: ${suma}`}

        Swal.fire(`Cantidad de números pares: ${pares} \n El mayor es: ${mayor} ${mensaje01} ${mensaje02} ${mensaje03}`);
    }
}

async function ejercicio21(){
    //21. Hacer un algoritmo en JS que permita calcular el factorial de un número.    
    let strValor1 = await obtenerDatos("Factorial de número","Ingrese un número entero positivo","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        let factorial = 1;
        for(x=1;x<=num1;x++){
            factorial = factorial * x;
        }
        Swal.fire(`El factorial de ${num1} es: ${factorial}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio22(){
    // 22. Hacer un algoritmo en JS para calcular la suma de los n primeros números.
    let strValor1 = await obtenerDatos("Suma de números","Ingrese un número entero positivo","Por ejemplo: 3"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        let suma = 0;
        for(x=1;x<=num1;x++){
            suma = suma + x;
        }
        Swal.fire(`La suma de los primeros ${num1} números es: ${suma}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio23(){
    // 23. Hacer un algoritmo en JS para calcular la suma de los números impares menores o iguales a n.
    let strValor1 = await obtenerDatos("Suma de números impares","Ingrese un número entero positivo","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        let num = 0;
        let acumulador = 0;
        while(num <= num1){
            if(num % 2 == 1){
                acumulador = acumulador + num;
            }
            num = num + 1;
        }
        Swal.fire(`La suma de números impares del 1 al ${num1} es: ${acumulador}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio24(){
    // 24. Hacer un algoritmo en JS para realizar la suma de todos los números pares hasta el 1000.
    let suma = 0;
    let contador = 2;
    do{
        if(contador%2 == 0){
            suma = suma + contador;
        }
        contador = contador + 2
    }while(contador<=1000)    
    Swal.fire(`La suma de números pares del 1 al 1000 es: ${suma}`);    
}

async function ejercicio25(){
    // 25. Hacer un algoritmo en JS para calcular el factorial de un número de una forma distinta.
    let strValor1 = await obtenerDatos("Factorial de un número","Ingrese un número entero positivo","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);

    if(num1){
        let factorial = 1;
        let contador = 1;
        while(contador<=num1){
            factorial = factorial * contador;
            contador++;
        }
        Swal.fire(`El factorial de ${num1} es: ${factorial}`);
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio26(){
    //26. Hacer un algoritmo en JS para calcular el resto y cociente por medio de restas sucesivas.
    let strValor1 = await obtenerDatos("Resto y Cociente","Ingrese un número entero positivo para dividendo","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let dividendo = asegurarEnteros(strValor1);
    let strValor2 = await obtenerDatos("Resto y Cociente","Ingrese un número entero positivo para divisor","Por ejemplo: 7"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let divisor = asegurarEnteros(strValor2);

    if(dividendo && divisor){
        let cociente = 0;
        let resto = dividendo;
        while(resto>=divisor){
            resto = resto - divisor;
            cociente = cociente + 1;            
        }
        Swal.fire(`Para: ${strValor1} / ${strValor2} \n El cociente es ${cociente} y el resto es: ${resto}`);
    }else if(dividendo===0 || divisor===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio27(){
    // 27. Hacer un algoritmo en JS para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
    let num2=0;
    let acumulador=0;
    let contador=0;
    do{
        let strValor1 = await obtenerDatos("Media de lista de números","Ingrese un número entero positivo para continuar.\n O un número negativo para terminar.","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
        let num1 = asegurarEnteros(strValor1);
        if(num1){
            num2 = num1;
            console.log("ok");
            acumulador=acumulador+num2;
            contador++;
        }else if(num1===0){
            Swal.fire("Ha ingresado 0.");
            return null;
        }else{
            Swal.fire("No ingresó un número entero.");
            return null;
        }
    }while(num2>=0)
    Swal.fire(`La media de los ${contador-1}  números ingresados es: ${(acumulador-num2)/(contador-1)}`);
}

async function ejercicio28(){
    // 28. Hacer un algoritmo en JS para calcular la suma de los primeros cien números con un ciclo repetir.
    let suma = 0;
    let num=1;
    do{        
        suma += num;
        num++;
    }while(num<=100)    
    Swal.fire(`La suma de primeros 100 números es: ${suma}`);    

}

async function ejercicio29(){
    // 29. Hacer un algoritmo en JS para calcular la suma de los primeros cien números con un ciclo mientras.
    let suma = 0;
    let num=1;
    while(num<=100){
        suma += num;
        num++;
    }
    Swal.fire(`La suma de primeros 100 números es: ${suma}`);  
}

async function ejercicio30(){
    // 30. Hacer un algoritmo en JS para calcular la suma de los primeros cien números con un ciclo para.
    let suma = 0;    
    for(num=1;num<=100;num++){
        suma += num;        
    }
    Swal.fire(`La suma de primeros 100 números es: ${suma}`);  
}

async function ejercicio31(){
    // 31. Hacer un algoritmo en JS parar calcular la media de los números pares e impares, sólo se ingresará diez números.    
    let cantPares = 0;
    let cantImpares = 0;
    let sumaPares = 0;
    let sumaImpares = 0;
    for(x=0;x<10;x++){
        let strValor1 = await obtenerDatos("Media de números","Ingrese un número entero.","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
        let num1 = asegurarEnteros(strValor1);
        if(num1){
            if(num1%2==0){sumaPares+=num1; cantPares++;}
            if(num1%2==1){sumaImpares+=num1; cantImpares++;}
        }else if(num1===0){
            Swal.fire("Ha ingresado 0.");
            return null;
        }else{
            Swal.fire("No ingresó un número entero.");
            return null;
        }
    }
    Swal.fire(`Promedio de pares: ${sumaPares/cantPares} \n Promedio de impares: ${sumaImpares/cantImpares}`);    
}

async function ejercicio32(){
    /* 32. Se quiere saber cuál es la ciudad con la población de más personas,
        son tres provincias y once ciudades,
        hacer un algoritmo en JS que nos permita saber eso... */
    let nombreProvincia="", mayorProvincia="";
    let nombreCiudad="", mayorCiudad="";
    let i, j, mayorPoblacion=0;

    for(j=1;j<3;j++){
        let strValor1 = await obtenerDatos(`Nombre de Provincia ${j}`,"Ingrese nombre de una provincia.","Por ejemplo: Lima"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
        nombreProvincia = strValor1;

        for(i=1;i<3;i++){
            let strValor2 = await obtenerDatos(`Nombre de Ciudad ${i}`,`Ingrese nombre de una ciudad para la provincia de ${nombreProvincia}.`,"Por ejemplo: San Juan de Lurigancho"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
            nombreCiudad = strValor2;

            let strValor3 = await obtenerDatos(`Cantidad de Población de Ciudad ${nombreCiudad}`,`Ingrese la cantidad de población`,"Por ejemplo: 17000"); console.log(typeof(strValor3),strValor3); if (strValor3 == "Salir"){return null;}
            let poblacion = asegurarEnteros(strValor3);
            
            if(poblacion){
                 if(poblacion > mayorPoblacion){
                    mayorPoblacion = poblacion;
                    mayorCiudad = nombreCiudad;
                    mayorProvincia = nombreProvincia;                    
                 }
            }else if(poblacion===0){
                Swal.fire("Ha ingresado 0.");
                return null;
            }else{
                Swal.fire("No ingresó un número entero.");
                return null;
            }
        }
    }    
    Swal.fire(`La ciudad con mayor población es: ${mayorCiudad} \n de la provincia de: ${mayorProvincia}\n con ${mayorPoblacion} habitantes.`);    
}

async function ejercicio33(){
    // 33. Hacer un algoritmo en JS que permita al usuario continuar con el programa.
    let strValor1 ="";
    do{
        strValor1 = await obtenerDatos("Ingrese letra o número","Ingrese números o letras.\nPara salir escriba: Salir","Por ejemplo: abc123"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}        
    }while(strValor1.toUpperCase() != "SALIR")
}

async function ejercicio34(){
    //34. Hacer un algoritmo en JS que imprima la tabla de multiplicar de los números del uno al nueve.
    let mensaje = "";
    for(j=1;j<=9;j++){
        mensaje += `Tabla del ${j}\n`
        for(i=1;i<=9;i++){
            mensaje += `| ${j} x ${i} = ${j*i} |`;
        }
        mensaje += `\n`
    }
    Swal.fire(mensaje);
}

async function ejercicio35(){
    // 35. Hacer un algoritmo en JS que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    let numMayor = 0, numMenor = 0;

    let strValor1 = await obtenerDatos(`Ingreso Nº1 de números`,"Ingrese un número","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num = asegurarEnteros(strValor1);

    if(num){
        numMayor = num;
        numMenor = num;
    }else{
        Swal.fire("No ingresó un número entero.");
        return null;
    }

    for(j=0;j<19;j++){
        strValor1 = await obtenerDatos(`Ingreso Nº${j+2} de números`,"Ingrese un número","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
        num = asegurarEnteros(strValor1);
        if(num){
            if(num>=numMayor){numMayor=num;}
            if(num<=numMenor){numMenor=num;}
        }else{
            Swal.fire("No ingresó un número entero.");
            return null;
        }
    }
    Swal.fire(`Mayor: ${numMayor} | Menor: ${numMenor}`);
}

async function ejercicio36(){
    // 36. Hacer un algoritmo en JS para calcular la serie de Fibonacci.    
    let strValor1 = await obtenerDatos("Serie Fibonacci","Ingrese la cantidad de términos a mostrar","Por ejemplo: 5"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    if(num1){
        let i=0, a=0, b=1, c=0, mensaje="Serie Fibonacci: ";
        mensaje += `${a} ${b}`;

        for(i=3;i<=num1;i++){
            c = a + b;
            mensaje += ` ${c}`;
            a = b; //Reasignar valores
            b = c;
        }
        Swal.fire(mensaje);
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio37(){
    // 37. Hacer un algoritmo en JS para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
    /*  Paso 1: Divide el número mayor (171) entre el menor (17).
            171 = 17 * 10 + 1
        Paso 2: Como el residuo (1) no es cero, se repite el proceso. Ahora, el divisor (17) se convierte en el nuevo dividendo, y el residuo (1) se convierte en el nuevo divisor.
            17 = 1 * 17 + 0
        Paso 3: La división ha terminado, ya que el nuevo residuo es 0. El MCD es el último divisor que no produjo un residuo de cero, que en este caso es 1.
        Por lo tanto, el MCD de 171 y 17 es 1. Esto significa que los dos números son coprimos, o sea, no tienen otro divisor común que no sea el 1. */
    let resto=0;
    let strValor1 = await obtenerDatos("MCD según Euclides","Ingrese un número entero como dividendo","Por ejemplo: 171"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    let strValor2 = await obtenerDatos("MCD según Euclides","Ingrese un número entero como divisor","Por ejemplo: 17"); console.log(typeof(strValor2),strValor2); if (strValor2 == "Salir"){return null;}
    let num2 = asegurarEnteros(strValor2);
    if(num1 && num2){
        if(num1<num2){Swal.fire("El primer número debe ser mayor que el segundo"); return null;}
        while(num2 != 0){ // Cuando sea 0 acabará la iteración porque El MCD es el último divisor que no produjo un residuo de cero
            resto = num1%num2;
            num1=num2 //Reasignación de variables
            num2 = resto; //Reasignación de variables
        }
        Swal.fire(`El MCD de ${strValor1} / ${strValor2} es: ${num1}`);
    }else if(num1===0 || num2===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio38(){
    /* 38. Hacer un algoritmo en JS que nos permita saber si un número es un número perfecto.
        Ejemplo 1: 496 perfecto porque sus divisores 1, 2, 4, 8, 16, 31, 62, 124, 248 sumados dan 496.
        Ejemplo 2: simple 6, donde divisores 1, 2, 3 suman 6 */
    let strValor1 = await obtenerDatos("Número perfecto","Ingrese un número entero","Por ejemplo: 496"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);
    if(num1){
        let suma = 0;
        for(i=1;i<num1;i++){
            if(num1%i==0){ //Si es divisor exacto, 
                suma += i; //se sumará al acumulado
            }
        }
        if(suma==num1){
            Swal.fire(`${num1} sí es un número perfecto.`);
        }else{
            Swal.fire(`${num1} no es un número perfecto.`);}
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio39(){
    /* 39. Hacer un algoritmo en JS que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
        Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... */
    let strValor1 = await obtenerDatos("PI según serie de Gregory-Leibniz","Ingrese la cantidad de términos a mostrar","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);    
    if(num1){
        let p = 0; //Guardará la suma que se aproxima a PI
        let signo = 1; //Empieza como positivo, luego alternará con *-1
        let denominador = 1 //Empiza como el primer denominador de la serie

        for(i=1;i<=num1;i++){
            p = p + signo * (4 / denominador);
            // en primera sería p = 0 + 1 * (4 / 1) = 4
		    // en segunda seria p = 4 - 1 * (4 / 3) =  2.666...
		    // en tercera seria p = 2.66... + 1 * (4 / 5) =  3.4666..

            denominador+=2; //Aumenta de dos en dos el denominador porque es impar
            signo = signo * -1; //Alternar entre + y -
        }
        Swal.fire(`La aproximación del número PI con ${num1} términos es: ${p}`);

    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}
}

async function ejercicio40(){
    /* 40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
        Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
        - El numerador siempre es 4.
        - Otra vez hay que intercambiar signos.
        - En el denominador, el último múltiplo de una división se convertirá en el primer múltiplo de la siguiente división*/
    
    let strValor1 = await obtenerDatos("PI según serie de Nilakantha","Ingrese la cantidad de términos a mostrar","Por ejemplo: 7"); console.log(typeof(strValor1),strValor1); if (strValor1 == "Salir"){return null;}
    let num1 = asegurarEnteros(strValor1);    
    if(num1){
        let p = 3; //La serie inicia en 3
        let signo = 1; // La segunda fracción se suma con la primera, luego se restará y así se repetirá la secuencia
        let a = 2; // Primer multiplo del denominador (2*3*4)
        for(i=1;i<=num1;i++){
            p = p + signo * (4 / (a * (a + 1) * (a + 2))); //Calcular el término de la serie
            //Primera p = 3 + 1 * (4 / (2 * (2+1) * (2+2))) = 3.1666...
            signo = signo * -1; //invertir negativo o positivo

            a = a + 2; // Avanzar al siguiente grupo de números en denominador convirtiendo al último multiplicador en primer multiplicador de la siguiente fracción
        }
        Swal.fire(`La aproximación del número PI con ${num1} términos es: ${p}`)
    }else if(num1===0){
        Swal.fire("Ha ingresado 0.");
    }else{
        Swal.fire("No ingresó un número entero.")}    
}