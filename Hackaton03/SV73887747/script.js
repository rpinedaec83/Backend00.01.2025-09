function ejercicio1(){
    //1. Hacer un algoritmo en Javascript que lea un número 
    // por el teclado y determinar si tiene tres dígitos.

    let numero = Number.parseInt(prompt("Ingrese un numero: "));

    if(isNaN(numero)){
        alert("Lo ingresado no es numero.");
        return;
    }

    if(numero>99 && numero<1000){
        alert("El numero ingresado SI tiene 3 digitos.");
    } else{
        alert("El numero ingresado NO tiene tres digitos.");
    }
}

function ejercicio2(){
    // 2. Hacer un algoritmo en Javascript que lea un número 
    // entero por el teclado y determinar si es negativo.

    let numero = Number.parseInt(   prompt("Ingrese un numero: "));

    if(numero<0){
        alert("El numero ingresado es negativo");
    } else{
        alert("El numero ingresado es positivo");
    }
}

function ejercicio3(){
    // 3. Hacer un algoritmo en Javascript que lea 
    // un número y determinar si termina en 4.

    let numero = Number.parseInt(   prompt("Ingrese un numero: "));
    const get_last_digit = 10;

    if(numero%get_last_digit ===4){
        alert("El numero ingresado acaba en 4.");
    } else{
        alert("El numero ingresado NO acaba en 4.");

    }

}

function ejercicio4(){
    //4. Hacer un algoritmo en Javascript que lea tres 
    // números enteros y los muestre de menor a mayor.

    let numero1 = Number.parseInt( prompt("Ingrese el primer numero: "));
    let numero2 = Number.parseInt( prompt("Ingrese el segundo numero: "));
    let numero3 = Number.parseInt( prompt("Ingrese el tercer numero: "));

    let menor = 0;
    let medio = 0;
    let mayor = 0;

    if(numero1<numero2 && numero1<numero3){
        menor = numero1;
        if(numero2<numero3){
            medio = numero2;
            mayor = numero3;
        } else{
            medio = numero3;
            mayor = numero2;
        }
    } else{
        if(numero2<numero1 && numero2<numero3){
            menor = numero2
            if(numero1<numero3){
                medio = numero1;
                mayor = numero3;
            }else{
                medio = numero3;
                mayor = numero1
            }
        } else{
            menor = numero3;
            if(numero1 < numero2){
                medio = numero1;
                mayor = numero2
            } else{
                medio = numero2
                mayor = numero1
            }
        }
    }

alert("Los numeros ingresados de menor a mayor son: " + menor + ", " + medio + ", " + mayor + ".");

}

function ejercicio5(){
    //5. Hacer un algoritmo en Javascript para una tienda de zapatos 
    // que tiene una promoción de descuento para vender al mayor, esta 
    // dependerá del número de zapatos que se compren. Si son más de diez, 
    // se les dará un 10% de descuento sobre el total de la compra; si el 
    // número de zapatos es mayor de veinte pero menor de treinta, se le 
    // otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 
    // 40% de descuento. El precio de cada zapato es de $80.

    let cantidadZapatos = Number.parseInt( prompt("Ingrese la cantidad a comprar:"));
    let precioTotal = 80*cantidadZapatos;
    let descuento = 0;

    if(isNaN(cantidadZapatos)){
        alert("No ingreso una cantidad valida");
        return;
    }

    if( cantidadZapatos>0 && cantidadZapatos<=10){
        descuento = 0;
        alert("No aplica ningun descuento");
    } else{
        if(cantidadZapatos>10 && cantidadZapatos<=20){
            descuento = 10
            alert("Se aplica un descuento del " + descuento + "%");
        } else{
            if(cantidadZapatos>20 && cantidadZapatos<30){
                descuento = 20;
                alert("Se aplica un descuento del " + descuento + "%");
            } else {
                if(cantidadZapatos>=30){
                    descuento = 40
                    alert("Se aplica un descuento del " + descuento + "%");
                } else{
                    alert("No debe ingresar negativos.");
                    return;
                }

            }
        }
    }

    let precioFinal = precioTotal*((100-descuento)/100);
    alert("El precio final sera de: " + precioFinal +".");

}

