async function ejercicio01() {
  //1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.

  //let numero = Number.parseInt( prompt("Escribe un numero"));
  let numero = 0;
  const { value: numeroRecibido } = await Swal.fire({
    title: "Escribe un numero ",
    input: "text",
    inputLabel: "Escribe un numero",
    inputPlaceholder: "Ingresa un numero ",
  });
  if (numeroRecibido) {
    numero = Number.parseInt(numeroRecibido);
  }

  if (isNaN(numero)) {
    Swal.fire("Lo que escribiste no es un numero");
    return;
  }

  if (numero > 99 && numero < 1000) {
    alert("Si tiene 3 digitos");
  } else {
    alert("No tiene 3 digitos");
  }
  let strNumero = numero.toString();
  if (strNumero.length === 3) {
    alert("Si tiene 3 digitos");
  } else {
    alert("No tiene 3 digitos");
  }
}

async function ejercicio02() {
  //2. Hacer un algoritmo en Javascript que lea un número entero por el teclado y determinar si es negativo.

  let num = 0;

  const { value: numInput } = await Swal.fire({
    title: "Escribe un numero ",
    input: "number",
    inputLabel: "Escribe un numero",
    inputPlaceholder: "Ingresa un numero ",
  });
  if (numInput) {
    num = Number.parseInt(numInput);
  }

  if (isNaN(num)) {
    Swal.fire("Lo que escribiste no es un numero");
    return;
  }

  if (num >= 0) {
    alert("El numero es positivo");
  } else {
    alert("El numero es negativo");
  }
}

function ejercicio5() {
  /*Hacer un algoritmo en Javascript para una tienda de zapatos
   que tiene una promoción de descuento para vender al mayor,
    esta dependerá del número de zapatos que se compren.
     Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
     si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
     y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
   */

  const price = 80;
  let amount = 0;
  let paymentAmount = 0;
  let discount = 0;

  let quantity = Number.parseInt(
    prompt("Ingrese la cantidad de zapatos a comprar")
  );

  amount = quantity * price;
  paymentAmount = amount;

  if (quantity >= 10 && quantity < 20) {
    discount = amount * 0.1;
    paymentAmount = amount - discount;
  }

  if (quantity >= 20 && quantity < 30) {
    discount = amount * 0.2;
    paymentAmount = amount - discount;
  }

  if (quantity >= 30) {
    discount = amount * 0.4;
    paymentAmount = amount - discount;
  }

  const result = `
    Cantidad comprada:  ${quantity}
    Total sin descuento:  ${amount}
    Descuento:  ${discount}
    Total a pagar:  ${paymentAmount}
    `;

  alert(result);
  console.log(result);
}

function ejercicio10() {
  /***
   * 10. Hacer un algoritmo en Javascript que diga si un número es par o impar.
   */

  let num = Number.parseInt(prompt("ingrese un valor"));
  if (num % 2 == 0) {
    alert("El numero es par");
  } else {
    alert("El numero es impar");
  }
}

function ejercicio13() {
  /**13. Hacer un algoritmo en Javascript
   * que lea una letra y diga si es una vocal. */

  const letter = prompt("Ingrese una letra");

  switch (letter) {
    case "a":
      alert("Es una vocal");
      break;
    case "e":
      alert("Es una vocal");
      break;
    case "i":
      alert("Es una vocal");
      break;
    case "o":
      alert("Es una vocal");
      break;
    case "u":
      alert("Es una vocal");
      break;
    default:
      alert("No es una vocal");
  }
}

function ejercicio17() {
  /**17. Hacer un algoritmo en Javascript donde se
   * ingrese una hora y nos calcule la hora dentro de
   *  un segundo.
   */
  let hour = Number.parseInt(prompt("Ingrese la hora"));
  let minute = Number.parseInt(prompt("Ingrese los minutos"));
  let second = Number.parseInt(prompt("Ingrese los segundos"));

  if (hour > 23 || minute > 59 || second > 59) {
    alert("Fecha no valida");
    return;
  }

  second = second + 1;

  if (second == 60) {
    second = 0;
    minute = minute + 1;
  }

  if (minute == 60) {
    minute = 0;
    hour = hour + 1;
  }

  if (hour == 24) {
    hour = 0;
  }

  alert(`La hora dentro de un segundo es: ${hour}:${minute}:${second}`);
}

function ejercicio21() {
  /**21. Hacer un algoritmo en Javascript que
   * permita calcular el factorial de un número. */

  let num = Number.parseInt(prompt("Ingrese un numero"));
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }

  const resul = `El factorial de ${num} es ${factorial}`;

  alert(resul);
}

function ejercicio22() {
  /**
   * 22. Hacer un algoritmo en Javascript
   *  para calcular la suma de los n primeros números.
   */

  let num = Number.parseInt(prompt("Ingrese un numero"));
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  const resul = `La suma de los ${num} primeros numeros es ${sum}`;

  alert(resul);
}

function ejercicio25() {
  /**
25. Hacer un algoritmo en Javascript para calcular 
el factorial de un número de una forma distinta.
   */
  let num = Number.parseInt(prompt("Ingrese un numero"));
  let factorial = 1;
  let counter = 1;

  while (counter <= num) {
    factorial = factorial * counter;
    counter++;
  }

  const resul = `El factorial de ${num} es ${factorial}`;

  alert(resul);
}

function ejercicio28() {
  /**28. Hacer un algoritmo en Javascript para calcular la suma de los
   * primeros cien números con un ciclo repetir. */

  let sum = 0;
  let counter = 1;

  do {
    sum = sum + counter;
    counter++;
  } while (counter <= 100);

  const resul = `La suma de los primeros 100 numeros es ${sum}`;
  alert(resul);
}

function ejercicio33() {
  /*
   * 33. Hacer un algoritmo en Javascript que permita al usuario continuar con el programa.
   * *
   */

  let letter = "s";
  do {
    letter = prompt("Desea continuar? (s/n)");
  } while (letter.toLocaleLowerCase() != "n");
  alert("Gracias por usar el programa");
}


