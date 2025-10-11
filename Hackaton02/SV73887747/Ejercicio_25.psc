Proceso Ejercicio_25
	//25. Hacer un algoritmo en Pseint para calcular 
	//	el factorial de un número de una forma distinta.
	
	Definir n, factorial, contador Como Entero
	
	Escribir "Ingrese un número entero positivo:"
	Leer n
	
	Si n < 0 Entonces
		Escribir "Error: el número debe ser positivo."
	Sino
		factorial = 1
		contador = 1
		
		Mientras contador <= n Hacer
			factorial = factorial * contador
			contador = contador + 1
		FinMientras
		
		Escribir "El factorial de ", n, " es: ", factorial
	FinSi
FinProceso
