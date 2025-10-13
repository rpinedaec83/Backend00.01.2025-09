Proceso Ejercicio36
	
	// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

	Definir n, a, b, c, i Como Entero
	
    Escribir "Ingrese la cantidad de términos de la serie Fibonacci:"
    Leer n
	
    a = 0
    b = 1
	
    Escribir "Serie de Fibonacci con ", n, " términos:"
    Escribir a
    Escribir b
	
    Para i = 3 Hasta n Hacer
        c = a + b
        Escribir c
        a = b
        b = c
    FinPara
	
FinProceso
