Proceso Ejercicio11
	//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Definir n1, n2, n3, numeroMayor Como Real
	Definir cont Como Entero
	
	Escribir "Ingrese tres numeros: "
	Leer n1, n2, n3
	
	numeroMayor <- n1
	
	Si n2 > numeroMayor Entonces
		numeroMayor <- n2
	FinSi
	
	Si n3 > numeroMayor Entonces
		numeroMayor <- n3
	FinSi
	
	cont <- 0
	
	Si n1 = numeroMayor Entonces
		cont <- cont + 1
	FinSi
	
	Si n2 = numeroMayor Entonces
		cont <- cont + 1
	FinSi
	
	Si n3 = numeroMayor Entonces
		cont <- cont + 1
	FinSi
	
	Segun cont Hacer
		3:
			Escribir "Los tres numeros son iguales: ", numeroMayor
		2:
			Escribir "Hay dos numeros iguales que son el mayor: ", numeroMayor
		1:
			Escribir "El mayor es: ", numeroMayor
	FinSegun
	
FinProceso
