//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Proceso Ejercicio23
	
	Definir num_ingresado, num, acumulador Como Entero
	num = 0
	acumulador = 0
	
	Escribir "Ingrese cantidad de números:"
	Leer num_ingresado
	
	Mientras num <= num_ingresado Hacer		
		si num Mod 2 = 1 Entonces
			acumulador = acumulador + num
		FinSi
		num = num + 1
	FinMientras
	
	Escribir "Suma de impares hasta " num_ingresado " : " acumulador
	
FinProceso