Proceso Ejecicio17
	//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Definir hora, minuto, segundo Como Entero
	
	Escribir "Ingrese Hora:"
	Escribir "Formato 24H"
	Leer hora
	
	Si hora >= 24 O hora <1
		Entonces
		Escribir "Hora no valida"
	SiNo
		Escribir "Ingrese minuto:"
		Leer minuto
		Si minuto > 59 O minuto <1
			Entonces 
			Escribir "Minuto no válido"
		SiNo
			Escribir "Ingrese segundo:"
			Leer segundo
			Si segundo > 59 O segundo <1
				Escribir "Segundo no válido"
			SiNo
				segundo<-segundo+1
				
				Si segundo = 60 Entonces
					segundo <- 0
					minuto <- minuto + 1
				FinSi
				
				Si minuto = 60 Entonces
					minuto <- 0
					hora <- hora + 1
				FinSi
				
				Si hora = 24 Entonces
					hora <- 0
				FinSi

				Escribir "La hora actual es:" hora "H:" minuto "M:" segundo "S"
			FinSi
		FinSi
	FinSi
	
FinProceso
