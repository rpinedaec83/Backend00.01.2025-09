function ejercicio01() {
  //1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.

  let numero = prompt("Ingresa un número:");

  numero = parseInt(numero);

  if ((numero >= 100 && numero <= 999) || (numero <= -100 && numero >= -999)) {
    alert("El número tiene tres dígitos.");
  } else {
    alert("El número NO tiene tres dígitos.");
  }
}

function ejercicio02() {
  //2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y determinar si es negativo.

  let numero = prompt("Ingresa un número entero:");

  numero = parseInt(numero);

  if (numero < 0) {
    alert("El número es negativo.");
  } else {
    alert("El número no es negativo.");
  }
}

function ejercicio03() {
  // 3. Hacer un algoritmo en Javascript que lea un número y determinar si termina en 4.

  let numero = prompt("Ingresa un número:");

  numero = parseInt(numero);

  if (Math.abs(numero) % 10 === 4) {
    alert("El número termina en 4.");
  } else {
    alert("El número NO termina en 4.");
  }
}

function ejercicio04() {
  // 4. Hacer un algoritmo en Javascript que lea tres números enteros y los muestre de menor a mayor.

  let num1 = parseInt(prompt("Ingresa el primer número entero:"));
  let num2 = parseInt(prompt("Ingresa el segundo número entero:"));
  let num3 = parseInt(prompt("Ingresa el tercer número entero:"));

  let numeros = [num1, num2, num3];

  numeros.sort(function (a, b) {
    return a - b;
  });

  alert("Los números ordenados de menor a mayor son: " + numeros.join(", "));
}

function ejercicio05() {
  // 5. Hacer un algoritmo en Javascript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

  let cantidad = parseInt(
    prompt("Ingresa la cantidad de zapatos que vas a comprar:")
  );

  const precioZapato = 80;

  let total = cantidad * precioZapato;

  let descuento = 0;

  if (cantidad > 30) {
    descuento = 0.4; // 40%
  } else if (cantidad > 20) {
    descuento = 0.2; // 20%
  } else if (cantidad > 10) {
    descuento = 0.1; // 10%
  } else {
    descuento = 0;
  }

  let totalDescuento = total - total * descuento;

  alert("Cantidad de zapatos: " + cantidad);
  alert("Precio por zapato: $80");
  alert("Descuento aplicado: " + descuento * 100 + "%");
  alert("Total a pagar: $" + totalDescuento.toFixed(2));
}

function ejercicio06() {
  // 6. Hacer un algoritmo en Javascript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

  let horas = parseInt(
    prompt("Ingresa el número de horas trabajadas en la semana:")
  );

  const pagoNormal = 20;
  const pagoExtra = 25;

  let sueldo = 0;

  if (horas <= 40) {
    sueldo = horas * pagoNormal;
  } else {
    let horasExtras = horas - 40;
    sueldo = 40 * pagoNormal + horasExtras * pagoExtra;
  }

  alert("Horas trabajadas: " + horas);
  alert("Sueldo semanal: $" + sueldo.toFixed(2));
}

function ejercicio07() {
  // 7. Hacer un algoritmo en Javascript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

  //  Tipo A 10% de descuento
  //  Tipo B 15% de descuento
  //  Tipo C 20% de descuento

  let tipo = prompt("Ingresa tu tipo de membresía (A, B o C):").toUpperCase();

  let totalCompra = parseFloat(prompt("Ingresa el monto total de tu compra:"));

  let descuento = 0;

  if (tipo === "A") {
    descuento = 0.1; // 10%
  } else if (tipo === "B") {
    descuento = 0.15; // 15%
  } else if (tipo === "C") {
    descuento = 0.2; // 20%
  } else {
    alert("Tipo de membresía no válido.");
  }

  if (descuento > 0) {
    let totalPagar = totalCompra - totalCompra * descuento;
    alert("Tipo de membresía: " + tipo);
    alert("Descuento aplicado: " + descuento * 100 + "%");
    alert("Total a pagar: $" + totalPagar.toFixed(2));
  }
}

function ejercicio08() {
  // 8. Hacer un algoritmo en Javascript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

  let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
  let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
  let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

  let promedio = (nota1 + nota2 + nota3) / 3;

  alert("El promedio del estudiante es: " + promedio.toFixed(2));

  // Determinamos si aprobó o no (suponiendo que 11 es la nota mínima para aprobar)
  if (promedio >= 11) {
    alert("El estudiante aprobó.");
  } else {
    alert("El estudiante no aprobó.");
  }
}

