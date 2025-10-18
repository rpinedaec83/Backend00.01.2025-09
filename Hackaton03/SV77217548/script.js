
//Catálogo de ejercicios con id para crear botones.
const catalogoEjercicios = [
  {id:1,titulo:"¿Tiene tres dígitos?"},
  {id:2,titulo:"¿Es negativo?"},

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
      inputLabel: "Ingrese un número entero:",
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
      inputLabel: "Ingrese un número entero:",
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


//Registrar en window las funciones de los ejercicios para que puedan ser llamadas desde los botones.
for (let i=1;i<=40;i++){ window['ejercicio'+String(i).padStart(2,'0')] = eval('ejercicio'+String(i).padStart(2,'0')); }