function ejercicio6(){
    // 6. Hacer un algoritmo en Javascript para ayudar a un trabajador 
    // a saber cuál será su sueldo semanal, se sabe que si trabaja 40 
    // horas o menos, se le pagará $20 por hora, pero si trabaja más de 
    // 40 horas entonces las horas extras se le pagarán a $25 por hora.

    let horasTrabajadas = Number.parseInt( prompt("Ingrese cantidad de horas trabajadas:"));
    let pagoPorHora = 20;
    let pagoSemana = 0;

    if(horasTrabajadas>0 && horasTrabajadas<=40){
        pagoSemana = horasTrabajadas*pagoPorHora;
    }else{
        let pagoHoraExtra = 25;
        let horasNoExtra = 40;
        let horasExtra = horasTrabajadas - horasNoExtra;
        let pagoSinExtra = horasNoExtra*pagoPorHora;
        let pagoConExtra = horasExtra*pagoHoraExtra;
        pagoSemana = pagoConExtra + pagoSinExtra;
    }
alert("Su pago de la semana sera de $" + pagoSemana +".");
}

function ejercicio7(){
    /* 7. Hacer un algoritmo en Javascript para una 
        tienda de helado que da un descuento por compra 
        a sus clientes con membresía dependiendo de su 
        tipo, sólo existen tres tipos de membresía, tipo A, 
        tipo B y tipo C. Los descuentos son los siguientes:
            Tipo A 10% de descuento
            Tipo B 15% de descuento
            Tipo C 20% de descuento
    */

let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B o C):");
let precio = parseFloat(prompt("Ingrese el precio de la compra:"));
tipoMembresia = tipoMembresia.toUpperCase();
let descuento = 0;

switch (tipoMembresia) {
  case "A":
    descuento = precio * 0.20;
    break;
  case "B":
    descuento = precio * 0.15;
    break;
  case "C":
    descuento = precio * 0.05;
    break;
  default:
    alert("Tipo de membresía no válido. No se aplica descuento.");
    descuento = 0;
    break;
}

let totalFinal = precio - descuento;

alert("Descuento aplicado: $/ " + descuento);
alert("Total a pagar: $/ " + totalFinal);

}

function ejercicio8(){
    //8. Hacer un algoritmo en Javascript para calcular el 
    // promedio de tres notas y determinar si el estudiante 
    // aprobó o no.

    let nota1 = Number.parseInt( prompt("Ingrese la primera nota:"));
    let nota2 = Number.parseInt( prompt("Ingrese la segunda nota:"));
    let nota3 = Number.parseInt( prompt("Ingrese la tercera nota:"));

    let promedio = (nota1 + nota2 +nota3)/3;
    promedio = promedio.toFixed(2)
    let aprobo = "";

    if(promedio >= 10.5){
        aprobo = "si aprobo";
    }else{
        aprobo = "NO aprobo";
    }

    alert("El promedio de las notas es " +promedio+ " asi que el alumno " + aprobo);
}

function ejercicio9(){
    // 9. Hacer un algoritmo en Javascript para determinar el aumento 
    // de un trabajador, se debe tomar en cuenta que si ganaba más de 
    // $2000 tendrá un aumento del 5%, si generaba menos de $2000 su 
    // aumento será de un 10%.

    let sueldo = Number.parseInt( prompt("Ingrese el sueldo: "));
    if(sueldo>2000){
        aumento = sueldo*0.05;
    } else{
        aumento = sueldo*0.10;
    }

    let nuevoSueldo = sueldo + aumento;

    alert("El sueldo sin aumento es: $"+sueldo+"\n"+"El aumento es de: $" + aumento+ "\n"+ "El nuevo sueldo es: $"+ nuevoSueldo);

}

function ejercicio10(){
    // 10. Hacer un algoritmo en Javascript que diga si un 
    // número es par o impar.

    let numero = Number.parseInt( prompt("Ingrese un numero:"));

    if(numero%2===0){
        alert("El numero "+numero+" es par.");
    } else{
        alert("El numero "+numero+" NO es par.");
    }

}

