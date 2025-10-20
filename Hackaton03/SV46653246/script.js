//  Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01() {
  let numero = parseInt(prompt("Ingrese un número:"));

  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  if (numero >= 100 && numero <= 999) {
    alert("El número tiene tres dígitos.");
  } else {
    alert("El número no tiene tres dígitos.");
  }
}

function ejercicio02() {
  let numero = prompt("Ingrese un número:");
  numero = parseInt(numero);

  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }
  if (numero < 0) {
    alert("El número es negativo.");
  } else {
    alert("El número es positivo.");
  }
}

function ejercicio03() {
  let numero = prompt("Ingrese un número:");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  if (numero % 10 === 4) {
    alert("El número termina en 4");
  } else {
    alert("El número NO termina en 4");
  }
}

function ejercicio04() {
  let numero1 = prompt("Ingrese primer número:");
  let numero2 = prompt("Ingrese segundo número:");
  let numero3 = prompt("Ingrese tercer número:");

  numero1 = parseInt(numero1);
  numero2 = parseInt(numero2);
  numero3 = parseInt(numero3);

  if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    return alert("Por favor, ingrese números válidos.");
  }

  if (numero1 > numero2) {
    mayor1 = numero1;
    mayor2 = numero2;
  } else {
    mayor1 = numero2;
    mayor2 = numero1;
  }

  if (numero3 > mayor1) {
    mayor0 = numero3;
  } else if (numero3 > mayor2) {
    mayor0 = mayor1;
    mayor1 = numero3;
  } else {
    mayor0 = mayor1;
    mayor1 = mayor2;
    mayor2 = numero3;
  }

  alert(
    "Los tres números mayores son: " + mayor0 + ", " + mayor1 + ", " + mayor2
  );
}

function ejercicio05() {
  let cantidadZapatos = prompt(
    "Ingrese la cantidad de zapatos a comprar: (Precio Unitario = $80)"
  );
  cantidadZapatos = parseInt(cantidadZapatos);

  if (isNaN(cantidadZapatos) || cantidadZapatos < 0) {
    return alert("Por favor, ingrese una cantidad válida.");
  }

  if (cantidadZapatos <= 10) {
    precioDescuento = cantidadZapatos * 80;
  } else if (cantidadZapatos > 10 && cantidadZapatos <= 20) {
    precioDescuento = cantidadZapatos * 80 * 0.9;
  } else if (cantidadZapatos > 20 && cantidadZapatos <= 30) {
    precioDescuento = cantidadZapatos * 80 * 0.8;
  } else {
    precioDescuento = cantidadZapatos * 80 * 0.6;
  }

  alert("El precio total con descuento es: $" + precioDescuento);
}

function ejercicio06() {
  let horasTrabajadas = prompt("Ingrese la cantidad de horas trabajadas:");
  horasTrabajadas = parseInt(horasTrabajadas);

  if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
    return alert("Por favor, ingrese una cantidad válida de horas.");
  } else {
    if (horasTrabajadas <= 40) {
      salario = horasTrabajadas * 20;
    } else {
      horasExtras = horasTrabajadas - 40;
      salario = 40 * 20 + horasExtras * 25;
    }
    alert("El salario total es: $" + salario);
  }
}

function ejercicio07() {
  let membresia = prompt(
    "Precio de helados $10" + "\nIngrese el tipo de membresía (A, B, C):"
  );
  membresia = membresia.toUpperCase();
  let cantidadHelados = prompt("Ingrese la cantidad de helados :");
  cantidadHelados = parseInt(cantidadHelados);

  if (isNaN(cantidadHelados) || cantidadHelados < 0) {
    return alert("Por favor, ingrese una cantidad válida de helados.");
  }
  if (!["A", "B", "C"].includes(membresia)) {
    return alert("Tipo de membresía no válido.");
  }
  switch (membresia) {
    case "A":
      preciototal = cantidadHelados * 10 * 0.9;

      break;
    case "B":
      preciototal = cantidadHelados * 10 * 0.85;
      break;
    case "C":
      preciototal = cantidadHelados * 10 * 0.8;
      break;
    default:
      alert("Tipo de membresía no válido.");
  }
  alert("El precio total con descuento es: $" + preciototal);
}