function ejercicio09() {
  // 9. Hacer un algoritmo en Javascript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

  let salario = parseFloat(prompt("Ingresa el salario actual del trabajador:"));

  let aumento = 0;

  if (salario > 2000) {
    aumento = salario * 0.05; // 5%
  } else {
    aumento = salario * 0.1; // 10%
  }

  let nuevoSalario = salario + aumento;

  alert("Salario actual: $" + salario.toFixed(2));
  alert("Aumento aplicado: $" + aumento.toFixed(2));
  alert("Nuevo salario: $" + nuevoSalario.toFixed(2));
}

function ejercicio10() {
  // 10. Hacer un algoritmo en Javascript que diga si un número es par o impar.

  let numero = parseInt(prompt("Ingresa un número:"));

  if (numero % 2 === 0) {
    alert("El número es par.");
  } else {
    alert("El número es impar.");
  }
}

function ejercicio11() {
  // 11. Hacer un algoritmo en Javascript que lea tres números y diga cuál es el mayor.

  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));
  let num3 = parseFloat(prompt("Ingresa el tercer número:"));

  let mayor;

  if (num1 > num2 && num1 > num3) {
    mayor = num1;
  } else if (num2 > num1 && num2 > num3) {
    mayor = num2;
  } else if (num3 > num1 && num3 > num2) {
    mayor = num3;
  } else {
    alert("Hay números iguales.");
  }

  if (mayor !== undefined) {
    alert("El número mayor es: " + mayor);
  }
}

function ejercicio12() {
  // 12. Hacer un algoritmo en Javascript que lea dos números y diga cuál es el mayor.

  let num1 = parseFloat(prompt("Ingresa el primer número:"));
  let num2 = parseFloat(prompt("Ingresa el segundo número:"));

  if (num1 > num2) {
    alert("El número mayor es: " + num1);
  } else if (num2 > num1) {
    alert("El número mayor es: " + num2);
  } else {
    alert("Ambos números son iguales.");
  }
}

function ejercicio13() {
  // 13. Hacer un algoritmo en Javascript que lea una letra y diga si es una vocal.

  let letra = prompt("Ingresa una letra:").toLowerCase(); // Convertimos a minúscula

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    alert("La letra es una vocal.");
  } else {
    alert("La letra no es una vocal.");
  }
}

function ejercicio14() {
  // 14. Hacer un algoritmo en Javascript que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.

  let numero = parseInt(prompt("Ingresa un número entero del 1 al 10:"));

  if (numero < 1 || numero > 10) {
    alert("El número debe estar entre 1 y 10.");
  } else {
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

    if (esPrimo) {
      alert("El número " + numero + " es primo.");
    } else {
      alert("El número " + numero + " no es primo.");
    }
  }
}

function ejercicio15() {
  // 15. Hacer un algoritmo en Javascript que convierta centímetros a pulgadas y libras a kilogramos.

  let centimetros = parseFloat(prompt("Ingresa la cantidad en centímetros:"));
  let libras = parseFloat(prompt("Ingresa la cantidad en libras:"));

  let pulgadas = centimetros / 2.54;
  let kilogramos = libras * 0.453592;

  alert(centimetros + " cm equivalen a " + pulgadas.toFixed(2) + " pulgadas.");
  alert(
    libras + " libras equivalen a " + kilogramos.toFixed(2) + " kilogramos."
  );
}

function ejercicio16() {
  // 16. Hacer un algoritmo en Javascript que lea un número y según ese número, indique el día que corresponde.

  let numero = parseInt(prompt("Ingresa un número del 1 al 7:"));

  let dia;

  switch (numero) {
    case 1:
      dia = "Lunes";
      break;
    case 2:
      dia = "Martes";
      break;
    case 3:
      dia = "Miércoles";
      break;
    case 4:
      dia = "Jueves";
      break;
    case 5:
      dia = "Viernes";
      break;
    case 6:
      dia = "Sábado";
      break;
    case 7:
      dia = "Domingo";
      break;
    default:
      dia = "Número inválido. Debe ser un número entre 1 y 7.";
      break;
  }

  alert(dia);
}

function ejercicio17() {
  // 17. Hacer un algoritmo en Javascript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

  let horas = parseInt(prompt("Ingresa las horas (0-23):"));
  let minutos = parseInt(prompt("Ingresa los minutos (0-59):"));
  let segundos = parseInt(prompt("Ingresa los segundos (0-59):"));

  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;

    if (minutos === 60) {
      minutos = 0;
      horas++;

      if (horas === 24) {
        horas = 0;
      }
    }
  }

  alert(
    "La hora dentro de un segundo será: " +
      horas.toString().padStart(2, "0") +
      ":" +
      minutos.toString().padStart(2, "0") +
      ":" +
      segundos.toString().padStart(2, "0")
  );
}

