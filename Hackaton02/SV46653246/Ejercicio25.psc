Proceso Ejercicio25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	
	Definir n, factorial, contador Como Entero
	factorial = 1
	contador = 1
	Escribir  "Ingrese un número"
	leer n
	
	Mientras (contador<=n) Hacer
		Escribir contador
		factorial<- factorial*contador
		contador <- contador+1
		
	FinMientras
	
	Escribir "El factorial del número" n "es: " factorial
	
FinProceso
