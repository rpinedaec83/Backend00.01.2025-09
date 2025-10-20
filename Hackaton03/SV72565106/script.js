function ejercicio01(){
    //1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.

    let numero = Number.parseInt(prompt("Escribe un numero"));

    if(isNaN(numero)){
        alert("Lo que escribiste no es un numero");
        return;

    }
    if (numero>99 && numero<1000){
        alert("Si tiene 3 digitos")
    }else{
        alert("No tiene 3 digitos")
    }
}


function ejercicio02() {
    /* 2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y determine si es negativo. */

    let numero = Number.parseInt(prompt("Ingresa un número entero:"));

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número entero válido.");
        return;
    }

    let resultado = "";

    if (numero < 0) {
        resultado = `El número ${numero} es negativo.`;
    } else {
        resultado = `El número ${numero} no es negativo.`;
    }

    alert(resultado);
    console.log(resultado);
}


function ejercicio03(){
    // 3. Hacer un algoritmo en Javascript que lea un número y determinar si termina en 4.

    let numero = prompt("Escribe un número:");

    if (isNaN(numero)) {
        alert("Lo que escribiste no es un número");
        return;
    }

    let ultimoDigito = Math.abs(parseInt(numero)) % 10;

    if (ultimoDigito === 4) {
        alert("El número termina en 4");
    } else {
        alert("El número no termina en 4");
    }
}


function ejercicio04() {
    // 4. Hacer un algoritmo en Javascript que lea tres números enteros y los muestre de menor a mayor.

    let num1 = Number.parseInt(prompt("Ingresa el primer número entero:"));
    let num2 = Number.parseInt(prompt("Ingresa el segundo número entero:"));
    let num3 = Number.parseInt(prompt("Ingresa el tercer número entero:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingresa números enteros válidos.");
        return;
    }

    let menor, medio, mayor;

    if (num1 <= num2 && num1 <= num3) {
        menor = num1;
        if (num2 <= num3) {
            medio = num2;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num2;
        }
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2;
        if (num1 <= num3) {
            medio = num1;
            mayor = num3;
        } else {
            medio = num3;
            mayor = num1;
        }
    } else {
        menor = num3;
        if (num1 <= num2) {
            medio = num1;
            mayor = num2;
        } else {
            medio = num2;
            mayor = num1;
        }
    }

    let resultado = `Los números de menor a mayor son: ${menor}, ${medio}, ${mayor}`;

    alert(resultado);
    console.log(resultado);
}


function ejercicio05() {
    /* 5. Hacer un algoritmo en Javascript para una tienda de zapatos que tiene una promoción de descuento 
        para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, 
        se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte 
        pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de 
        descuento. El precio de cada zapato es de $80.*/

    const precio = 80;
    let total = 0;
    let pagoTotal = 0;
    let descuento = 0;

    let cantidad = Number.parseInt(
        prompt("Ingresa la cantidad de zapatos que deseas comprar:")
    );

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida de zapatos");
        return;
    }

    total = cantidad * precio;
    pagoTotal = total;
    

    if (cantidad >= 10 && cantidad < 20){
        descuento = total * 0.1;
        pagoTotal = total - descuento;
    }
    
    if (cantidad >= 20 && cantidad < 30){
        descuento = total * 0.2;
        pagoTotal = total - descuento;
    }

    if (cantidad >= 30){
        descuento = total * 0.4;
        pagoTotal = total - descuento;
    } 

    const result =`
    Cantidad comprada: ${cantidad}
    Total sin descuento: ${total}
    Descuento: ${descuento}
    Total a pagar: ${pagoTotal}
    `;
    alert(result)
    console.log(result)
}


