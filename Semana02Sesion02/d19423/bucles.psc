Proceso bucles
	
	para i desde 1 hasta 20 Hacer
		escribir "Posición " i ": " 
	FinPara
	
	bandera = Verdadero
	control = 0
	Mientras bandera Hacer
		control = control +1
		Escribir "Hola ", control
		si control = 100 Entonces
			bandera = Falso
		FinSi
	Fin Mientras
	
	control = 0
	
	Repetir
		control = control +1
		Escribir "Chao ", control
		si control = 100 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera
	
FinProceso
