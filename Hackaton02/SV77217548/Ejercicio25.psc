Proceso Ejercicio25
	//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir n, m Como Entero
    Definir factorial Como Real
	
    Repetir
        Escribir "Ingrese un entero n (n >= 0):"
        Leer n
		
		Si n < 0 Entonces
			Escribir "Ingrese un numero valido."
		FinSi
		
    Hasta Que n >= 0
	
    factorial <- 1
    m <- n
	
    Mientras m > 1 Hacer
        factorial <- factorial * m
        m <- m - 1
    FinMientras
	
    Escribir n, "! = ", factorial
	
FinProceso