function ejercicio11(){
    //11. Hacer un algoritmo en Javascript que lea tres números 
    // y diga cuál es el mayor.

    let num1 = Number.parseInt( prompt("Ingrese el primer numero:"));
    let num2 = Number.parseInt( prompt("Ingrese el segundo numero:"));
    let num3 = Number.parseInt( prompt("Ingrese el tercer numero:"));
    let mayor = 0;
    let mayorNum = "";

    if(num1>num2 && num1>num3){
        mayor = num1;
        mayorNum = "primero";
    } else if(num2>num1 && num2>num3){
            mayor= num2;
            mayorNum = "segundo"
    } else{
        mayor = num3;
        mayorNum = "tercero"
    }

alert("El mayor numero es el "+mayorNum+ ": " +mayor);

}

function ejercicio12(){
    // 12. Hacer un algoritmo en Javascript que lea dos números 
    // y diga cuál es el mayor.

    let num1 = Number.parseInt( prompt("Ingrese el primer numero:"));
    let num2 = Number.parseInt( prompt("Ingrese el segundo numero:"));
    let mayor = 0;
    let mayorNum = "";

    if(num1>num2){
        mayor = num1;
        mayorNum = "primero";
    } else{
        mayor = num2;
        mayorNum = "segundo"
    }

alert("El mayor numero es el "+mayorNum+ ": " +mayor);

}

function ejercicio13(){
    //13. Hacer un algoritmo en Javascript que lea una letra 
    // y diga si es una vocal.

    let letra = prompt("Ingrese una letra:");
    if(isNaN(letra)=== false){
        alert("No ingreso una letra.");
        return;
    }

    if(letra === "A" || letra === "a" || letra === "E" || letra === "e" || letra === "I" || letra === "i" || letra === "O" || letra === "o" || letra === "U" || letra === "u"){
        alert("La letra "+letra+" es una vocal.")
    }else{
        alert("La letra "+letra+" NO es una vocal.")
    }
}

function ejercicio14(){
    //14. Hacer un algoritmo en Javascript que lea un entero positivo 
    // del 1 al diez y al 9 y determine si es un número primo.
    let numero = Number.parseInt( prompt("Ingrese un numero del 1 al 10:"));

    if(numero === 2 || numero === 3 || numero === 5 || numero === 7){
        alert("El numero "+numero+" es primo");
    }else{
        alert("El numero "+numero+" NO es primo");
    }
}

function ejercicio15(){
    //15. Hacer un algoritmo en Javascript que convierta centímetros 
    // a pulgadas y libras a kilogramos.

    let opcion = prompt("Ingrese una opcion: \n 1-Convertir centimetros a pulgadas\n 2. Convertir libras a kilogramos")

    switch(opcion){
        case "1":
            let cm = Number.parseInt( prompt("Ingrese la cantidad de centimetros:"));
            let inches = cm/2.54;
            alert(cm +" cm equivalen a "+inches.toFixed(2)+" pulgadas.");
            break;
        case "2":
            let libras = Number.parseInt( prompt("Ingrese la cantidad de libras:"));
            let kg = libras* 0.453592;
            alert(libras +" libras equivalen a "+kg.toFixed(2)+" kilogramos.");
            break;
        default:
            alert("No ingreso una opcion valida.");
            break;
    }
}

function ejercicio16(){
    //16. Hacer un algoritmo en Javascript que lea un número y según 
    // ese número, indique el día que corresponde.

    let dia = Number.parseInt(prompt("Ingrese un numero del 1 al 7:"));

    switch(dia){
        case 1:
            alert("Lunes.");
            break;
        case 2:
            alert("Martes.");
            break;
        case 3:
            alert("Miercoles.");
           break;
        case 4:
            alert("Jueves.");
            break;
        case 5:
            alert("Viernes.");
            break;
        case 6:
            alert("Sabado.");
            break;
        case 7:
            alert("Domingo.");
            break;
        default:
            alert("Ingreso un numero fuera del rango.")
        }

}

