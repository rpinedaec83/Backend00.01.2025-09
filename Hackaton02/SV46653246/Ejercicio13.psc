Proceso Ejercicio13
	//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	
	Definir letra	Como Caracter
	
	Repetir
		

	Escribir "_________"	
	Escribir "Ingrese letra"
	Leer letra
	
		letra <- Minusculas(letra) 
		Si letra = "a" o letra = "e" o letra = "i" o letra = "o" o letra = "u"
			Entonces
			Escribir "Sí es una vocal"
		SiNo
			Escribir "No es una vocal"
		FinSi

	
Hasta Que nunca
FinProceso
