Proceso Ejercicio23
	//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	Definir n, k Como Entero
	Definir suma Como Real
	
	Repetir
		Escribir "Ingrese un entero n (n >= 1):"
		Leer n
		
		Si n < 1 Entonces
			Escribir "Ingrese un numero valido."
		FinSi
		
	Hasta Que n >= 1
	
	k <- Trunc((n + 1) / 2)
	suma <- k * k
	Escribir "Suma de impares hasta ", n, " = ", suma

FinProceso