function ejercicio08() {
  let notaTotal = 0;
  let nota = [];
  alert("Nota aprobatoria: 11");
  for (let i = 1; i <= 3; i++) {
    nota[i] = prompt("Ingrese la nota " + i + ":");
    nota[i] = parseInt(nota[i]);
    if (isNaN(nota[i])) {
      return alert("Por favor, ingrese una nota válida.");
    }
  }

  if (nota[1] > 20 || nota[2] > 20 || nota[3] > 20) {
    return alert("Las notas deben estar entre 0 y 20.");
  }

  for (let i = 1; i <= 3; i++) {
    notaTotal += nota[i];
  }

  if (notaTotal / 3 >= 11) {
    alert("¡Aprobado! Su promedio es: " + (notaTotal / 3).toFixed(1));
  } else {
    alert("Reprobado. Su promedio es: " + (notaTotal / 3).toFixed(1));
  }
}

function ejercicio09() {
  let salario = prompt("Ingrese el salario del trabajador:");
  salario = parseFloat(salario);

  if (isNaN(salario) || salario < 0) {
    return alert("Por favor, ingrese un salario válido.");
  }
  if (salario > 2000) {
    nuevoSalario = salario * 1.05;
  } else {
    nuevoSalario = salario * 1.1;
  }
  alert("El nuevo salario es: $" + nuevoSalario);
}

function ejercicio10() {
  let numero = prompt("Ingrese número):");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  if (numero !== 0) {
    if (numero % 2 === 0) {
      alert("El número es par.");
    } else {
      alert("El número es impar.");
    }
  }
}

function ejercicio11() {
  let dato = [];
  for (let i = 1; i <= 3; i++) {
    dato[i] = prompt("Ingrese el dato " + i + ":");
    dato[i] = parseInt(dato[i]);
    if (isNaN(dato[i])) {
      return alert("Por favor, ingrese un dato válido.");
    }
  }

  if (dato[1] > dato[2]) {
    may1 = dato[1];
    may2 = dato[2];
  } else {
    may1 = dato[2];
    may2 = dato[1];
  }
  if (dato[3] > may1) {
    may0 = dato[3];
  } else if (dato[3] > may2) {
    may0 = may1;
    may1 = dato[3];
  } else {
    may0 = may1;
    may1 = may2;
    may2 = dato[3];
  }
  alert("el mayor es: " + may0);
}

function ejercicio12() {
  let dato = [];
  for (let i = 1; i <= 2; i++) {
    dato[i] = prompt("Ingrese el dato " + i + ":");
    dato[i] = parseInt(dato[i]);
    if (isNaN(dato[i])) {
      return alert("Por favor, ingrese un dato válido.");
    }
  }
  if (dato[1] > dato[2]) {
    may1 = dato[1];
    may2 = dato[2];
  } else {
    may1 = dato[2];
    may2 = dato[1];
  }
  alert("el mayor es: " + may1);
}

function ejercicio13() {
  let letra = prompt("Ingrese una letra:");
  letra = letra.toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    alert("La letra es una vocal.");
  } else {
    alert("La letra es una consonante o número.");
  }
}

function ejercicio14() {
  let numero = prompt("Ingrese número:");
  numero = parseInt(numero);

  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }
  if (numero < 1 || numero > 10) {
    return alert("El número debe estar entre 1 y 10.");
  }

  // determinar si el numero es primo
  let esPrimo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    alert("El número es primo.");
  } else {
    alert("El número no es primo.");
  }
}

function ejercicio15() {
  let numeroOperacion = prompt(
    "Ingrese un número del 1 al 2 para seleccionar la operación:\n1. Para convertir cm a pulg \n2. Para convertir lb a kg"
  );
  numeroOperacion = parseInt(numeroOperacion);
  if (isNaN(numeroOperacion) || numeroOperacion < 1 || numeroOperacion > 2) {
    return alert("Por favor, ingrese una opción válida.");
  }

  switch (numeroOperacion) {
    case 1:
      let cm = prompt("Ingrese la cantidad en centímetros:");
      cm = parseFloat(cm);
      if (isNaN(cm)) {
        return alert("Por favor, ingrese un valor válido.");
      }
      let pulgadas = cm / 2.54;
      alert("La cantidad en pulgadas es: " + pulgadas.toFixed(2));
      break;
    case 2:
      let lb = prompt("Ingrese la cantidad en libras:");
      lb = parseFloat(lb);
      if (isNaN(lb)) {
        return alert("Por favor, ingrese un valor válido.");
      }
      let kg = lb / 2.20462;
      alert("La cantidad en kilogramos es: " + kg.toFixed(2));
      break;
  }
}