function ejercicio18() {
  // 18. Hacer un algoritmo en Javascript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:

  //   $10. Si se compran unidades separadas hasta 9.

  //   $8. Si se compran entre 10 unidades hasta 99.

  //   $7. Entre 100 y 499 unidades.

  //   $6. Para mas de 500 unidades.

  //   La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Javascript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

  let cantidad = parseInt(prompt("Ingresa la cantidad de CDs a comprar:"));

  let precioUnitario = 0;

  if (cantidad <= 9) {
    precioUnitario = 10;
  } else if (cantidad >= 10 && cantidad <= 99) {
    precioUnitario = 8;
  } else if (cantidad >= 100 && cantidad <= 499) {
    precioUnitario = 7;
  } else if (cantidad >= 500) {
    precioUnitario = 6;
  } else {
    alert("Cantidad no válida.");
  }

  if (precioUnitario > 0) {
    let totalVenta = cantidad * precioUnitario;

    let ganancia = totalVenta * 0.0825;

    alert("Cantidad de CDs: " + cantidad);
    alert("Precio por unidad: $" + precioUnitario.toFixed(2));
    alert("Total de la venta: $" + totalVenta.toFixed(2));
    alert("Ganancia del vendedor: $" + ganancia.toFixed(2));
  }
}

function ejercicio19() {
  // 19. Hacer un algoritmo en Javascript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

  //   Cajero (56$/día).

  //   Servidor (64$/día).

  //   Preparador de mezclas (80$/día).

  //   Mantenimiento (48$/día).

  //   El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

  let idEmpleado = parseInt(
    prompt(
      "Ingrese el número identificador del empleado:\n1. Cajero\n2. Servidor\n3. Preparador de mezclas\n4. Mantenimiento"
    )
  );

  let diasTrabajados = parseInt(
    prompt("Ingrese la cantidad de días trabajados (máximo 6):")
  );

  let salarioDiario = 0;
  let puesto = "";

  switch (idEmpleado) {
    case 1:
      salarioDiario = 56;
      puesto = "Cajero";
      break;
    case 2:
      salarioDiario = 64;
      puesto = "Servidor";
      break;
    case 3:
      salarioDiario = 80;
      puesto = "Preparador de mezclas";
      break;
    case 4:
      salarioDiario = 48;
      puesto = "Mantenimiento";
      break;
    default:
      alert("Número de empleado inválido.");
      break;
  }

  if (salarioDiario > 0 && diasTrabajados >= 1 && diasTrabajados <= 6) {
    let pagoTotal = salarioDiario * diasTrabajados;
    alert(`Empleado: ${puesto}`);
    alert(`Días trabajados: ${diasTrabajados}`);
    alert(`Salario diario: $${salarioDiario}`);
    alert(`Total a pagar: $${pagoTotal}`);
  } else if (diasTrabajados > 6) {
    alert("Error: No puede trabajar más de 6 días a la semana.");
  }
}

function ejercicio20() {
  // 20. Hacer un algoritmo en Javascript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

  //   ¿Cuántos números son Pares?

  //   ¿Cuál es el mayor de todos?

  //   Si el tercero es par, calcular el cuadrado del segundo.

  //   Si el primero es menor que el cuarto, calcular la media de los 4 números.

  //   Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

  let n1 = parseInt(prompt("Ingrese el primer número:"));
  let n2 = parseInt(prompt("Ingrese el segundo número:"));
  let n3 = parseInt(prompt("Ingrese el tercer número:"));
  let n4 = parseInt(prompt("Ingrese el cuarto número:"));

  if (n1 > 0 && n2 > 0 && n3 > 0 && n4 > 0) {
    let resultado = "";

    let pares = [n1, n2, n3, n4].filter((n) => n % 2 === 0).length;
    resultado += `Cantidad de números pares: ${pares}\n`;

    let mayor = Math.max(n1, n2, n3, n4);
    resultado += `El número mayor es: ${mayor}\n`;

    if (n3 % 2 === 0) {
      let cuadrado = n2 ** 2;
      resultado += `El tercero es par. Cuadrado del segundo: ${cuadrado}\n`;
    }

    if (n1 < n4) {
      let media = (n1 + n2 + n3 + n4) / 4;
      resultado += `El primero es menor que el cuarto. Media de los 4: ${media}\n`;
    }

    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
      let suma = n1 + n2 + n3 + n4;
      resultado += `El segundo es mayor que el tercero y el tercero está entre 50 y 700.\n`;
      resultado += `Suma de los 4 números: ${suma}\n`;
    }

    alert(resultado);
  } else {
    alert("Error: Todos los números deben ser enteros positivos.");
  }
}