function ejercicio17(){
    //17. Hacer un algoritmo en Javascript donde se ingrese una hora 
    // y nos calcule la hora dentro de un segundo.

    let horas = Number.parseInt( prompt("Ingrese la hora (0 al 23):"));
    let minutos = Number.parseInt( prompt("Ingrese los minutos (0 al 59):"));
    let segundos = Number.parseInt( prompt("Ingrese los segundos (0 al 59):"));

    if(horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59){
        segundos = segundos+1;
        if(segundos===60){
            segundos=0;
            minutos=minutos+1;
        }
        if(minutos===60){
            minutos=0;
            horas=horas+1;
        }
        if(horas===24){
            horas=0;
        }
        alert("La hora dentro de un segundo sera: "+horas+":"+minutos+":"+segundos);
    }

}

function ejercicio18(){
    /*18. Hacer un algoritmo en Javascript para una empresa se encarga de la venta 
        y distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
        (supongamos un único producto de una única marca) por cantidad. 
        Los precios son:
             $10. Si se compran unidades separadas hasta 9.
             $8. Si se compran entre 10 unidades hasta 99.
             $7. Entre 100 y 499 unidades.
             $6. Para mas de 500 unidades.
        La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Javascript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
    */

let cantidad = Number.parseInt(prompt("Ingrese la cantidad de CDs a comprar:"));
let precioUnitario;
let totalVenta;
let gananciaVendedor;

if (cantidad <= 9) {
  precioUnitario = 10;
} else if (cantidad <= 99) {
  precioUnitario = 8;
} else if (cantidad <= 499) {
  precioUnitario = 7;
} else {
  precioUnitario = 6;
}

totalVenta = cantidad * precioUnitario;

gananciaVendedor = totalVenta * 0.0825;

alert("Precio unitario: $"+ precioUnitario.toFixed(2)+ "\n"+ "Total a pagar por el cliente: $"+ totalVenta.toFixed(2)+"\n"+"Ganancia para el vendedor: $"+gananciaVendedor.toFixed(2));

}

function ejercicio19(){
    /*19. Hacer un algoritmo en Javascript para una heladería se tienen 4 tipos de empleados ordenados 
        de la siguiente forma con su número identificador y salario diario correspondiente:
            Cajero (56$/día).
            Servidor (64$/día).
            Preparador de mezclas (80$/día).
            Mantenimiento (48$/día).
        El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que 
        representen al número identificador del empleado y la cantidad de días que trabajó en la 
        semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el 
        dueño le debe pagar al empleado que ingresó
    */

let idEmpleado = parseInt(prompt("Ingrese el número identificador del empleado:\n1 - Cajero\n2 - Servidor\n3 - Preparador de mezclas\n4 - Mantenimiento"));
let diasTrabajados = parseInt(prompt("Ingrese la cantidad de días trabajados (máximo 6):"));

let salarioDiario;
let nombreEmpleado;


    if (diasTrabajados > 0 && diasTrabajados <= 6) {
        switch (idEmpleado) {
            case 1:
            salarioDiario = 56;
            nombreEmpleado = "Cajero";
            break;
            case 2:
            salarioDiario = 64;
            nombreEmpleado = "Servidor";
            break;
            case 3:
            salarioDiario = 80;
            nombreEmpleado = "Preparador de mezclas";
            break;
            case 4:
            salarioDiario = 48;
            nombreEmpleado = "Mantenimiento";
            break;
            default:
            alert("Identificador de empleado no válido.");
            salarioDiario = 0;
            nombreEmpleado = "Desconocido";
            break;
        }    
    } else {
    alert("Cantidad de días inválida. Debe estar entre 0 y 6."); 
    }

    if (salarioDiario > 0) {
        let totalPagar = salarioDiario * diasTrabajados;
        alert("Empleado: " + nombreEmpleado + "\nTotal a pagar: $ " + totalPagar.toFixed(2));
    }    
}

