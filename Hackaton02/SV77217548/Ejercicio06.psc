Proceso Ejercicio06
	//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
	//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
	//entonces las horas extras se le pagarán a $25 por hora.
	Definir horas Como Real
	Definir normal, extra, sueldo Como Real
	Definir pagoNormal, pagoExtra Como Real
	
	pagoNormal <- 20
	pagoExtra <- 25
	
	Repetir
		Escribir "Ingrese horas trabajadas en la semana: "
		Leer horas
		
		Si horas < 0 Entonces
			Escribir "Ingrese un numero de horas validas."
		FinSi
		
	Hasta Que horas >= 0
	

	Si horas <= 40 Entonces
		normal <- horas
		extra <- 0
		sueldo <- normal * pagoNormal
	SiNo
		normal <- 40
		extra <- horas - 40
		sueldo <- (normal * pagoNormal) + (extra * pagoExtra)
	FinSi
	
	Escribir "Horas normales: ", normal, " h"
	Escribir "Horas extra: ", extra, " h"
	Escribir "Sueldo semanal: $", sueldo
	
FinProceso
