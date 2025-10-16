Proceso Ejercicio17
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Definir  horas, minutos, segundos Como Entero;
	
	Escribir  "Ingrese la hora (0-23)"
	leer horas
	
	Escribir "Ingrese los minutos (0-59)"
	leer minutos
	
	Escribir "Ingrese los segundos (0-59)"
	leer segundos
	
	segundos = segundos+1;
	
	
	si horas>23 o minutos>59 o segundos>59 Entonces
		Escribir  "fecha no valida
	SiNo
		
		Si segundos=60 Entonces
			segundos =0
			minutos = minutos+1
		FinSi
		
		si minutos =60 Entonces
			minutos=0
			horas = horas+1;
		FinSi
		
		si horas = 24 Entonces
			horas=0;
		FinSi
		
		Escribir  "La hora dentro de un segundo es: ", horas,"::",minutos,"::",segundos;
	FinSi
	
FinProceso
