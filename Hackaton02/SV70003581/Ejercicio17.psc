//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Proceso Ejercicio17
	Definir hours, minutes, seconds como Enteros	
	
	Escribir "Ingrese la hora (0-23)"
	Leer hours
	
	Mientras hours > 23 Hacer
		Escribir "Hora inválida, vuelva a intentarlo: "
		Leer hours
	FinMientras
	
	Escribir "Ingrese los minutos (0-59)"
	Leer minutes
	
	Mientras minutes > 59 Hacer
		Escribir "Minutos inválidos, vuelva a intentarlo: "
		Leer minutes
	FinMientras
	
	Escribir "Ingrese los segundos (0-59)"
	Leer seconds
	
	Mientras seconds > 59 Hacer
		Escribir "Segundos inválidos, vuelva a intentarlo: "
		Leer seconds
	FinMientras
	
	seconds = seconds + 1
	
	Si seconds = 60 Entonces
		seconds = 0
		minutes = minutes + 1
	FinSi
	
	Si minutes = 60 Entonces
		minutes = 0
		hours = hours + 1
	FinSi
	
	Si hours = 24 Entonces
		hours = 0
	FinSi
	
	Escribir "La hora dentro de un segundo será: " hours ":" minutes ":" seconds
	
FinProceso
