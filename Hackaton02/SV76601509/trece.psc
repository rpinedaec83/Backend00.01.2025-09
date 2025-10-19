Algoritmo doce
	
	// indentificar vocal
	
	Definir letra Como Caracter
	Definir val Como Entero
	
	Escribir "Ingrese una letra: "
	Leer letra
	
	letra <- Minusculas(letra)
	val <- 0
	
	Segun letra Hacer
		"a":
			val <- 1
		"e":
			val <- 1
		"i":
			val <- 1
		"o":
			val <- 1
		"u":
			val <- 1
		De Otro Modo:
			val <- 0
	Fin Segun
	
	Si val = 1 Entonces
		Escribir "La letra es VOCAL"
	SiNo
		Escribir "La letra es CONSONANTE"
	Fin Si
	
FinAlgoritmo