function ejercicio21() {
  // 21. Hacer un algoritmo en Javascript que permita calcular el factorial de un número.

  let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));

  if (num >= 0) {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }

    alert(`El factorial de ${num} es: ${factorial}`);
  } else {
    alert("Error: Ingrese un número entero positivo.");
  }
}

function ejercicio22() {
  // 22. Hacer un algoritmo en Javascript para calcular la suma de los n primeros números.

  let n = parseInt(prompt("Ingrese un número entero positivo (n):"));

  if (n > 0) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
      suma += i;
    }

    alert(`La suma de los ${n} primeros números es: ${suma}`);
  } else {
    alert("Error: Debe ingresar un número entero positivo.");
  }
}

function ejercicio23() {
  // 23. Hacer un algoritmo en Javascript para calcular la suma de los números impares menores o iguales a n.

  let n = parseInt(prompt("Ingrese un número entero positivo (n):"));

  if (n > 0) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        // Si es impar
        suma += i;
      }
    }

    alert(
      `La suma de los números impares menores o iguales a ${n} es: ${suma}`
    );
  } else {
    alert("Error: Ingrese un número entero positivo.");
  }
}

function ejercicio24() {
  // 24. Hacer un algoritmo en Javascript para realizar la suma de todos los números pares hasta el 1000.
  let suma = 0;

  for (let i = 2; i <= 1000; i += 2) {
    suma += i;
  }

  alert(`La suma de todos los números pares hasta 1000 es: ${suma}`);
}

function ejercicio25() {
  // 25. Hacer un algoritmo en Javascript para calcular el factorial de un número de una forma distinta.

  let num = parseInt(prompt("Ingrese un número para calcular su factorial:"));

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  if (num >= 0) {
    let resultado = factorial(num);
    alert(`El factorial de ${num} es: ${resultado}`);
  } else {
    alert("Error: Ingrese un número entero positivo.");
  }
}

function ejercicio26() {
  // 26. Hacer un algoritmo en Javascript para calcular el resto y cociente por medio de restas sucesivas.

  let dividendo = parseInt(prompt("Ingrese el dividendo (número a dividir):"));
  let divisor = parseInt(prompt("Ingrese el divisor:"));

  if (dividendo >= 0 && divisor > 0) {
    let cociente = 0;
    let resto = dividendo;

    while (resto >= divisor) {
      resto -= divisor;
      cociente++;
    }

    alert(
      `Dividendo: ${dividendo}\nDivisor: ${divisor}\nCociente: ${cociente}\nResto: ${resto}`
    );
  } else {
    alert("Error: Ingrese números válidos (dividendo ≥ 0 y divisor > 0).");
  }
}

function ejercicio27() {
  // 27. Hacer un algoritmo en Javascript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

  let suma = 0;
  let contador = 0;
  let numero;

  do {
    numero = parseFloat(
      prompt(
        "Ingrese un número positivo (ingrese un número negativo para terminar):"
      )
    );

    if (numero >= 0) {
      suma += numero;
      contador++;
    }
  } while (numero >= 0);

  if (contador > 0) {
    let media = suma / contador;
    alert(`La media de los ${contador} números ingresados es: ${media}`);
  } else {
    alert("No se ingresaron números positivos.");
  }
}

