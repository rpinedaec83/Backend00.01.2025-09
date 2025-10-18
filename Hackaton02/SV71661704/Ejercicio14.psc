Proceso Ejercicio14
	
	// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y
	// determine si es un número primo.
	
    Escribir "Ingrese un número entero del 1 al 10:"
    Leer num
	
    Si num < 1 O num > 10 Entonces
        Escribir "El número debe estar entre 1 y 10."
    Sino
        divisores = 0
		
        Para i = 1 Hasta num Con Paso 1 Hacer
            Si num MOD i = 0 Entonces
                divisores = divisores + 1
            FinSi
        FinPara
		
        Si divisores = 2 Entonces
            Escribir "El número ", num, " es primo."
        Sino
            Escribir "El número ", num, " no es primo."
        FinSi
    FinSi
	
FinProceso