function ejercicio16() {
  let numero = prompt(
    "Ingrese un número del 1 al 7 para determinar el día de la semana:"
  );
  numero = parseInt(numero);
  if (isNaN(numero) || numero < 1 || numero > 7) {
    return alert("Por favor, ingrese un número válido entre 1 y 7.");
  }
  switch (numero) {
    case 1:
      alert("Lunes");
      break;
    case 2:
      alert("Martes");
      break;
    case 3:
      alert("Miércoles");
      break;
    case 4:
      alert("Jueves");
      break;
    case 5:
      alert("Viernes");
      break;
    case 6:
      alert("Sábado");
      break;
    case 7:
      alert("Domingo");
      break;
  }
}

function ejercicio17() {
  let hora = prompt("Ingrese la hora del día (0-23):");
  hora = parseInt(hora);

  if (isNaN(hora) || hora < 0 || hora > 23) {
    return alert("Por favor, ingrese una hora válida entre 0 y 23.");
  }
  let minuto = prompt("Ingrese los minutos (0-59):");
  minuto = parseInt(minuto);
  if (isNaN(minuto) || minuto < 0 || minuto > 59) {
    return alert("Por favor, ingrese minutos válidos entre 0 y 59.");
  }
  let segundo = prompt("Ingrese los segundos (0-59):");
  segundo = parseInt(segundo);
  if (isNaN(segundo) || segundo < 0 || segundo > 59) {
    return alert("Por favor, ingrese segundos válidos entre 0 y 59.");
  }

  segundo += 1;
  if (segundo === 60) {
    segundo = 0;
    minuto += 1;
    if (minuto === 60) {
      minuto = 0;
      hora += 1;
      if (hora === 24) {
        hora = 0;
      }
    }
  }
  alert(
    "Un segundo después, la hora es: " +
      hora.toString().padStart(2, "0") +
      ":" +
      minuto.toString().padStart(2, "0") +
      ":" +
      segundo.toString().padStart(2, "0")
  );
}

function ejercicio18() {
  let cantidadCD = prompt("Ingrese la cantidad de CDs a comprar:");
  cantidadCD = parseInt(cantidadCD);
  if (isNaN(cantidadCD) || cantidadCD < 0) {
    return alert("Por favor, ingrese una cantidad válida de CDs.");
  }

  if (cantidadCD >= 1 && cantidadCD <= 9) {
    precio = 10;
  }

  if (cantidadCD >= 10 && cantidadCD <= 99) {
    precio = 8;
  }

  if (cantidadCD >= 100 && cantidadCD <= 499) {
    precio = 7;
  }

  if (cantidadCD >= 500) {
    precio = 6;
  }

  totalPagar = cantidadCD * precio;
  alert(
    "El precio por CD es: $" + precio + "\nEl total a pagar es: $" + totalPagar
  );
  alert("La ganacia es: $" + totalPagar * 0.0825 + "USD");
}

function ejercicio19() {
  let = numeroTrabajador = prompt(
    "Ingrese el número de trabajador (1-4): \n1. Cajero\n2. Servidor\n3. Preparador de mezclas\n4. Mantenimiento"
  );

  numeroTrabajador = parseInt(numeroTrabajador);
  if (isNaN(numeroTrabajador) || numeroTrabajador < 1 || numeroTrabajador > 4) {
    return alert(
      "Por favor, ingrese un número de trabajador válido entre 1 y 4."
    );
  }
  let diasTrabajados = prompt("Ingrese la cantidad de días trabajados:");
  diasTrabajados = parseInt(diasTrabajados);
  if (isNaN(diasTrabajados) || diasTrabajados < 0 || diasTrabajados > 6) {
    return alert("Por favor, ingrese una cantidad válida de días trabajados.");
  }

  switch (numeroTrabajador) {
    case 1:
      salario = 56;
      break;
    case 2:
      salario = 64;
      break;
    case 3:
      salario = 80;
      break;
    case 4:
      salario = 48;
      break;
  }

  pagoTotal = salario * diasTrabajados;
  alert("El pago total es: $" + pagoTotal);
}
function ejercicio20() {
  let numero = [];
  let numPar = 0;
  let numMedia = 0;
  let numSuma = 0;
  for (let i = 1; i <= 4; i++) {
    numero[i] = prompt("Ingrese el número " + i + ":");
    numero[i] = parseInt(numero[i]);
    if (isNaN(numero[i])) {
      return alert("Por favor, ingrese un número válido.");
    }
  }

  for (let i = 1; i <= 4; i++) {
    if (numero[i] % 2 === 0) {
      numPar += 1;
    }
  }
  if (numPar === 0) {
    alert("No hay números pares.");
  } else {
    alert("La cantidad de números pares es: " + numPar);
  }

  if (numero[1] > numero[2]) {
    may2 = numero[1];
    may3 = numero[2];
  } else {
    may2 = numero[2];
    may3 = numero[1];
  }
  if (numero[3] > may2) {
    may1 = numero[3];
  } else {
    may1 = may2;
  }
  if (numero[4] > may1) {
    may0 = numero[4];
  } else {
    may0 = may1;
  }

  alert("El número mayor es: " + may0);

  if (numero[3] % 2 === 0) {
    alert("El cuadrado del segunodo número es: " + numero[2] * numero[2]);
  }

  if (numero[1] < numero[4]) {
    for (let i = 1; i <= 4; i++) {
      numMedia += numero[i];
    }
    alert("El promedio es: " + numMedia / 4);
  } else {
    alert("El primer número no es menor que el cuarto número.");
  }

  if (numero[2] > numero[3]) {
    if (numero[3] >= 50 && numero[3] <= 700) {
      for (let i = 1; i <= 4; i++) {
        numSuma += numero[i];
      }
      alert("La suma de los cuatro números es: " + numSuma);
    }
  }
}

