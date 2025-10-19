Proceso Ejercicio13
	//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir letra Como Cadena
	Definir valido Como Logico
	
	valido <- Falso
	
	Repetir
		Escribir "Ingrese una letra: "
		Leer letra
		
		letra <- Minusculas(letra)
		
		Si Longitud(letra) <> 1 Entonces
			Escribir "Ingrese solo una letra."
		SiNo
			Si (letra >= "a" Y letra <= "z") O letra = "á" O letra = "é" O letra = "ó" O letra = "ú" O letra = "ü" O letra = "ñ" Entonces
				valido <- Verdadero
			SiNo
				Escribir "Ingrese solo una letra."
			FinSi
		FinSi
		
	Hasta Que valido
	
	Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" O letra = "á" O letra = "é" O letra = "ó" O letra = "ú" O letra = "ü" Entonces
		Escribir "Es una vocal."
	SiNo
		Escribir "NO es una vocal."
	FinSi
	
FinProceso
