Proceso Ejercicio16
	//16. Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
		Definir numero Como Entero
		
		Escribir "Ingresa un número del 1 al 7:"
		Leer numero
		
		Si numero < 1 O numero > 7 Entonces
			Escribir "Número inválido. Debe estar entre 1 y 7."
		Sino
			Segun numero Hacer
				1:
					Escribir "El día es Lunes."
				2:
					Escribir "El día es Martes."
				3:
					Escribir "El día es Miércoles."
				4:
					Escribir "El día es Jueves."
				5:
					Escribir "El día es Viernes."
				6:
					Escribir "El día es Sábado."
				7:
					Escribir "El día es Domingo."
			FinSegun
		FinSi
FinProceso
