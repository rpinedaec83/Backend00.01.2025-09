/**
 * Un array con 10 empleados que tenga {nombre, depto, salario, años}
 * Calculen el promedio de salarios por depto
 * Listen los empleados con + 5 años de experiencia
 * Ranking de salarios de mayor a menor 
 * Convertir el resultado en string de JSON 
**/

//Array de 10 empleados 
const listaEmpleados = [
  { nombre: "Ana", depto: "Ventas", salario: 2500, anios: 4 },
  { nombre: "Luis", depto: "Ventas", salario: 2800, anios: 6 },
  { nombre: "Carlos", depto: "IT", salario: 4000, anios: 8 },
  { nombre: "Maria", depto: "IT", salario: 4200, anios: 3 },
  { nombre: "Sofia", depto: "Recursos Humanos", salario: 3000, anios: 7 },
  { nombre: "Jorge", depto: "Marketing", salario: 2700, anios: 5 },
  { nombre: "Elena", depto: "Marketing", salario: 2900, anios: 2 },
  { nombre: "Pedro", depto: "IT", salario: 4500, anios: 9 },
  { nombre: "Lucia", depto: "Ventas", salario: 3100, anios: 10 },
  { nombre: "Andres", depto: "Recursos Humanos", salario: 3300, anios: 6 }
];

//Calculen el promedio de salarios por depto
console.log("Lista de empleados:");
console.log(listaEmpleados);


let resumenDepartamentos = {}; // objeto vacío para guardar los datos

for (let i = 0; i < listaEmpleados.length; i++) {
  let empleado = listaEmpleados[i];
  let departamento = empleado.departamento;
  let salario = empleado.salario;

  // Si el departamento no existe todavía, lo creamos
  if (!resumenDepartamentos[departamento]) {
    resumenDepartamentos[departamento] = {
      totalSalarios: 0,
      cantidadEmpleados: 0
    };
  }

  // Sumamos el salario y contamos el empleado
  resumenDepartamentos[departamento].totalSalarios += salario;
  resumenDepartamentos[departamento].cantidadEmpleados++;
}

console.log("Resumen de salarios por departamento:");
console.log(resumenDepartamentos);

let promedioPorDepartamento = Object.entries(resumenDepartamentos).map(([departamento, datos]) => ({
  departamento,
  promedioSalario: (datos.totalSalarios / datos.cantidadEmpleados).toFixed(2)
}));

console.log("Promedio de salarios por departamento:");
console.log(promedioPorDepartamento);

// Empleados con mas de 5 años de experiencia
let empleadosConExperiencia = listaEmpleados.filter(empleado => empleado.anios > 5);
console.log("Empleados con mas de 5 años de experiencia:");
console.log(empleadosConExperiencia);

// Ranking de salarios (mayor a menor)
let rankingSalarios = [...listaEmpleados].sort((a, b) => b.salario - a.salario);
console.log("Ranking de empleados por salario:");
console.log(rankingSalarios);

// Crear resultado final en JSON
let resultadoFinal = {
  promedioPorDepartamento,
  empleadosConExperiencia,
  rankingSalarios
};

let resultadoJson = JSON.stringify(resultadoFinal, null, 2);

console.log("Resultado final en formato JSON:");
console.log(resultadoJson);