function ejercicio21() {
  let factorial = 1;
  let numero = prompt("Ingrese un número:");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  for (let i = 1; i <= numero; i++) {
    factorial = factorial * i;
  }

  alert("El factorial de " + numero + " es: " + factorial);
}

function ejercicio22() {
  let numero = prompt("Ingrese un número):");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }
  alert("La suma de los números del 1 al " + numero + " es: " + suma);
}

function ejercicio23() {
  let numero = prompt("Ingrese un número):");
  numero = parseInt(numero);
  let suma = 0;

  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }
  for (let i = 1; i <= numero; i += 2) {
    suma += i;
  }

  alert("La suma de los números impares del 1 al " + numero + " es: " + suma);
}

function ejercicio24() {
  alert("Se calculará la suma del 1 al 1000:");
  let numero = 0;
  let suma = 0;

  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  for (let i = 1; i <= 1000; i++) {
    suma += i;
  }

  alert("La suma de los números del 1 al 1000 es: " + suma);
}

function ejercicio25() {
  let factorial = 1;
  let contador = 1;
  let numero = prompt("Ingrese un número:");
  numero = parseInt(numero);
  if (isNaN(numero)) {
    return alert("Por favor, ingrese un número válido.");
  }

  while (contador <= numero) {
    factorial = factorial * contador;
    contador++;
  }
  alert("El factorial de " + numero + " es: " + factorial);
}

function ejercicio26() {
  let dividendo = prompt("Ingrese dividendo:");
  dividendo = parseInt(dividendo);
  if (isNaN(dividendo)) {
    return alert("Por favor, ingrese un número válido.");
  }

  let divisor = prompt("Ingrese divisor:");
  divisor = parseInt(divisor);
  if (isNaN(divisor)) {
    return alert("Por favor, ingrese un número válido.");
  }
  let cociente = 0;
  let resto = dividendo;

  for (let i = 1; resto >= divisor; i++) {
    resto = resto - divisor;
    cociente += 1;
  }

  alert("el cociente es: " + cociente);
  alert("El resto es: " + resto);
}

function ejercicio27() {
  let numero = 0;
  let numMedia = 0;
  let numTotales = 0;
  let media = 0;

  while (numero >= 0) {
    let numero = prompt("Ingrese número");
    numero = parseInt(numero);
    if (numero >= 0) {
      numMedia += numero;
      numTotales += 1;
      media = numMedia / numTotales;
      console.log(numero);
      console.log(numMedia);
      console.log(media);
    } else {
      return alert("la media de los números ingresados es: " + media);
    }
  }
}


function ejercicio28 (){
    let i = 1;
let suma = 0;

do {
  suma += i;
  i++;
} while (i <= 100);

 alert("La suma de los primeros 100 números es: " + suma); 
}

function ejercicio29(){
let i = 1;
let suma = 0

while (i<=100){
    suma += i;
    i++
}
 alert("La suma de los primeros 100 números es: " + suma); 
}

function ejercicio30(){
    let i = 1;
    let suma = 0

for (let i=1; i<=100; i++){
    suma += i
}
alert("La suma de los primeros 100 números es: " + suma); 
}