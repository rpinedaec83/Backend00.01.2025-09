Proceso Ejercicio09
	//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10
	//%.
	
	Definir Salario, Aumento, nuevoSalario Como Real
	Repetir
		

	Escribir "Ingrese salario de trabajador"
	Leer Salario 
	
	Si Salario > 2000
		Entonces
		nuevoSalario = Salario*1.05
	SiNo
		nuevoSalario = Salario*1.1
		
	FinSi
	
	Escribir "El nuevo Salario es: " nuevoSalario USD
Hasta Que nunca	
FinProceso
