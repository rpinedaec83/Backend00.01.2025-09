Proceso Ejercicio09
	//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta 
	//que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	Definir sueldo, porcentaje, aumento, nuevo Como Real
	
	Repetir
		Escribir "Ingrese el sueldo actual: "
		Leer sueldo
		
		Si sueldo < 0 Entonces
			Escribir "Ingrese un sueldo actual valido"
		FinSi
	Hasta Que sueldo >= 0
	
	Si sueldo > 2000 Entonces
		porcentaje <- 0.05
	SiNo
		//Tomando en cuenta el que gana 2000 de manera beneficiosa para el. 
		porcentaje <- 0.10
	FinSi
	
	aumento <- sueldo * porcentaje
	nuevo <- sueldo + aumento
	
	Escribir "Porcentaje de aumento: ", porcentaje * 100, "%"
	Escribir "Aumento: $", aumento
	Escribir "Nuevo sueldo: $", nuevo
	
FinProceso
