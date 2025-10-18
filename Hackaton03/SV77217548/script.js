
//Catálogo de ejercicios con id para crear botones.
const catalogoEjercicios = [
  {id:1,titulo:"¿Tiene tres dígitos?"},
  {id:2,titulo:"¿Es negativo?"},
  {id:3,titulo:"¿Termina en 4?"},
  {id:4,titulo:"Ordenar 3 enteros"},
  {id:5,titulo:"Descuento por zapatos"},
  {id:6,titulo:"Sueldo semanal"},
  {id:7,titulo:"Descuento por membresía"},
  {id:8,titulo:"Promedio de 3 notas"},
  {id:9,titulo:"Aumento salarial"},
  {id:10,titulo:"Par o impar"},
  {id:11,titulo:"El mayor de 3 números"},
  {id:12,titulo:"El mayor de 2 números"},
  {id:13,titulo:"¿Es vocal?"},
  {id:14,titulo:"¿Es primo?"},
  {id:15,titulo:"Convertir cm/in y lb/kg"},
  {id:16,titulo:"Día de la semana"},
  {id:17,titulo:"Hora actual + 1 segundo"},
  {id:18,titulo:"Venta de CDs + ganancia"},
  {id:19,titulo:"Pago por puesto y días"},
  {id:20,titulo:"Operaciones con 4 enteros"},
  {id:21,titulo:"Factorial método 1"},
  {id:22,titulo:"Suma n primeros números"},
  {id:23,titulo:"Suma impares ≤ n"},
  {id:24,titulo:"Suma pares ≤1000"},
  {id:25,titulo:"Factorial método 2"},
  {id:26,titulo:"Cociente/resto por restas sucesivas"},
  {id:27,titulo:"Media de números positivos"},
  {id:28,titulo:"Suma del 1 al 100 (repetir)"},
  {id:29,titulo:"Suma del 1 al 100 (mientras)"},
  {id:30,titulo:"Suma del 1 al 100 (para)"},
  {id:31,titulo:"Media pares vs impares (10 números)"},
  {id:32,titulo:"Ciudad más poblada (33)"},
  {id:33,titulo:"Continuar programa (S/N)"},
  {id:34,titulo:"Tablas de multiplicar del 1 al 9"},
  {id:35,titulo:"Mayor y menor (20 números)"},
  {id:36,titulo:"Serie de Fibonacci"},
  {id:37,titulo:"MCD (Euclides)"},
  {id:38,titulo:"¿Número perfecto?"},
  {id:39,titulo:"π (Gregory–Leibniz)"},
  {id:40,titulo:"π (Nilakantha)"},
];
window.catalogoEjercicios = catalogoEjercicios;

//Funciones auxiliares para los ejercicios.
function showError(msg){ return Swal.fire({icon:'error', title:'Error', text: msg}); }

async function askText({title, inputLabel, subtitle="", placeholder=""}){
  const {value} = await Swal.fire({title, input:'text', text:subtitle, inputLabel, inputPlaceholder:placeholder, showCancelButton:true});
  if (value === undefined) throw new Error("Cancelado");
  return value;
}

async function askNumber({title, subtitle="", inputLabel, placeholder="", integer=false, min=null, max=null}){
  const raw = await askText({title, subtitle, inputLabel, placeholder});
  const n = Number(raw);
  if (Number.isNaN(n)) throw new Error("Debes ingresar un número.");
  if (integer && !Number.isInteger(n)) throw new Error("Debe ser entero.");
  if (min!==null && n<min) throw new Error(`Debe ser ≥ ${min}.`);
  if (max!==null && n>max) throw new Error(`Debe ser ≤ ${max}.`);
  return n;
}

