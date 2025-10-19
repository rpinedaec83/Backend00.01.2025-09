Proceso Ejercicio16
	//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
	Definir n Como Entero
	
	Repetir
		Escribir "Ingrese un numero del 1 al 7: "
		Leer n
		
		Si n < 1 O n > 7 Entonces
			Escribir "Ingrese un numero valido."
		FinSi
	Hasta Que n >= 1 Y n <= 7
	
	Segun n Hacer
		1:
			Escribir "Lunes"
		2:
			Escribir "Martes"
		3:
			Escribir "Miercoles"
		4:
			Escribir "Jueves"
		5:
			Escribir "Viernes"
		6:
			Escribir "Sabado"
		7:
			Escribir "Domingo"
	FinSegun
	
FinProceso
