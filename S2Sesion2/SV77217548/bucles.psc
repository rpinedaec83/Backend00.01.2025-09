Proceso bucles
	
	para i desde 1 hasta 20 Hacer
		Escribir  "Posicion " 1 ": "
	FinPara
	
	bandera = Verdadero
	control = 0
	Mientras bandera Hacer
		control = control + 1
		Escribir "Hola ", control
		Si control = 100 Entonces
			bandera = Falso
		FinSi
	FinMientras
	bandera = Verdadero
	control = 0
	
	Repetir
		control = control + 1
		Escribir "Chao ", control
		Si control = 100 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera = Verdadero
	
FinProceso
