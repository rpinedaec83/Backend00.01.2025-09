Proceso Ejercicio08
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	Definir notaTotal Como Real
	Definir notas Como Entero
	Dimensionar notas(3)
	
	 
	Escribir "----------------------"
	Escribir "Nota aprobatoria 11 puntos"
	Escribir "----------------------"
	Para i<-1 Hasta 3 Hacer
		Escribir 'Ingrese la nota ', i, ':'
		Leer notas[i]
	FinPara
	
	notaTotal=0
	
		Si notas[1] > 20 o notas[2] > 20 o notas[3] > 20
			Entonces
			Escribir "Nota Ingresada mayor que 20"
		SiNo
			
			Para i<-1 Hasta 3 Hacer
				notaTotal = notas[i] + notaTotal
			FinPara
			
			Si notaTotal>11
				Entonces
				Escribir "El estudiante aprobó con: " notaTotal/3
			SiNo
				Escribir "El estudiante desaprobó con: " notaTotal/3
			FinSi
			
			
		FinSi
	
	

FinProceso
