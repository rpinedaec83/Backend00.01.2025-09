Proceso Ejercicio25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	
	Definir n, factorial, contador Como Entero
	factorial <- 1
	contador <- 1
	
	Escribir 'Ingrese un numero'
	Leer n
	
	Mientras (contador<=n) Hacer
		Escribir contador
		factorial <- factorial*contador
		contador <- contador+1
	FinMientras
	
	Escribir 'El factorial del numero: ', n, ' es:', factorial
	
FinProceso

