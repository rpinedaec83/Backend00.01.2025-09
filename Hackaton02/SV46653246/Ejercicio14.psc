Proceso Ejercicio14
	//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	
	Definir numero Como Entero
	
	
	Escribir "______________"	
	Escribir "Ingrese número"	
	Leer numero
	
    Si numero < 1 O numero > 10 Entonces
        Escribir "Número fuera de rango. Debe estar entre 1 y 10."
    Sino
        Si numero = 2 O numero = 3 O numero = 5 O numero = 7 Entonces
            Escribir numero, " es un número primo."
        Sino
            Escribir numero, " no es un número primo."
        FinSi
    FinSi

FinProceso