function ejercicio20(){
    /*20. Hacer un algoritmo en Javascript que que lea 4 números enteros positivos y verifique y 
    realice las siguientes operaciones:
    ¿Cuántos números son Pares?
    ¿Cuál es el mayor de todos?
    Si el tercero es par, calcular el cuadrado del segundo.
    Si el primero es menor que el cuarto, calcular la media de los 4 números.
    Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
    Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
    */

let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
let num4 = parseInt(prompt("Ingrese el cuarto número entero positivo:"));

let pares = 0;
if (num1 % 2 === 0) pares++;
if (num2 % 2 === 0) pares++;
if (num3 % 2 === 0) pares++;
if (num4 % 2 === 0) pares++;
alert("Cantidad de números pares: " + pares);

let mayor = Math.max(num1, num2, num3, num4);
alert("El mayor número es: " + mayor);

if (num3 % 2 === 0) {
  let cuadradoSegundo = num2 ** 2;
  alert("El tercero es par. Cuadrado del segundo: " + cuadradoSegundo);
}

if (num1 < num4) {
  let media = (num1 + num2 + num3 + num4) / 4;
  alert("El primero es menor que el cuarto. Media de los 4 números: " + media.toFixed(2));
}

if (num2 > num3 && num3 >= 50 && num3 <= 700) {
  let suma = num1 + num2 + num3 + num4;
  alert("El segundo es mayor que el tercero y el tercero está entre 50 y 700.\nSuma de los 4 números: " + suma);
}

}

function ejercicio21(){
    //21. Hacer un algoritmo en Javascript que permita calcular 
    // el factorial de un número.

    let num = Number.parseInt( prompt("Ingrese un numero entero positivo:"));
    let factorial=1;

    if(isNaN(num)){
        alert("Debe ingresar un numero");
        return;
    }
    if(num<0){
        alert("El numero ingresado debe ser positivo.");
    }else{
        for(let i=1; i<=num; i++){
            factorial = factorial*i;
        }
    }
alert("El factorial de "+num+" es: "+ factorial +".");
}

function ejercicio22(){
    //22. Hacer un algoritmo en Javascript para calcular la 
    // suma de los n primeros números.

let n = parseInt(prompt("Ingrese un número entero positivo:"));
let suma = 0;

if (n > 0) {
  // Itera desde 1 hasta n y acumula la suma
  for (let i = 1; i <= n; i++) {
    suma += i;
  }

  alert("La suma de los " + n + " primeros números es: " + suma);
} else {
  alert("Por favor ingrese un número entero positivo mayor que cero.");
}

}

function ejercicio23(){
    //23. Hacer un algoritmo en Javascript para calcular la suma de 
    // los números impares menores o iguales a n.

let n = parseInt(prompt("Ingrese un número entero positivo:"));
let suma = 0;

if (n > 0) {
  for (let i = 1; i <= n; i += 2) {
    suma += i;
  }
  alert("La suma de los números impares menores o iguales a " + n + " es: " + suma);
} else {
  alert("Por favor ingrese un número entero positivo mayor que cero.");
}

}

function ejercicio24(){
    //24. Hacer un algoritmo en Javascript para realizar la suma 
    // de todos los números pares hasta el 1000.

let suma = 0;

for (let i = 2; i <= 1000; i += 2) {
  suma += i;
}
alert("La suma de todos los números pares hasta 1000 es: " + suma);
}

function ejercicio25(){
    //21. Hacer un algoritmo en Javascript que permita calcular el factorial de un número.

     let num = Number.parseInt( prompt("Ingrese un numero:"));
     let factorial =1 ;
     let contador =1;

     if(num<0){
        alert("El numero ingresado debe ser positivo.");
     }else{
        while(contador<=num){
            factorial = factorial*contador;
            contador++;
        }
     }
alert("El factorial de "+num+" es: "+ factorial);
}

