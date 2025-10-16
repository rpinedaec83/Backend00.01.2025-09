Algoritmo nueve
	
	// Hacer un algoritmo en PSeint para determinar el
	// aumento de un trabajador, se debe tomar en cuenta
	// que si ganaba mas de $2000 tendra un aumento del 5%
	// si generaba menos de $2000 su aumento sera de un 10%
	
	Definir salarioActual, aumento, nuevoSalario Como Real
	
	Escribir "Ingrese el salario actual del trabajador: "
	Leer salarioActual
	
	Si salarioActual > 2000 Entonces
		aumento <- salarioActual * 0.05
	SiNo
		aumento <- salarioActual * 0.10
	Fin Si
	
	nuevoSalario <- salarioActual + aumento
	
	Escribir "El aumento es de: $", aumento
	Escribir "El nuevo salario del trabajador es: $", nuevoSalario
	
FinAlgoritmo
