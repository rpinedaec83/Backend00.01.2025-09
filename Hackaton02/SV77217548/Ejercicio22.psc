Proceso Ejercicio22
	//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
	Definir n, i Como Entero
	Definir suma Como Real
	
	Repetir
		Escribir "Ingrese un entero n (n >= 1):"
		Leer n
		
		Si n < 1 Entonces
			Escribir "Ingrese un numero valido."
		FinSi
		
	Hasta Que n >= 1
    
	suma <- 0
	Para i <- 1 Hasta n Hacer
		suma <- suma + i
	FinPara
	
	Escribir "Suma de 1 hasta ", n, " = ", suma
	
FinProceso
