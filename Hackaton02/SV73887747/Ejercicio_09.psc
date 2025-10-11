Proceso Ejercicio_09
	//9. Hacer un algoritmo en Pseint para determinar el aumento 
	//de un trabajador, se debe tomar en cuenta que si ganaba más 
	//de $2000 tendrá un aumento del 5%, si generaba menos de $2000 
	//su aumento será de un 10%.
	
	Definir sueldo, aumento, nuevo_sueldo Como Real
	
	Escribir "Ingrese el sueldo actual del trabajador:"
	Leer sueldo
	
	Si sueldo > 2000 Entonces
		aumento = sueldo * 0.05
	Sino
		aumento = sueldo * 0.10
	FinSi
	
	nuevo_sueldo = sueldo + aumento
	
	Escribir "El aumento es: $", aumento
	Escribir "El nuevo sueldo es: $", nuevo_sueldo
	
FinProceso
