//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
// Solo llega hasta el factorial de 12
Proceso Ejercicio21
	
	Definir num, i, factorial Como Entero
	Factorial = 1
	Escribir "Ingrese un número entero:"
	Leer num
	
	Para i <- 1 Hasta num Con Paso 1 Hacer
		factorial = factorial * i
	FinPara
	
	Escribir factorial
	
FinProceso