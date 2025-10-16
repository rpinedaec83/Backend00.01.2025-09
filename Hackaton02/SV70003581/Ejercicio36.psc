//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36
	
	Definir n, i, a, b, c Como Entero
	
	Escribir "Ingrese la cantidad de términos:"
	Leer n
	
	a = 0
	b = 1
	
	Escribir "Serie Fibonacci: "
	Escribir a
	Escribir b
	
	Para i = 3 Hasta n Con Paso 1 Hacer
		c = a + b
		Escribir c
		a = b //Reasgino valor a las variables
		b = c
	FinPara	
FinProceso