//(Parte principal) Ejercicios del 01 al 40.
async function ejercicio01() {
  try {
    const n = await askNumber({
      title: "Ejercicio 01",
      subtitle: "Hacer un algoritmo que lea un número y determine si tiene tres dígitos.",
      inputLabel: "Ingresa un número entero:",
      integer: true
    });

    const abs = Math.abs(n);
    let mensaje = "";

    if (abs >= 100 && abs <= 999) {
      mensaje = "tiene";
    } else {
      mensaje = "NO tiene";
    }

    await Swal.fire({icon: "info", html: `<b>${n}</b> ${mensaje} tres dígitos.`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio02() {
  try {
    const n = await askNumber({
      title: "Ejercicio 02",
      subtitle: "Hacer un algoritmo que lea un número entero por el teclado y determinar si es negativo.",
      inputLabel: "Ingresa un número entero:",
      integer: true
    });

    let msg = "";
    if (n < 0) {
      msg = `<b>${n}</b> es negativo.`;
    } else {
      msg = `<b>${n}</b> NO es negativo.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio03() {
  try {
    const n = await askNumber({
      title: "Ejercicio 03",
      subtitle: "Hacer un algoritmo que lea un número y determinar si termina en 4.",
      inputLabel: "Ingresa un número entero:",
      integer: true
    });

    const ultimoEs4 = Math.abs(n) % 10 === 4;

    let msg = "";
    if (ultimoEs4) {
      msg = `<b>${n}</b> termina en 4.`;
    } else {
      msg = `<b>${n}</b> no termina en 4.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio04() {
  try {
    const enunciado = "Hacer un algoritmo que lea tres números enteros y los muestre de menor a mayor.";
    const a = await askNumber({ title: "Ejercicio 04", subtitle: enunciado, inputLabel: "Ingresa primer número entero:", integer: true });
    const b = await askNumber({ title: "Ejercicio 04", subtitle: enunciado, inputLabel: "Ingresa segundo número entero:", integer: true });
    const c = await askNumber({ title: "Ejercicio 04", subtitle: enunciado, inputLabel: "Ingresa tercer número entero:", integer: true });

    let x=a, y=b, z=c;
    if (x > y) {
      [x, y] = [y, x];
    }
    if (y > z) {
      [y, z] = [z, y];
    }
    if (x > y) {
      [x, y] = [y, x];
    }

    await Swal.fire({icon: "info", html: `Números de menor a mayor: <b>${x}, ${y}, ${z}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio05() {
  try {
    const q = await askNumber({
      title: "Ejercicio 05",
      subtitle: "Hacer un algoritmo para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.",
      inputLabel: "Ingresa la cantidad de zapatos a comprar:",
      integer: true,
      min: 1
    });

    const precioUnitario = 80;
    let d = 0;

    if (q > 30) {
      d = 0.40;
    } else if (q > 20) {
      d = 0.20;
    } else if (q > 10) {
      d = 0.10;
    }

    const subtotal = q * precioUnitario;
    const descuento = subtotal * d;
    const total = subtotal - descuento;

    await Swal.fire({
      icon: "info",
      html: `
        Cantidad: <b>${q}</b><br>
        Precio unitario: <b>$${precioUnitario.toFixed(2)}</b><br>
        Subtotal: <b>$${subtotal.toFixed(2)}</b><br>
        Descuento: <b>${(d * 100).toFixed(0)}%</b> (−$${descuento.toFixed(2)})<br>
        <hr>
        Total a pagar: <b>$${total.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio06() {
  try {
    const h = await askNumber({
      title: "Ejercicio 06",
      subtitle: "Hacer un algoritmo para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.",
      inputLabel: "Ingresa tus horas trabajadas:",
      integer: true,
      min: 0
    });

    const PAGO_POR_HORA_BASE = 20;
    const PAGO_POR_HORA_EXTRA = 25;

    let horasBase = h;
    let horasExtra = 0;

    if (h > 40) {
      horasBase = 40;
      horasExtra = h - 40;
    }

    const pagoBase = horasBase * PAGO_POR_HORA_BASE;
    const pagoExtra = horasExtra * PAGO_POR_HORA_EXTRA;
    const total = pagoBase + pagoExtra;

    await Swal.fire({
      icon: "info",
      html: `
        Horas base: <b>${horasBase}</b> × $${PAGO_POR_HORA_BASE} = <b>$${pagoBase.toFixed(2)}</b><br>
        Horas extra: <b>${horasExtra}</b> × $${PAGO_POR_HORA_EXTRA} = <b>$${pagoExtra.toFixed(2)}</b><br>
        <hr>
        Sueldo total: <b>$${total.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio07() {
  try {
    const enunciado = `Hacer un algoritmo en Javascript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo.
      Sólo existen tres tipos de membresía: A, B y C.
      Descuentos: Tipo A: 10%, Tipo B: 15%, Tipo C: 20%`;
    const monto = await askNumber({
      title: "Ejercicio 07",
      subtitle: enunciado,
      inputLabel: "Ingresa el monto de compra:",
      min: 0
    });

    const { value: tipoMembresia } = await Swal.fire({
      title: "Tipo de membresía",
      input: "select",
      inputOptions: { A: "A (10%)", B: "B (15%)", C: "C (20%)" },
      inputPlaceholder: "Selecciona",
      showCancelButton: true
    });
    if (tipoMembresia === undefined) throw new Error("Cancelado");
    
    const tipo = String(tipoMembresia).toUpperCase();
    let d = 0;

    if (tipo === "A") {
      d = 0.10;
    } else if (tipo === "B") {
      d = 0.15;
    } else if (tipo === "C") {
      d = 0.20;
    } else {
      return Swal.fire({icon: "error", title: "Error", text: "Tipo de membresía inválido."});
    }

    const subtotal = monto;
    const descuento = subtotal * d;
    const total = subtotal - descuento;

    await Swal.fire({
      icon: "info",
      html: `
        Tipo: <b>${tipo}</b><br>
        Subtotal: <b>$${subtotal.toFixed(2)}</b><br>
        Descuento: <b>${(d * 100).toFixed(0)}%</b> (−$${descuento.toFixed(2)})<br>
        <hr>
        Total a pagar: <b>$${total.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio08() {
  try {
    const enunciado = "Hacer un algoritmo para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.";

    const n1 = await askNumber({ title: "Ejercicio 08", subtitle: enunciado, inputLabel: "Ingresa Nota 1:", min: 0, max: 20, integer: true });
    const n2 = await askNumber({ title: "Ejercicio 08", subtitle: enunciado, inputLabel: "Ingresa Nota 2:", min: 0, max: 20, integer: true });
    const n3 = await askNumber({ title: "Ejercicio 08", subtitle: enunciado, inputLabel: "Ingresa Nota 3:", min: 0, max: 20, integer: true });

    const promedio = (n1 + n2 + n3) / 3;

    let estado = "";
    if (promedio >= 11) {
      estado = "Aprobado";
    } else {
      estado = "Desaprobado";
    }

    await Swal.fire({
      icon: "info",
      html: `
        Notas: <b>${n1}</b>, <b>${n2}</b>, <b>${n3}</b><br>
        Promedio: <b>${promedio.toFixed(2)}</b><br>
        <hr>
        Resultado: <b>${estado}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio09() {
  try {
    const s = await askNumber({
      title: "Ejercicio 09",
      subtitle: "Hacer un algoritmo para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.",
      inputLabel: "Ingresa tu sueldo actual:",
      min: 0
    });

    let incremento;
    if (s > 2000) {
      incremento = 0.05;
    } else {
      incremento = 0.10;
    }

    const aumento = s * incremento;
    const nuevo = s + aumento;

    await Swal.fire({
      icon: "info",
      html: `
        Sueldo actual: <b>$${s.toFixed(2)}</b><br>
        Aumento: <b>${(incremento * 100).toFixed(0)}%</b> ( +$${aumento.toFixed(2)} )<br>
        <hr>
        Nuevo sueldo: <b>$${nuevo.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio10() {
  try {
    const n = await askNumber({
      title: "Ejercicio 10",
      subtitle: "Hacer un algoritmo que diga si un número es par o impar.",
      inputLabel: "Ingresa un número entero:",
      integer: true
    });

    let msg = "";
    if (n % 2 === 0) {
      msg = `<b>${n}</b> es par.`;
    } else {
      msg = `<b>${n}</b> es impar.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

//Registrar en window las funciones de los ejercicios para que puedan ser llamadas desde los botones.
for (let i=1;i<=40;i++){ window['ejercicio'+String(i).padStart(2,'0')] = eval('ejercicio'+String(i).padStart(2,'0')); }
