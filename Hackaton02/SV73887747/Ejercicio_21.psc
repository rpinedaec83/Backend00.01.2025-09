Proceso Ejercicio_21
	// 21. Hacer un algoritmo en Pseint que permita 
	//	calcular el factorial de un número.
	
	Definir n, factorial, i Como Entero
	
	Escribir "Ingrese un número entero positivo:"
	Leer n
	
	Si n < 0 Entonces
		Escribir "Error: el número debe ser positivo."
	Sino
		factorial = 1
		Para i = 1 Hasta n Con Paso 1
			factorial = factorial * i
		FinPara
		
		Escribir "El factorial de ", n, " es: ", factorial
	FinSi
	
FinProceso
