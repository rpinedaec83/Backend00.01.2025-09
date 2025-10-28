async function ejercicio01() {
  //1. Hacer un algoritmo en Javascript que lea un número por el teclado y determinar si tiene tres dígitos.

  //let numero = Number.parseInt( prompt("Escribe un numero"));
  let numero = 0;
  const { value: numeroRecibido } = await Swal.fire({
    title: "Ejercicio 01: ",
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
  let numero = 0;
  let resultado = "";

  // --- 1. Entrada de datos usando SweetAlert2 ---
  const { value: numeroRecibido } = await Swal.fire({
    title: "Ejercicio 02: Positivo, Negativo o Cero",
    input: "text",
    inputLabel: "Escribe un número (puede ser decimal)",
    inputPlaceholder: "Ingresa un número",
  });

  if (numeroRecibido) {
    numero = Number.parseFloat(numeroRecibido);
  }

  if (isNaN(numero)) {
    Swal.fire("Lo que escribiste no es un numero");
    return;
  }

  if (numero > 0) {
    resultado = "El número es positivo.";
  } else if (numero < 0) {
    resultado = "El número es negativo.";
  } else {
    // En este punto, el número es 0
    resultado = "El número es **cero** 🎯.";
  }

  // --- 4. Mostrar el resultado usando SweetAlert2 ---
  Swal.fire({
    icon: "info",
    title: `Resultado para el número ${numero}`,
    html: resultado, // Usamos 'html' para permitir el texto en negrita (markdown)
  });
}