function ejercicio28() {
  // 28. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo repetir.

  let suma = 0;
  let i = 1;

  do {
    suma += i;
    i++;
  } while (i <= 100);

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio29() {
  // 29. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo mientras.

  let suma = 0;
  let i = 1;

  while (i <= 100) {
    suma += i;
    i++;
  }

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio30() {
  // 30. Hacer un algoritmo en Javascript para calcular la suma de los primeros cien números con un ciclo para.

  let suma = 0;

  for (let i = 1; i <= 100; i++) {
    suma += i;
  }

  alert(`La suma de los primeros 100 números es: ${suma}`);
}

function ejercicio31() {
  // 31. Hacer un algoritmo en Javascript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

  let sumaPares = 0;
  let sumaImpares = 0;
  let conteoPares = 0;
  let conteoImpares = 0;

  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i}:`));

    if (numero % 2 === 0) {
      sumaPares += numero;
      conteoPares++;
    } else {
      sumaImpares += numero;
      conteoImpares++;
    }
  }

  let mediaPares = conteoPares > 0 ? sumaPares / conteoPares : 0;
  let mediaImpares = conteoImpares > 0 ? sumaImpares / conteoImpares : 0;

  alert(
    `Media de números pares: ${mediaPares}\nMedia de números impares: ${mediaImpares}`
  );
}

function ejercicio32() {
  // 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Javascript que nos permita saber eso.

  let ciudadMayor = "";
  let poblacionMayor = 0;

  for (let i = 1; i <= 3; i++) {
    alert(` Provincia ${i} `);

    for (let j = 1; j <= 11 / 3; j++) {
      let nombreCiudad = prompt(
        `Ingrese el nombre de la ciudad ${j} de la provincia ${i}:`
      );
      let poblacion = parseInt(
        prompt(`Ingrese la población de ${nombreCiudad}:`)
      );

      if (poblacion > poblacionMayor) {
        poblacionMayor = poblacion;
        ciudadMayor = nombreCiudad;
      }
    }
  }

  alert(
    `La ciudad con mayor población es ${ciudadMayor} con ${poblacionMayor} habitantes.`
  );
}

function ejercicio33() {
  // 33. Hacer un algoritmo en Javascript que permita al usuario continuar con el programa.

  let continuar = true;

  while (continuar) {
    let nombre = prompt("Ingrese su nombre:");
    alert(`Hola ${nombre}, bienvenido al programa.`);

    continuar = confirm("¿Desea continuar?");
  }

  alert("Programa finalizado. ¡Hasta luego!");
}

function ejercicio34() {
  // 34. Hacer un algoritmo en Javascript que imprima la tabla de multiplicar de los números del uno al nueve.

  let resultado = "";

  for (let i = 1; i <= 9; i++) {
    resultado += `Tabla del ${i}:\n`;
    for (let j = 1; j <= 10; j++) {
      resultado += `${i} x ${j} = ${i * j}\n`;
    }
    resultado += "\n";
  }

  alert(resultado);
}

function ejercicio35() {
  // 35. Hacer un algoritmo en Javascript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

  let mayor = -Infinity;
  let menor = Infinity;

  for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i}:`));

    if (numero > mayor) {
      mayor = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  }

  alert(`El número mayor es: ${mayor}\nEl número menor es: ${menor}`);
}

function ejercicio36() {
  // 36. Hacer un algoritmo en Javascript para calcular la serie de Fibonacci.

  let n = parseInt(
    prompt("¿Cuántos términos de la serie Fibonacci desea ver?")
  );
  let a = 0,
    b = 1;
  let serie = "Serie de Fibonacci:\n";

  for (let i = 1; i <= n; i++) {
    serie += a + " ";
    let siguiente = a + b;
    a = b;
    b = siguiente;
  }

  alert(serie);
}

function ejercicio37() {
  // 37. Hacer un algoritmo en Javascript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

  let a = parseInt(prompt("Ingrese el primer número:"));
  let b = parseInt(prompt("Ingrese el segundo número:"));

  let originalA = a;
  let originalB = b;

  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }

  alert(`El M.C.D. de ${originalA} y ${originalB} es: ${a}`);
}

function ejercicio38() {
  // 38. Hacer un algoritmo en Javascript que nos permita saber si un número es un número perfecto.

  let num = parseInt(prompt("Ingrese un número:"));
  let suma = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }

  if (suma === num) {
    alert(`${num} es un número perfecto.`);
  } else {
    alert(`${num} no es un número perfecto.`);
  }
}

function ejercicio39() {
  // 39. Hacer un algoritmo en Javascript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

  //   Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

  let n = parseInt(
    prompt(
      "Ingrese la cantidad de términos a usar en la serie de Gregory-Leibniz:"
    )
  );
  let pi = 0;
  let signo = 1;

  for (let i = 1; i <= n * 2; i += 2) {
    pi += signo * (4 / i);
    signo *= -1;
  }

  alert(`Aproximación de π con ${n} términos: ${pi}`);
}

function ejercicio40() {
  // 40. Hacer un algoritmo en Javascript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

  //   Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

  let n = parseInt(
    prompt("Ingrese la cantidad de términos a usar en la serie de Nilakantha:")
  );
  let pi = 3;
  let signo = 1;

  for (let i = 2; i <= 2 * n; i += 2) {
    pi += signo * (4 / (i * (i + 1) * (i + 2)));
    signo *= -1;
  }

  alert(`Aproximación de π con ${n} términos: ${pi}`);
}
