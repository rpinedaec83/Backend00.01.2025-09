Proceso Ejercicio_36
	// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	
	Definir n, a, b, siguiente, i Como Entero
	
	Escribir "Ingrese la cantidad de términos de la serie Fibonacci:"
	Leer n
	
	a = 0
	b = 1
	
	Escribir "Serie de Fibonacci:"
	Escribir a
	Escribir b
	
	Para i = 3 Hasta n Con Paso 1
		siguiente = a + b
		Escribir siguiente
		a = b
		b = siguiente
	FinPara
	
FinProceso