function ejercicio06() {
    /* 6. Hacer un algoritmo en Javascript para ayudar a un trabajador a saber cuál será su sueldo semanal,
        se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas
        entonces las horas extras se le pagarán a $25 por hora. */

    const pagoHoraNormal = 20;
    const pagoHoraExtra = 25;
    const limiteHoras = 40;

    let horasTrabajadas = Number.parseInt(
        prompt("Ingresa la cantidad de horas trabajadas en la semana:")
    );

    if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
        alert("Por favor, ingresa una cantidad válida de horas trabajadas");
        return;
    }

    let sueldoTotal = 0;

    if (horasTrabajadas <= limiteHoras) {
        sueldoTotal = horasTrabajadas * pagoHoraNormal;
    } else {
        let horasExtras = horasTrabajadas - limiteHoras;
        sueldoTotal = (limiteHoras * pagoHoraNormal) + (horasExtras * pagoHoraExtra);
    }

    const resultado = `
    Horas trabajadas: ${horasTrabajadas}
    Sueldo total semanal: $${sueldoTotal}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio07() {
    /* 7. Hacer un algoritmo en Javascript para una tienda de helado que da un descuento por compra a sus clientes 
        con membresía dependiendo de su tipo, sólo existen tres tipos de membresía: A, B y C.
        Los descuentos son los siguientes:
        Tipo A → 10% de descuento
        Tipo B → 15% de descuento
        Tipo C → 20% de descuento. */

    let tipoMembresia = prompt("Ingresa el tipo de membresía (A, B o C):");
    let totalCompra = Number.parseFloat(prompt("Ingresa el total de tu compra:"));
    let descuento = 0;
    let totalPagar = 0;

    if (!tipoMembresia || isNaN(totalCompra) || totalCompra <= 0) {
        alert("Datos inválidos. Asegúrate de ingresar un tipo de membresía válido y un monto correcto.");
        return;
    }

    tipoMembresia = tipoMembresia.toUpperCase();

    if (tipoMembresia === "A") {
        descuento = totalCompra * 0.10;
    } else if (tipoMembresia === "B") {
        descuento = totalCompra * 0.15;
    } else if (tipoMembresia === "C") {
        descuento = totalCompra * 0.20;
    } else {
        alert("Tipo de membresía no válido. Debe ser A, B o C.");
        return;
    }

    totalPagar = totalCompra - descuento;

    const resultado = `
    Tipo de membresía: ${tipoMembresia}
    Total de compra: $${totalCompra}
    Descuento aplicado: $${descuento}
    Total a pagar: $${totalPagar}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio08() {
    /* 8. Hacer un algoritmo en Javascript para calcular el promedio de tres notas 
        y determinar si el estudiante aprobó o no. */

    let nota1 = Number.parseFloat(prompt("Ingresa la primera nota:"));
    let nota2 = Number.parseFloat(prompt("Ingresa la segunda nota:"));
    let nota3 = Number.parseFloat(prompt("Ingresa la tercera nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Debes ingresar valores numéricos válidos para las tres notas.");
        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    let mensaje = "";

    if (promedio >= 10) {
        mensaje = "El estudiante aprobó.";
    } else {
        mensaje = "El estudiante no aprobó.";
    }

    const resultado = `
    Nota 1: ${nota1}
    Nota 2: ${nota2}
    Nota 3: ${nota3}
    Promedio: ${promedio.toFixed(2)}
    Resultado: ${mensaje}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio09() {
    /* 9. Hacer un algoritmo en Javascript para determinar el aumento de un trabajador.
        Se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%,
        si ganaba menos de $2000 su aumento será de un 10%. */

    let sueldo = Number.parseFloat(prompt("Ingresa el sueldo actual del trabajador:"));
    let aumento = 0;
    let nuevoSueldo = 0;

    if (isNaN(sueldo) || sueldo <= 0) {
        alert("Por favor, ingresa un sueldo válido.");
        return;
    }

    if (sueldo > 2000) {
        aumento = sueldo * 0.05;
    } else {
        aumento = sueldo * 0.10;
    }

    nuevoSueldo = sueldo + aumento;

    const resultado = `
    Sueldo anterior: $${sueldo}
    Aumento: $${aumento}
    Nuevo sueldo: $${nuevoSueldo}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio10() {
    /* 10. Hacer un algoritmo en Javascript que diga si un número es par o impar. */

    let numero = Number.parseInt(prompt("Ingresa un número entero:"));

    if (isNaN(numero)) {
        alert("Lo que escribiste no es un número válido.");
        return;
    }

    let mensaje = "";

    if (numero % 2 === 0) {
        mensaje = "El número es par.";
    } else {
        mensaje = "El número es impar.";
    }

    const resultado = `
    Número ingresado: ${numero}
    Resultado: ${mensaje}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio11() {
    /* 11. Hacer un algoritmo en Javascript que lea tres números y diga cuál es el mayor. */

    let num1 = Number.parseFloat(prompt("Ingresa el primer número:"));
    let num2 = Number.parseFloat(prompt("Ingresa el segundo número:"));
    let num3 = Number.parseFloat(prompt("Ingresa el tercer número:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Debes ingresar tres números válidos.");
        return;
    }

    let mayor = num1;

    if (num2 > mayor) {
        mayor = num2;
    }

    if (num3 > mayor) {
        mayor = num3;
    }

    const resultado = `
    Números ingresados: ${num1}, ${num2}, ${num3}
    El número mayor es: ${mayor}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio12() {
    /* 12. Hacer un algoritmo en Javascript que lea dos números y diga cuál es el mayor. */

    let num1 = Number.parseFloat(prompt("Ingresa el primer número:"));
    let num2 = Number.parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Debes ingresar dos números válidos.");
        return;
    }

    let mensaje = "";

    if (num1 > num2) {
        mensaje = `El número mayor es: ${num1}`;
    } else if (num2 > num1) {
        mensaje = `El número mayor es: ${num2}`;
    } else {
        mensaje = "Ambos números son iguales.";
    }

    const resultado = `
    Número 1: ${num1}
    Número 2: ${num2}
    Resultado: ${mensaje}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio13() {
    /* 13. Hacer un algoritmo en Javascript que lea una letra y diga si es una vocal. */

    let letra = prompt("Ingresa una letra:");

    if (!letra || letra.length !== 1 || !isNaN(letra)) {
        alert("Debes ingresar una sola letra válida.");
        return;
    }

    letra = letra.toLowerCase();

    let mensaje = "";

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        mensaje = "La letra es una vocal.";
    } else {
        mensaje = "La letra no es una vocal.";
    }

    const resultado = `
    Letra ingresada: ${letra}
    Resultado: ${mensaje}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio14() {
    /* 14. Hacer un algoritmo en Javascript que lea un número entero positivo del 1 al 10
        y determine si es un número primo. */

    let numero = Number.parseInt(prompt("Ingresa un número entero del 1 al 10:"));

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Debes ingresar un número entero válido entre 1 y 10.");
        return;
    }

    let esPrimo = true;

    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    let mensaje = esPrimo
        ? "El número es primo."
        : "El número no es primo.";

    const resultado = `
    Número ingresado: ${numero}
    Resultado: ${mensaje}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio15() {
    /* 15. Hacer un algoritmo en Javascript que convierta centímetros a pulgadas y libras a kilogramos. */

    let centimetros = Number.parseFloat(prompt("Ingresa la cantidad en centímetros:"));
    let libras = Number.parseFloat(prompt("Ingresa la cantidad en libras:"));

    if (isNaN(centimetros) || centimetros < 0 || isNaN(libras) || libras < 0) {
        alert("Por favor, ingresa valores numéricos válidos y positivos.");
        return;
    }

    const pulgadas = centimetros / 2.54;
    const kilogramos = libras / 2.2046;

    const resultado = `
    Centímetros ingresados: ${centimetros}
    Equivalente en pulgadas: ${pulgadas}
    
    Libras ingresadas: ${libras}
    Equivalente en kilogramos: ${kilogramos}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio16() {
    /* 16. Hacer un algoritmo en Javascript que lea un número y según ese número,
        indique el día que corresponde. */

    let numero = Number.parseInt(prompt("Ingresa un número del 1 al 7:"));

    if (isNaN(numero) || numero < 1 || numero > 7) {
        alert("Debes ingresar un número válido entre 1 y 7.");
        return;
    }

    let dia = "";

    if (numero === 1) dia = "Lunes";
    else if (numero === 2) dia = "Martes";
    else if (numero === 3) dia = "Miércoles";
    else if (numero === 4) dia = "Jueves";
    else if (numero === 5) dia = "Viernes";
    else if (numero === 6) dia = "Sábado";
    else if (numero === 7) dia = "Domingo";

    const resultado = `
    Número ingresado: ${numero}
    Día correspondiente: ${dia}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio17() {
    /* 17. Hacer un algoritmo en Javascript donde se ingrese una hora y nos calcule la hora dentro de un segundo. */

    let horas = Number.parseInt(prompt("Ingresa la hora (0 a 23):"));
    let minutos = Number.parseInt(prompt("Ingresa los minutos (0 a 59):"));
    let segundos = Number.parseInt(prompt("Ingresa los segundos (0 a 59):"));

    if (
        isNaN(horas) || horas < 0 || horas > 23 ||
        isNaN(minutos) || minutos < 0 || minutos > 59 ||
        isNaN(segundos) || segundos < 0 || segundos > 59
    ) {
        alert("Por favor, ingresa una hora válida.");
        return;
    }

    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    if (horas === 24) {
        horas = 0;
    }

    const resultado = `
    Hora actualizada dentro de un segundo:
    ${horas} horas, ${minutos} minutos, ${segundos} segundos.
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio18() {
    /* 18. Hacer un algoritmo en Javascript para una empresa que se encarga de la venta y distribución de CD vírgenes.
        Los precios son:
        $10 si se compran hasta 9 unidades.
        $8 si se compran entre 10 y 99 unidades.
        $7 si se compran entre 100 y 499 unidades.
        $6 si se compran más de 500 unidades.
        La ganancia para el vendedor es de 8.25% de la venta.
        Se debe calcular el precio total para el cliente y la ganancia del vendedor. */

    let cantidad = Number.parseInt(prompt("Ingresa la cantidad de CDs a vender:"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida de CDs.");
        return;
    }

    let precioUnitario = 0;

    if (cantidad <= 9) {
        precioUnitario = 10;
    } else if (cantidad >= 10 && cantidad <= 99) {
        precioUnitario = 8;
    } else if (cantidad >= 100 && cantidad <= 499) {
        precioUnitario = 7;
    } else if (cantidad >= 500) {
        precioUnitario = 6;
    }

    let totalVenta = cantidad * precioUnitario;
    let gananciaVendedor = totalVenta * 0.0825;

    const resultado = `
    Cantidad de CDs: ${cantidad}
    Precio unitario: $${precioUnitario}
    Total de la venta: $${totalVenta}
    Ganancia del vendedor: $${gananciaVendedor}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio19() {
    /* 19. Hacer un algoritmo en Javascript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
        con su número identificador y salario diario correspondiente:

        Cajero (56$/día).

        Servidor (64$/día).

        Preparador de mezclas (80$/día).

        Mantenimiento (48$/día).

        El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
        identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le 
        mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó. */

    let idEmpleado = Number.parseInt(prompt("Ingresa el número identificador del empleado (1-4):"));
    let diasTrabajados = Number.parseInt(prompt("Ingresa la cantidad de días trabajados (máximo 6):"));

    if (
        isNaN(idEmpleado) || idEmpleado < 1 || idEmpleado > 4 ||
        isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6
    ) {
        alert("Datos inválidos. Verifica que el ID esté entre 1 y 4, y los días entre 1 y 6.");
        return;
    }

    let salarioDiario = 0;
    let puesto = "";

    if (idEmpleado === 1) {
        puesto = "Cajero";
        salarioDiario = 56;
    } else if (idEmpleado === 2) {
        puesto = "Servidor";
        salarioDiario = 64;
    } else if (idEmpleado === 3) {
        puesto = "Preparador de mezclas";
        salarioDiario = 80;
    } else if (idEmpleado === 4) {
        puesto = "Mantenimiento";
        salarioDiario = 48;
    }

    let pagoTotal = salarioDiario * diasTrabajados;

    const resultado = `
    Empleado: ${puesto}
    Días trabajados: ${diasTrabajados}
    Pago por día: $${salarioDiario}
    Total a pagar: $${pagoTotal}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio20() {
    /* 20. Hacer un algoritmo en Javascript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

        ¿Cuántos números son Pares?

        ¿Cuál es el mayor de todos?

        Si el tercero es par, calcular el cuadrado del segundo.

        Si el primero es menor que el cuarto, calcular la media de los 4 números.

        Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
        Si cumple se cumple la segunda condición, calcular la suma de los 4 números. */

    let num1 = Number.parseInt(prompt("Ingresa el primer número:"));
    let num2 = Number.parseInt(prompt("Ingresa el segundo número:"));
    let num3 = Number.parseInt(prompt("Ingresa el tercer número:"));
    let num4 = Number.parseInt(prompt("Ingresa el cuarto número:"));

    if (isNaN(num1) || num1 <= 0 || isNaN(num2) || num2 <= 0 || isNaN(num3) || num3 <= 0 || isNaN(num4) || num4 <= 0) {
        alert("Por favor, ingresa solo números enteros positivos.");
        return;
    }

    let pares = 0;
    if (num1 % 2 === 0) pares++;
    if (num2 % 2 === 0) pares++;
    if (num3 % 2 === 0) pares++;
    if (num4 % 2 === 0) pares++;

    let mayor = num1;
    if (num2 > mayor) mayor = num2;
    if (num3 > mayor) mayor = num3;
    if (num4 > mayor) mayor = num4;

    let resultados = `
    Números ingresados: ${num1}, ${num2}, ${num3}, ${num4}
    Cantidad de números pares: ${pares}
    El número mayor es: ${mayor}
    `;

    if (num3 % 2 === 0) {
        let cuadrado = num2 * num2;
        resultados += `\nEl tercero es par, el cuadrado del segundo es: ${cuadrado}`;
    }

    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4) / 4;
        resultados += `\nEl primero es menor que el cuarto, la media de los 4 números es: ${media}`;
    }

    if (num2 > num3) {
        if (num3 >= 50 && num3 <= 700) {
            let suma = num1 + num2 + num3 + num4;
            resultados += `\nEl segundo es mayor que el tercero y el tercero está entre 50 y 700. La suma de los 4 números es: ${suma}`;
        }
    }

    alert(resultados);
    console.log(resultados);
}


function ejercicio21() {
    /* 21. Hacer un algoritmo en Javascript que permita calcular el factorial de un número. */

    let numero = Number.parseInt(prompt("Ingresa un número entero positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    const resultado = `
    Número ingresado: ${numero}
    Factorial: ${factorial}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio22() {
    /* 22. Hacer un algoritmo en Javascript para calcular la suma de los n primeros números. */

    let n = Number.parseInt(prompt("Ingresa un número entero positivo:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    const resultado = `
    Valor de n: ${n}
    La suma de los ${n} primeros números es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio23() {
    /* 23. Hacer un algoritmo en Javascript para calcular la suma de los números impares menores o iguales a n. */

    let n = Number.parseInt(prompt("Ingresa un número entero positivo:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let suma = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    const resultado = `
    Valor de n: ${n}
    La suma de los números impares menores o iguales a ${n} es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio24() {
    /* 24. Hacer un algoritmo en Javascript para realizar la suma de todos los números pares hasta el 1000. */

    let suma = 0;

    for (let i = 2; i <= 1000; i += 2) {
        suma += i;
    }

    const resultado = `
    La suma de todos los números pares hasta 1000 es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio25() {
    /* 25. Hacer un algoritmo en Javascript para calcular el factorial de un número de una forma distinta. */

    let numero = Number.parseInt(prompt("Ingresa un número entero positivo:"));

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let factorial = 1;
    let i = numero;

    while (i > 1) {
        factorial *= i;
        i--;
    }

    const resultado = `
    Número ingresado: ${numero}
    Factorial calculado: ${factorial}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio26() {
    /* 26. Hacer un algoritmo en Javascript para calcular el resto y cociente por medio de restas sucesivas. */

    let dividendo = Number.parseInt(prompt("Ingresa el dividendo (número a dividir):"));
    let divisor = Number.parseInt(prompt("Ingresa el divisor (número por el que se divide):"));

    if (isNaN(dividendo) || isNaN(divisor) || dividendo < 0 || divisor <= 0) {
        alert("Por favor, ingresa valores válidos. El dividendo debe ser positivo y el divisor mayor que cero.");
        return;
    }

    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
        resto -= divisor;
        cociente++;
    }

    const resultado = `
    Dividendo: ${dividendo}
    Divisor: ${divisor}
    Cociente: ${cociente}
    Resto: ${resto}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio27() {
    /* 27. Hacer un algoritmo en Javascript para determinar la media de una lista indefinida de números positivos,
        se debe acabar el programa al ingresar un número negativo. */

    let suma = 0;
    let contador = 0;
    let numero;

    do {
        numero = Number.parseFloat(prompt("Ingresa un número positivo (o un número negativo para terminar):"));

        if (isNaN(numero)) {
            alert("Por favor, ingresa un valor numérico válido.");
            return;
        }

        if (numero >= 0) {
            suma += numero;
            contador++;
        }

    } while (numero >= 0);

    if (contador === 0) {
        alert("No ingresaste ningún número positivo.");
        return;
    }

    let media = suma / contador;

    const resultado = `
    Cantidad de números ingresados: ${contador}
    Suma total: ${suma}
    Media de los números: ${media}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio28() {
    /* 28. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo repetir. */

    let suma = 0;
    let i = 1;

    do {
        suma += i;
        i++;
    } while (i <= 100);

    const resultado = `
    La suma de los primeros cien números es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio29() {
    /* 29. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo mientras. */

    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    const resultado = `
    La suma de los primeros cien números es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio30() {
    /* 30. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo para. */

    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        suma += i;
    }

    const resultado = `
    La suma de los primeros cien números es: ${suma}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio31() {
    /* 31. Hacer un algoritmo en Javascript parar calcular la media de los números pares e impares, 
        sólo se ingresará diez números. */

    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = Number.parseInt(prompt("Ingresa el número " + i + ":"));

        if (isNaN(numero)) {
            alert("Debes ingresar un número válido.");
            return;
        }

        if (numero % 2 === 0) {
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }
    }

    let mediaPares = 0;
    let mediaImpares = 0;

    if (contadorPares > 0) {
        mediaPares = sumaPares / contadorPares;
    }

    if (contadorImpares > 0) {
        mediaImpares = sumaImpares / contadorImpares;
    }

    const resultado = `
    Cantidad de números pares: ${contadorPares}
    Media de los pares: ${mediaPares}

    Cantidad de números impares: ${contadorImpares}
    Media de los impares: ${mediaImpares}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio32() {
    let mayorPoblacion = 0;
    let ciudadMayor = "";
    let provinciaMayor = "";

    const ciudadesPorProvincia = [4, 4, 3];

    for (let i = 0; i < 3; i++) {
        let nombreProvincia = prompt("Ingresa el nombre de la provincia " + (i + 1) + ":");
        let numCiudades = ciudadesPorProvincia[i];

        for (let j = 1; j <= numCiudades; j++) {
            let nombreCiudad = prompt("Ingresa el nombre de la ciudad " + j + " de la provincia " + nombreProvincia + ":");
            let poblacion = Number.parseInt(prompt("Ingresa la población de la ciudad " + nombreCiudad + ":"));

            if (isNaN(poblacion) || poblacion < 0) {
                alert("Debes ingresar una cantidad válida de habitantes.");
                return;
            }

            if (poblacion > mayorPoblacion) {
                mayorPoblacion = poblacion;
                ciudadMayor = nombreCiudad;
                provinciaMayor = nombreProvincia;
            }
        }
    }

    const resultado = `
La ciudad con mayor población es: ${ciudadMayor}
Provincia: ${provinciaMayor}
Población: ${mayorPoblacion} habitantes
`;

    alert(resultado);
    console.log(resultado);
}



function ejercicio33() {
    /* 33. Hacer un algoritmo en Javascript que permita al usuario continuar con el programa. */

    let continuar = "S";

    while (continuar.toUpperCase() === "S") {
        alert("El programa se está ejecutando...");

        continuar = prompt("¿Deseas continuar con el programa? (S/N):");

        if (!continuar) {
            alert("Entrada no válida. Se asumirá que no deseas continuar.");
            break;
        }

        continuar = continuar.toUpperCase();

        if (continuar !== "S" && continuar !== "N") {
            alert("Opción no válida. Escribe 'S' para continuar o 'N' para salir.");
            continuar = "N";
        }
    }

    alert("El programa ha finalizado.");
    console.log("Programa finalizado por el usuario.");
}


function ejercicio34() {
    /* 34. Hacer un algoritmo en Javascript que imprima la tabla de multiplicar de los números del uno al nueve. */

    let resultado = "";

    for (let i = 1; i <= 9; i++) {
        resultado += `\nTabla del ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
    }

    alert(resultado);
    console.log(resultado);
}


function ejercicio35() {
    /* 35. Hacer un algoritmo en Javascript que nos permita saber cuál es el número mayor y menor, 
           se debe ingresar sólo veinte números. */

    let mayor = null;
    let menor = null;

    for (let i = 1; i <= 20; i++) {
        let numero = Number.parseFloat(prompt("Ingresa el número " + i + ":"));

        if (isNaN(numero)) {
            alert("Debes ingresar un valor numérico válido.");
            return;
        }

        if (mayor === null || numero > mayor) {
            mayor = numero;
        }

        if (menor === null || numero < menor) {
            menor = numero;
        }
    }

    const resultado = `
    El número mayor es: ${mayor}
    El número menor es: ${menor}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio36() {
    /* 36. Hacer un algoritmo en Javascript para calcular la serie de Fibonacci. */

    let n = Number.parseInt(prompt("Ingresa la cantidad de términos que deseas mostrar de la serie de Fibonacci:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let serie = "";
    let a = 0;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        serie += a + " ";
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }

    const resultado = `
    Serie de Fibonacci con ${n} términos:
    ${serie}
    `;

    alert(resultado);
    
}


function ejercicio37() {
    /* 37. Hacer un algoritmo en Javascript para conseguir el M.C.D de dos números por medio del algoritmo de Euclides. */

    let a = Number.parseInt(prompt("Ingresa el primer número:"));
    let b = Number.parseInt(prompt("Ingresa el segundo número:"));

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        alert("Por favor, ingresa números enteros positivos válidos.");
        return;
    }

    let x = a;
    let y = b;

    while (y !== 0) {
        let residuo = x % y;
        x = y;
        y = residuo;
    }

    const resultado = `
    El M.C.D. de ${a} y ${b} es ${x}.
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio38() {
    /* Hacer un algoritmo en Javascript que nos permita saber si un número es un número perfecto. */

    let num = Number.parseInt(prompt("Ingrese un número entero positivo:"));

    if (isNaN(num) || num <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let suma = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            suma += i;
        }
    }

    let resultado = "";

    if (suma === num) {
        resultado = `El número ${num} SI es un número perfecto.`;
    } else {
        resultado = `El número ${num} NO es un número perfecto.`;
    }

    alert(resultado);
    console.log(resultado);
}


function ejercicio39() {
    /* 39. Hacer un algoritmo en Javascript que cumpla con la aproximación del número pi 
       usando la serie de Gregory-Leibniz. */

    let n = Number.parseInt(prompt("Ingrese la cantidad de términos para aproximar π:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let piAproximado = 0;
    let signo = 1; 
    let denominador = 1;

    for (let i = 1; i <= n; i++) {
        piAproximado += signo * (4 / denominador);
        denominador += 2;
        signo *= -1; 
    }

    const resultado = `
    Aproximación de π usando ${n} términos:
    π ≈ ${piAproximado}
    `;

    alert(resultado);
    console.log(resultado);
}


function ejercicio40() {
    /* Hacer un algoritmo en Javascript que cumpla con la aproximación del número pi 
       usando la serie de Nilakantha. */

    let n = Number.parseInt(prompt("Ingrese la cantidad de términos para aproximar π:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let piAproximado = 3;
    let signo = 1; 
    let a = 2; 

    for (let i = 1; i <= n; i++) {
        let termino = 4 / (a * (a + 1) * (a + 2));
        piAproximado += signo * termino;
        signo *= -1; 
        a += 2;
    }

    const resultado = `
    Aproximación de π usando ${n} términos de la serie de Nilakantha:
    π ≈ ${piAproximado}
    `;

    alert(resultado);
    console.log(resultado);
}