function ejercicio26(){
    //26. Hacer un algoritmo en Javascript para calcular el resto y 
    // cociente por medio de restas sucesivas.

let dividendo = Number.parseInt(prompt("Ingrese el dividendo (número mayor):"));
let divisor = Number.parseInt(prompt("Ingrese el divisor (número menor):"));

let cociente = 0;
let resto = dividendo;

if (dividendo >= 0 && divisor > 0) {
  while (resto >= divisor) {
    resto -= divisor;
    cociente++;
  }

  alert("Cociente: " + cociente);
  alert("Resto: " + resto);
} else {
  alert("Por favor ingrese números válidos. El dividendo debe ser ≥ 0 y el divisor > 0.");
}

}

function ejercicio27(){
    //27. Hacer un algoritmo en Javascript para determinar la media 
    // de una lista indefinida de números positivos, se debe acabar 
    // el programa al ingresar un número negativo.

let suma = 0;
let contador = 0;

while (true) {
  let numero = Number.parseFloat(prompt("Ingrese un número positivo (negativo para terminar):"));

  if (numero < 0) {
    break;
  }

  suma += numero;
  contador++;
}

if (contador > 0) {
  let media = suma / contador;
  alert("La media de los " + contador + " números ingresados es: " + media.toFixed(2));
} else {
  alert("No se ingresaron números positivos.");
}

}

function ejercicio28(){
    //28. Hacer un algoritmo en Javascript para calcular la suma 
    // de los primeros cien números con un ciclo repetir.

let contador = 1;
let suma = 0;
do {
  suma += contador;
  contador++;
} while (contador <= 100);
alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio29(){
    //29. Hacer un algoritmo en Javascript para calcular la suma 
    // de los primeros cien números con un ciclo mientras.
let contador = 1;
let suma = 0;
while (contador <= 100) {
  suma += contador;
  contador++;
}
alert("La suma de los primeros 100 números es: " + suma);
}

function ejercicio30(){
    //30. Hacer un algoritmo en Javascript para calcular la suma 
    // de los primeros cien números con un ciclo para.

    let contador = 0;
    let suma =0;

    for(contador;contador<=100;contador++){
        suma += contador
    }
    alert("La suma de los primero 100 numeros es: "+suma);
}

function ejercicio31(){
    //31. Hacer un algoritmo en Javascript parar calcular la 
    // media de los números pares e impares, sólo se ingresará 
    // diez números.

let sumaPares = 0;
let sumaImpares = 0;
let contadorPares = 0;
let contadorImpares = 0;

for (let i = 1; i <= 10; i++) {
  let numero = Number.parseInt(prompt("Ingrese el número #" + i + ":"));

  if (numero % 2 === 0) {
    sumaPares += numero;
    contadorPares++;
  } else {
    sumaImpares += numero;
    contadorImpares++;
  }
}

if (contadorPares > 0) {
  mediaPares = sumaPares / contadorPares;
} else {
  mediaPares = 0;
}

if (contadorImpares > 0) {
  mediaImpares = sumaImpares / contadorImpares;
} else {
  mediaImpares = 0;
}

alert("Media de los números pares: " + mediaPares.toFixed(2));
alert("Media de los números impares: " + mediaImpares.toFixed(2));
}

function ejercicio32(){
    //32. Se quiere saber cuál es la ciudad con la población de más personas, son 
    // tres provincias y once ciudades, hacer un algoritmo en Javascript que nos 
    // permita saber eso. 

let ciudadMayor = "";
let provinciaMayor = "";
let mayorPoblacion = 0;

for (let i = 1; i <= 11; i++) {
  let ciudad = prompt("Ingrese el nombre de la ciudad #" + i + ":");
  let provincia = prompt("Ingrese la provincia de " + ciudad + ":");
  let poblacion = parseInt(prompt("Ingrese la población de " + ciudad + ":"));

  if (poblacion > mayorPoblacion) {
    mayorPoblacion = poblacion;
    ciudadMayor = ciudad;
    provinciaMayor = provincia;
  }
}

alert("La ciudad con mayor población es: " + ciudadMayor +
      "\nProvincia: " + provinciaMayor +
      "\nPoblación: " + mayorPoblacion);

}

function ejercicio33(){
    //33. Hacer un algoritmo en Javascript que permita al usuario continuar con 
    // el programa.

let opcion;
let numero;

do {
  numero = Number.parseInt(prompt("Ingrese un número:"));
  if(isNaN(numero)){
    alert("No ingreso un numero.");
  }else{
  alert("El número ingresado fue: " + numero);    
  }
  opcion = prompt("¿Desea continuar? (S/N):");
} while (opcion !== "N" && opcion !== "n");

alert("Programa finalizado.");

}

function ejercicio34(){
    //34. Hacer un algoritmo en Javascript que imprima la tabla 
    // de multiplicar de los números del uno al nueve.

    for (let i = 1; i <= 9; i++) {
    console.log("Tabla del " + i + ":");
    for (let j = 1; j <= 10; j++) {
        console.log(i + " × " + j + " = " + (i * j));
    }
    console.log(""); // Línea en blanco para separar cada tabla
    }
}

function ejercicio35(){
    //35. Hacer un algoritmo en Javascript que nos permita saber 
    // cuál es el número mayor y menor, se debe ingresar sólo 
    // veinte números.

    let numero;
    let mayor;
    let menor;

    for (let i = 1; i <= 20; i++) {
    numero = Number.parseFloat(prompt("Ingrese el número #" + i + ":"));

    if (i === 1) {
        mayor = numero;
        menor = numero;
    } else {
        if (numero > mayor) {
        mayor = numero;
        }
        if (numero < menor) {
        menor = numero;
        }
    }
    }

    alert("El número mayor es: " + mayor);
    alert("El número menor es: " + menor);
}

function ejercicio36(){
    //36. Hacer un algoritmo en Javascript para calcular la 
    // serie de Fibonacci.

    let n = Number.parseInt(prompt("¿Cuántos términos de la serie Fibonacci desea ver?"));

    let a = 0;
    let b = 1;
    let siguiente;
    let resultado = "Serie Fibonacci:\n";

    for (let i = 1; i <= n; i++) {
    resultado += a + " ";

    siguiente = a + b;
    a = b;
    b = siguiente;
    }

    alert(resultado);
}

function ejercicio37(){
    //37. Hacer un algoritmo en Javascript para conseguir el 
    // M.C.D de un número por medio del algoritmo de Euclides.

    let a = Number.parseInt(prompt("Ingrese el primer número:"));
    let b = Number.parseInt(prompt("Ingrese el segundo número:"));

    while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
    }

    alert("El M.C.D. es: " + a);
}

