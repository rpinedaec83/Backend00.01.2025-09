//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

Proceso Ejercicio09
		
	Definir salario, aumento como Real
	
	Escribir "Ingrese el monto del salario: "
	Leer salario
	
	Si salario >= 2000 Entonces
		Escribir "Salario con aumento aplicado: " salario * 1.05
	SiNo
		Escribir "Salario con aumento aplicado: " salario * 1.10
	FinSi
	
FinProceso