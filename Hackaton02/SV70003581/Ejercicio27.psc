//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Proceso Ejercicio27
	
	Definir media Como Real
	Definir num, iteraciones, acumulador Como Entero
	
	acumulador = 0
	iteraciones = 0
	
	Escribir "Para salir digite un número negativo"
	
	Repetir
		Escribir "Digite un número"
		Leer num
		si num > 0 Entonces
			acumulador = acumulador + num
			iteraciones = iteraciones + 1
		FinSi		
	Hasta Que num < 0
	
	Escribir "La media es: " acumulador/iteraciones
	
FinProceso