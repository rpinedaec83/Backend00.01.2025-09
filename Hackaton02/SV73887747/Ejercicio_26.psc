Proceso Ejercicio_26
	// 26. Hacer un algoritmo en Pseint para calcular el resto 
	//	y cociente por medio de restas sucesivas.
	
	Definir dividendo, divisor, cociente, resto Como Entero
	
	Escribir "Ingrese el dividendo (entero positivo):"
	Leer dividendo
	Escribir "Ingrese el divisor (entero positivo):"
	Leer divisor
	
	Si divisor <= 0 Entonces
		Escribir "Error: el divisor debe ser mayor que cero."
	Sino
		cociente = 0
		resto = dividendo
		
		Mientras resto >= divisor Hacer
			resto = resto - divisor
			cociente = cociente + 1
		FinMientras
		
		Escribir "Cociente: ", cociente
		Escribir "Resto: ", resto
	FinSi
FinProceso
