Proceso Ejercicio12
	//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
	Definir n1, n2, n3, numeroMayor Como Real
	Definir cont Como Entero
	
	Escribir "Ingrese dos numeros: "
	Leer n1, n2
	
	numeroMayor <- n1
	
	Si n2 > numeroMayor Entonces
		numeroMayor <- n2
	FinSi
	
	cont <- 0
	
	Si n1 = numeroMayor Entonces
		cont <- cont + 1
	FinSi
	
	Si n2 = numeroMayor Entonces
		cont <- cont + 1
	FinSi
	
	Segun cont Hacer
		2:
			Escribir "Los dos numeros son iguales: ", numeroMayor
		1:
			Escribir "El mayor es: ", numeroMayor
	FinSegun
	
FinProceso
