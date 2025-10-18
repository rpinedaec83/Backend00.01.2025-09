//24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Proceso Ejercicio24
	
		Definir suma, contador como Entero
		suma = 0
		contador = 1
		
		Repetir
			si contador mod 2 = 0 Entonces
				suma = suma + contador				
			FinSi
			contador = contador + 1
		Hasta Que  contador > 1000
		
		Escribir "La suma de los primeros números pares hasta el 1000 es " suma
	
FinProceso