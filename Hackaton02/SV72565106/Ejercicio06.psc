Proceso Ejercicio06
	Definir sueldo, horas, sueldoNormal, horasExtras, sueldoExtra Como Real
	
	Escribir "Ingrese el numero de horas trabajadas en la semana: "
	Leer horas
	
	si	horas<=40 Entonces
		sueldo = horas * 20
	SiNo
		horasExtras = horas - 40
		sueldoNormal = 40 * 20
		sueldoExtra = horasExtras * 25
		sueldo = sueldoNormal + sueldoExtra
	FinSi
	
	Escribir "Sueldo semanal: " sueldo
	
FinProceso
