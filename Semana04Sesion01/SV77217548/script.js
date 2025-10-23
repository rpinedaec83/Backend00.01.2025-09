
/**
 * Un array con 10 empleados que tenga {nombre, depto, salario, años}
 * Calculen el promedio de salarios por depto
 * Listen los empleados con + 5 años de experiencia
 * Ranking de salarios de mayor a menor 
 * Convertir el resultado en string de JSON 
 * 
 * 
 */

// Array de empleados
let arrEmpleados = [
    { nombre: "Rony", dpto: "Ventas", salario: 4200, años: 6 },
    { nombre: "Luis", dpto: "Ventas", salario: 3800, años: 2 },
    { nombre: "German", dpto: "TI", salario: 5600, años: 7 },
    { nombre: "Jean", dpto: "TI", salario: 5100, años: 4 },
    { nombre: "Pierre", dpto: "Marketing", salario: 4400, años: 5 },
    { nombre: "Olenka", dpto: "Finanzas", salario: 4600, años: 8 },
    { nombre: "Alejandra", dpto: "Finanzas", salario: 6000, años: 10 },
    { nombre: "Carla", dpto: "Finanzas", salario: 5200, años: 3 },
    { nombre: "Marcelo", dpto: "Operaciones", salario: 3900, años: 1 },
    { nombre: "Nicolas", dpto: "Operaciones", salario: 4100, años: 6 },
]

// Promedio de salarios por dpto
function promedioPorDpto(arrData) {
  const grupos = {};
  for (const emp of arrData) {
    const a = emp.dpto;
    if (!grupos[a])
        grupos[a] = { suma: 0, cantidad: 0 };
    grupos[a].suma += emp.salario;
    grupos[a].cantidad += 1;
  }
  const promedios = {};
  for (const dpto in grupos) {
    const {suma, cantidad} = grupos[dpto];
    promedios[dpto] = (suma / cantidad);
  }
  return promedios;
}
console.log(promedioPorDpto(arrEmpleados));

// Empleados con mas de 5 a;os de experiencia
const masDe5Anos = arrEmpleados.filter(emp => emp.años > 5);
console.log(masDe5Anos);

// ranking de salarios de mayor a menor
const ranking = [...arrEmpleados].sort((a, b) => b.salario - a.salario);
console.log(ranking);

// Resultados en JSON
const resultadosJson = {
  promedioPorDpto: promedioPorDpto(arrEmpleados),
  empleadosConMasDe5Anos: masDe5Anos,
  rankingSalarios: ranking
};

const jsonString = JSON.stringify(resultadosJson);
console.log(jsonString);
