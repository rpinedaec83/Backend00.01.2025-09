// Crear array con 10 empleados.
let arrEmployees = [
    { nombre: "Carlos", dpto: "Desarrollo", salario: 2500, años: 6 },
    { nombre: "Ana", dpto: "Recursos Humanos", salario: 1800, años: 3 },
    { nombre: "Luis", dpto: "Desarrollo", salario: 3000, años: 8 },
    { nombre: "María", dpto: "Ventas", salario: 2200, años: 4 },
    { nombre: "José", dpto: "Ventas", salario: 2600, años: 7 },
    { nombre: "Elena", dpto: "Recursos Humanos", salario: 1900, años: 5 },
    { nombre: "Ricardo", dpto: "Contabilidad", salario: 2400, años: 10 },
    { nombre: "Patricia", dpto: "Contabilidad", salario: 2100, años: 2 },
    { nombre: "Lucía", dpto: "Desarrollo", salario: 2800, años: 9 },
    { nombre: "Miguel", dpto: "Ventas", salario: 3100, años: 11 }
];

// 1. PROMEDIO DE SALARIOS POR DEPARTAMENTO
// reduce(): Agrupar salarios de cada departamento.
// Almacenar total de sueldos y cantidad de empleados por dpto.
let salariosPorDepto = arrEmployees.reduce((acc, { dpto, salario }) => {
    if (!acc[dpto]) {                      // Si no existe el depto, crearlo
        acc[dpto] = { total: 0, cantidad: 0 };
    }
    acc[dpto].total += salario;            // Sumar el salario
    acc[dpto].cantidad++;                  // Aumento el contador
    return acc;
}, {});

// Object.entries(): Convertir resultado a un array,
// map(): Calcular promedio de cada departamento.
let promedioPorDepto = Object.entries(salariosPorDepto).map(([dpto, datos]) => ({
    dpto,
    promedio: (datos.total / datos.cantidad).toFixed(2)
}));

console.log(promedioPorDepto);


// 2. EMPLEADOS CON MÁS DE 5 AÑOS DE EXPERIENCIA
// filter(): lista solo los empleados con más de 5 años.
let empleadosConExperiencia = arrEmployees.filter(e => e.años > 5);

console.log(empleadosConExperiencia);


// 3. RANKING DE SALARIOS (DE MAYOR A MENOR)
// Copiar el array con el spread operator para no modificar el original.
// sort(): ordenar
// map(): numerar cada puesto.
let rankingSalarios = [...arrEmployees]
    .sort((a, b) => b.salario - a.salario)   // Ordeno por salario descendente
    .map((e, i) => ({ puesto: i + 1, nombre: e.nombre, salario: e.salario }));

console.log(rankingSalarios);


// 4. CONVERTIR RESULTADOS A STRING JSON
// Combinar todos los resultados en un solo objeto y convertirlo a formato JSON legible con sangría de 2 espacios.
let resultadoJSON = JSON.stringify({
    promedioPorDepto,
    empleadosConExperiencia,
    rankingSalarios
}, null, 2);

console.log("=== RESULTADO FINAL EN FORMATO JSON ===");
console.log(resultadoJSON);