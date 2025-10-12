//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso Ejercicio14
	
	Definir num Como Entero
	Definir Resto Como Logico
	resto = Falso
	Escribir "Ingrese un número entero (entre 1 - 9): "
	Leer num
	Si num = 1 Entonces
		Escribir "1 no es primo."
	SiNo
		Para base = 2 Hasta num-1 Hacer			
			Si num Mod base = 0 Entonces
				resto = Verdadero
			FinSi			
		FinPara
		Si resto Entonces
			Escribir "No es primo"
		Sino
			Escribir"Es primo"
		FinSi
	FinSi	
FinProceso