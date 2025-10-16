Proceso Ejercicio37
	
	// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número
	// por medio del algoritmo de Euclides.
	
	Definir a, b, resto Como Entero
	
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
	
    Mientras b <> 0 Hacer
        resto = a MOD b
        a = b
        b = resto
    FinMientras
	
    Escribir "El M.C.D de los números es: ", a
	
FinProceso
