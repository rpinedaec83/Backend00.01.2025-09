Proceso Ejercicio14
	//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	Definir n, i Como Entero
    Definir esPrimo Como Logico
	
    Repetir
        Escribir "Ingrese un entero entre 1 y 10:"
        Leer n
		
		Si n < 1 Y n > 10 Entonces
			Escribir "Ingrese un numero entero valido en el rango de 1 al 10."
		FinSi
		
    Hasta Que n >= 1 Y n <= 10

    Si n < 2 Entonces
        esPrimo <- Falso
    Sino
        esPrimo <- Verdadero
        limite <- Trunc(raiz(n))
        i <- 2
        Mientras i <= limite Y esPrimo Hacer
            Si (n MOD i) = 0 Entonces
                esPrimo <- Falso
            FinSi
            i <- i + 1
        FinMientras
    FinSi
	
    Si esPrimo Entonces
        Escribir n, " ES primo."
    Sino
        Escribir n, " NO es primo."
    FinSi
	
FinProceso