function ejercicio38(){
    //38. Hacer un algoritmo en Javascript que nos permita saber 
    // si un número es un número perfecto.

    let numero = Number.parseInt(prompt("Ingrese un número entero positivo:"));
    let suma = 0;

    if (numero > 0) {
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
        suma += i;
        }
    }

    if (suma === numero) {
        alert(numero + " es un número perfecto.");
    } else {
        alert(numero + " no es un número perfecto.");
    }
    } else {
    alert("Por favor ingrese un número entero positivo mayor que cero.");
    }

}

function ejercicio39(){
    /*39. Hacer un algoritmo en Javascript que cumpla con la 
    aproximación del número pi con la serie de Gregory-Leibniz. 
    La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...*/

    let n = parseInt(prompt("¿Cuántos términos desea usar para aproximar π?"));
    let pi = 0;
    let signo = 1;

    for (let i = 1; i <= n * 2; i += 2) {
    pi += signo * (4 / i);
    signo *= -1;
    }

    alert("Aproximación de π con " + n + " términos: " + pi);
}

function ejercicio40(){
    /*40. Hacer un algoritmo en Javascript que cumpla con la 
    aproximación del número pi con la serie de Nilakantha. 
    La formula que se debe aplicar es:

    Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...*/

    let n = Number.parseInt(prompt("¿Cuántos términos desea usar para aproximar π?"));
    let pi = 3;
    let signo = 1;

    for (let i = 2; i <= n * 2; i += 2) {
    let termino = 4 / (i * (i + 1) * (i + 2));
    pi += signo * termino;
    signo *= -1;
    }

    alert("Aproximación de π con " + n + " términos: " + pi);
}