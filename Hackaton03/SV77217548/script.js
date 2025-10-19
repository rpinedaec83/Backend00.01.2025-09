
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

async function ejercicio11() {
  try {
    const enunciado = "Hacer un algoritmo que lea tres números y diga cuál es el mayor.";
    const a = await askNumber({ title: "Ejercicio 11", subtitle: enunciado, inputLabel: "Ingrese el primer número:", integer: true });
    const b = await askNumber({ title: "Ejercicio 11", subtitle: enunciado, inputLabel: "Ingrese el segundo número:", integer: true });
    const c = await askNumber({ title: "Ejercicio 11", subtitle: enunciado, inputLabel: "Ingrese el tercer número:", integer: true });

    let mayor = a;
    if (b > mayor) mayor = b;
    if (c > mayor) mayor = c;

    const numerosIguales = [];
    if (a === mayor) numerosIguales.push("primer número");
    if (b === mayor) numerosIguales.push("segundo número");
    if (c === mayor) numerosIguales.push("tercer número");

    let msg;
    if (numerosIguales.length === 1) {
      msg = `El mayor es <b>${mayor}</b> (el ${numerosIguales[0]}).`;
    } else if (numerosIguales.length === 2) {
      msg = `Máximo compartido: <b>${mayor}</b> (el ${numerosIguales.join(" y ")}).`;
    } else {
      msg = `Los tres son iguales: <b>${mayor}</b>.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio12() {
  try {
    const enunciado = "Hacer un algoritmo que lea dos números y diga cuál es el mayor.";
    const a = await askNumber({ title: "Ejercicio 12", subtitle: enunciado, inputLabel: "A", integer: true });
    const b = await askNumber({ title: "Ejercicio 12", subtitle: enunciado, inputLabel: "B", integer: true });

    let msg = "";
    if (a === b) {
      msg = "Son iguales.";
    } else if (a > b) {
      msg = `Numero mayor: <b>${a}</b>`;
    } else {
      msg = `Numero mayor: <b>${b}</b>`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio13() {
  try {
    const txt = await askText({
      title: "Ejercicio 13",
      subtitle: "Hacer un algoritmo que lea una letra y diga si es una vocal.",
      inputLabel: "Ingresa una sola letra:"
    });

    const c0 = String(txt).trim();
    if (!c0) throw new Error("Ingresa una letra.");

    //Para validar que se ingrese exactamente una letra y no números ni caracteres especiales.
    if (!/^\p{L}$/u.test(c0)) throw new Error("Ingresa exactamente una letra (sin números ni símbolos).");

    //Para normalizar letras con tíldes, y luego pasarlo a miniscula.
    const base = c0.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const esVocal = "aeiou".includes(base);

    let msg = "";
    if (esVocal) {
      msg = `<b>${c0}</b> es vocal.`;
    } else {
      msg = `<b>${c0}</b> NO es vocal.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio14() {
  try {
    const n = await askNumber({
      title: "Ejercicio 14",
      subtitle: "Hacer un algoritmo que lea un entero positivo del 1 al diez y determine si es un número primo.",
      inputLabel: "Ingresa un número entero >= 1:",
      integer: true,
      min: 1,
      max: 10
    });
    
    const esPrimo = (k) => {
      if (k < 2) return false;
      if (k === 2) return true;
      if (k % 2 === 0) return false;
      const limite = Math.floor(Math.sqrt(k));
      for (let d = 3; d <= limite; d += 2) {
        if (k % d === 0) return false;
      }
      return true;
    };

    let msg = "";
    if (esPrimo(n)) {
      msg = `<b>${n}</b> es primo.`;
    } else {
      msg = `<b>${n}</b> NO es primo.`;
    }

    await Swal.fire({icon: "info", html: msg});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio15() {
  try {
    const opcion = await askNumber({
      title: "Ejercicio 15",
      subtitle: "Hacer un algoritmo que convierta centímetros a pulgadas y libras a kilogramos.",
      inputLabel: "Escribe: 1 si quieres cm→in y 2 si quieres lb→kg",
      integer: true,
      min: 1,
      max: 2
    });

    if (opcion === 1) {
      const cm = await askNumber({
        title: "Centímetros a pulgadas",
        subtitle: "1 in = 2.54 cm",
        inputLabel: "Ingresa centímetros:",
        min: 0
      });
      const inches = cm / 2.54;
      await Swal.fire({icon: "info", html: `${cm} cm = <b>${inches.toFixed(4)} in</b>`});

    } else {
      const lb = await askNumber({
        title: "Libras a kilogramos",
        subtitle: "1 lb = 0.45359237 kg",
        inputLabel: "Ingresa libras:",
        min: 0
      });
      const kg = lb * 0.45359237;
      await Swal.fire({icon: "info", html: `${lb} lb = <b>${kg.toFixed(4)} kg</b>`});
    }

  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio16() {
  try {
    const dia = await askNumber({
      title: "Ejercicio 16",
      subtitle: "Hacer un algoritmo que lea un número y según ese número, indique el día que corresponde.",
      inputLabel: "Ingresa un número del 1 al 7:",
      integer: true,
      min: 1,
      max: 7
    });

    let nombre;
    switch (dia) {
      case 1: nombre = "Lunes"; break;
      case 2: nombre = "Martes"; break;
      case 3: nombre = "Miércoles"; break;
      case 4: nombre = "Jueves"; break;
      case 5: nombre = "Viernes"; break;
      case 6: nombre = "Sábado"; break;
      case 7: nombre = "Domingo"; break;
    }

    await Swal.fire({icon: "info", html: `Día: <b>${nombre}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio17(){
  try{
    const enunciado = "Hacer un algoritmo donde se ingrese una hora y nos calcule la hora dentro de un segundo.";
    const h = await askNumber({ title: "Ejercicio 17", subtitle: enunciado, inputLabel:"Hora (0–23)", integer:true, min:0, max:23 });
    const m = await askNumber({ title: "Ejercicio 17", subtitle: enunciado, inputLabel:"Minuto (0–59)", integer:true, min:0, max:59 });
    const s = await askNumber({ title: "Ejercicio 17", subtitle: enunciado, inputLabel:"Segundo (0–59)", integer:true, min:0, max:59 });

    let hh = h, mm = m, ss = s + 1;
    if (ss === 60) { ss = 0; mm++; }
    if (mm === 60) { mm = 0; hh++; }
    if (hh === 24) { hh = 0; }

    const pad = x =>
      String(x).padStart(2,'0');

    await Swal.fire({icon:'info', html:`Nueva hora: <b>${pad(hh)}:${pad(mm)}:${pad(ss)}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio18() {
  try {
    const enunciado = `Hacer un algoritmo en Javascript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
      $10. Si se compran unidades separadas hasta 9.
      $8. Si se compran entre 10 unidades hasta 99.
      $7. Entre 100 y 499 unidades.
      $6. Para mas de 500 unidades.
      La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Javascript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.`;
      
    const q = await askNumber({
      title: "Ejercicio 18",
      subtitle: enunciado,
      inputLabel: "Ingresa cantidad de CDs:",
      integer: true,
      min: 1
    });

    let precioUnitario;
    if (q >= 500) {
      precioUnitario = 6;
    } else if (q >= 100) {
      precioUnitario = 7;
    } else if (q >= 10) {
      precioUnitario = 8;
    } else {
      precioUnitario = 10;
    }

    const subtotal = q * precioUnitario;
    const ganancia = subtotal * 0.0825;
    const total = subtotal;

    await Swal.fire({
      icon: "info",
      html: `
        Cantidad: <b>${q}</b><br>
        Precio unitario: <b>$${precioUnitario.toFixed(2)}</b><br>
        Subtotal: <b>$${subtotal.toFixed(2)}</b><br>
        Ganancia (8.25%): <b>$${ganancia.toFixed(2)}</b><br>
        <hr>
        Total de venta: <b>$${total.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio19() {
  try {
    const enunciado = `Hacer un algoritmo en Javascript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
      Cajero (56$/día).
      Servidor (64$/día).
      Preparador de mezclas (80$/día).
      Mantenimiento (48$/día).
      El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó`;
    const { value: puesto } = await Swal.fire({
      title: "Ejercicio 19",
      text: enunciado,
      input: "select",
      inputOptions: {
        "1": "1 - Cajero ($56/día)",
        "2": "2 - Servidor ($64/día)",
        "3": "3 - Preparador ($80/día)",
        "4": "4 - Mantenimiento ($48/día)"
      },
      inputPlaceholder: "Selecciona un ID",
      showCancelButton: true,
      confirmButtonText: "Continuar"
    });
    if (puesto === undefined) throw new Error("Cancelado");

    const diasTrabajados = await askNumber({
      title: "Días trabajados",
      inputLabel: "Ingresa los días trabajados (0–6):",
      integer: true,
      min: 0,
      max: 6
    });

    const tarifas = { "1": 56, "2": 64, "3": 80, "4": 48 };
    const tarifa = tarifas[puesto];
    const pago = tarifa * diasTrabajados;

    const nombres = { "1": "Cajero", "2": "Servidor", "3": "Preparador", "4": "Mantenimiento" };
    const nombrePuesto = nombres[puesto];

    await Swal.fire({
      icon: "info",
      html: `
        Puesto: <b>${puesto} - ${nombrePuesto}</b><br>
        Tarifa: <b>$${tarifa.toFixed(2)}/día</b><br>
        Días: <b>${diasTrabajados}</b><br>
        <hr>
        Pago: <b>$${pago.toFixed(2)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio20() {
  try {
    const enunciado = `Hacer un algoritmo en Javascript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
      ¿Cuántos números son Pares?
      ¿Cuál es el mayor de todos?
      Si el tercero es par, calcular el cuadrado del segundo.
      Si el primero es menor que el cuarto, calcular la media de los 4 números.
      Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.`;
    const n1 = await askNumber({ title: "Ejercicio 20", subtitle: enunciado, inputLabel: "Ingresa el primer número entero:", integer: true, min: 0 });
    const n2 = await askNumber({ title: "Ejercicio 20", subtitle: enunciado, inputLabel: "Ingresa el segundo número entero:", integer: true, min: 0 });
    const n3 = await askNumber({ title: "Ejercicio 20", subtitle: enunciado, inputLabel: "Ingresa el tercer número entero:", integer: true, min: 0 });
    const n4 = await askNumber({ title: "Ejercicio 20", subtitle: enunciado, inputLabel: "Ingresa el cuarto número entero:", integer: true, min: 0 });

    const pares = [n1, n2, n3, n4].filter(x => x % 2 === 0).length;

    const mayor = Math.max(n1, n2, n3, n4);

    let c3;
    if (n3 % 2 === 0) {
      c3 = n2 * n2;
    } else {
      c3 = "No se cumple";
    }

    let media;
    if (n1 < n4) {
      media = (n1 + n2 + n3 + n4) / 4;
    } else {
      media = "No se cumple";
    }

    let suma;
    if (n2 > n3 && n3 >= 50 && n3 <= 700) {
      suma = n1 + n2 + n3 + n4;
    } else {
      suma = "No se cumple";
    }

    await Swal.fire({
      icon: 'info',
      html: `
        Pares: <b>${pares}</b><br>
        Mayor: <b>${mayor}</b><br>
        Si 3º es par → (2º)^2: <b>${c3}</b><br>
        Si 1º < 4º → media: <b>${typeof media === 'number' ? media.toFixed(2) : media}</b><br>
        Si 2º > 3º y 3º está entre [50, 700] → suma: <b>${suma}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio21() {
  try {
    const n = await askNumber({
      title: "Ejercicio 21",
      subtitle: "Hacer un algoritmo que permita calcular el factorial de un número.",
      inputLabel: "Ingresa un número entero no negativo:",
      integer: true,
      min: 0
    });

    const LIMITE = 250000; //Mientras más grande, más se demora, y con 500000 ya se empieza a poner lento.
    if (n > LIMITE) {
      return Swal.fire({
        icon: "error",
        title: "Límite excedido",
        text: `Para evitar bloqueos, ingresa n ≤ ${LIMITE}.`
      });
    }

    if (n === 0 || n === 1) {
      return Swal.fire({ icon: "info", html: `${n}! = <b>1</b>` });
    }

    let f = 1n;
    const nn = BigInt(n); //BigInt para mostar números muy grandes.
    for (let i = 2n; i <= nn; i++) {
      f *= i;
    }

    await Swal.fire({icon: "info", html: `${n}! = <b>${f.toString()}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio22() {
  try {
    const n = await askNumber({
      title: "Ejercicio 22",
      subtitle: "Hacer un algoritmo para calcular la suma de los n primeros números.",
      inputLabel: "Ingresa un número entero mayor a 0:",
      integer: true,
      min: 1
    });

    let suma = 0;
    for (let i = 1; i <= n; i++)
      suma += i;

    await Swal.fire({icon: "info", html: `Suma desde 1 hasta ${n} = <b>${suma}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio23() {
  try {
    const n = await askNumber({
      title: "Ejercicio 23",
      subtitle: "Hacer un algoritmo para calcular la suma de los números impares menores o iguales a n.",
      inputLabel: "Ingresa un número entero mayor a 0:",
      integer: true,
      min: 1
    });

    const k = (n >> 1) + (n & 1);
    const suma = k * k;

    await Swal.fire({icon: "info", html: `Suma = <b>${suma}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio24() {
  try {
    let suma = 0;
    for (let i = 2; i <= 1000; i += 2)
      suma += i;
    await Swal.fire({icon:'info', html:`Suma pares ≤1000 = <b>${suma}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio25(){
  try{
    const n = await askNumber({
      title: "Ejercicio 25",
      subtitle: "Hacer un algoritmo para calcular el factorial de un número de una forma distinta.",
      inputLabel: "Ingresa un número entero no negativo:",
      integer: true,
      min: 0
    });

    const LIMITE = 20000;
    if (n > LIMITE) {
      return Swal.fire({
        icon: "error",
        title: "Límite excedido",
        text: `Para evitar bloqueos, ingresa n ≤ ${LIMITE}.`
      });
    }

    let f = 1n;
    let i = 2n;
    const nn = BigInt(n);
    while (i <= nn) {
      f *= i;
      i++;
    }

    await Swal.fire({icon: "info", html: `${n}! = <b>${f.toString()}</b>`});
  }catch(err){
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio26() {
  try {
    const enunciado = "Hacer un algoritmo para calcular el resto y cociente por medio de restas sucesivas.";
    let A = await askNumber({ title: "Ejercicio 26", subtitle: enunciado, inputLabel: "Ingresa el dividendo (≥ 0):", integer: true, min: 0 });
    const B = await askNumber({ title: "Ejercicio 26", subtitle: enunciado, inputLabel: "Ingresa el divisor (≥ 1):", integer: true, min: 1 });

    let q = 0; //cociente

    if (A < B) {
    } else {
      while (A >= B) {
        A -= B;
        q++;
      }
    }

    await Swal.fire({
      icon: 'info',
      html: `Cociente: <b>${q}</b><br>Resto: <b>${A}</b>`
    });

  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio27(){
  try{
    const arr = await askList({
      title: "Ejercicio 27",
      subtitle: "Hacer un algoritmo para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.",
      inputLabel: "Inserta los números separados por comas (ej: 1,2,3):",
    });

    const corte = arr.findIndex(x => x < 0);
    const antesDeNegativo = (corte === -1) ? arr : arr.slice(0, corte);

    const pos = antesDeNegativo.filter(x => x >= 0);

    if (!pos.length) throw new Error("No hay valores positivos antes del primer negativo.");

    const suma = pos.reduce((a, b) => a + b, 0);
    const avg  = suma / pos.length;

    await Swal.fire({
      icon: 'info',
      html: `Media de positivos = <b>${avg.toFixed(4)}</b> (n=${pos.length})`
    });
  }catch(err){
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio27() {
  try {
    const lista = [];

    while (true) {
      const { value } = await Swal.fire({
        title: "Ejercicio 27",
        text: "Hacer un algoritmo para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.",
        input: "text",
        inputLabel: "Ingresa un número positivo para continuar o negativo para terminar:",
        showCancelButton: true,
        confirmButtonText: "Agregar"
      });
      if (value === undefined) throw new Error("Cancelado");

      const n = Number(String(value).trim());

      if (!Number.isFinite(n)) {
        await Swal.fire({icon: "error", title: "Error", text: "Debes ingresar un número válido."});
        continue;
      }

      if (n < 0) {

        break;
      }

      lista.push(n);
    }

    if (lista.length === 0) {
      await Swal.fire({icon: "error", title: "Sin datos", text: "No ingresaste ningún número no negativo."});
      return;
    }

    const suma = lista.reduce((a, b) => a + b, 0);
    const media = suma / lista.length;

    await Swal.fire({
      icon: "info",
      html: `
        Números: <b>${lista.join(", ")}</b><br>
        Cantidad: <b>${lista.length}</b><br>
        <hr>
        Media: <b>${media.toFixed(4)}</b>
      `
    });
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio28() {
  try {
    let i = 1;
    let sum = 0;
    do {
      sum += i;
      i++;
    } while (!(i > 100));

    await Swal.fire({icon: 'info', html: `Suma del 1 al 100 (repetir) = <b>${sum}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio29() {
  try {
    let i = 1, sum = 0;
    while (i <= 100) {
      sum += i;
      i++;
    }
    await Swal.fire({icon:'info', html:`Suma del 1 al 100 (mientras) = <b>${sum}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}

async function ejercicio30() {
  try {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    await Swal.fire({icon:'info', html:`Suma del 1 al 100 (para) = <b>${sum}</b>`});
  } catch (err) {
    if (err.message !== "Cancelado") showError(err.message);
  }
}



//Registrar en window las funciones de los ejercicios para que puedan ser llamadas desde los botones.
for (let i=1;i<=40;i++){ window['ejercicio'+String(i).padStart(2,'0')] = eval('ejercicio'+String(i).padStart(2,'0')); }
