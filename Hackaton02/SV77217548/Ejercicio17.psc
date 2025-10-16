Proceso Ejercicio17
	//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Definir h, m, s Como Entero
	
    Repetir
        Escribir "Escribir hora (de 0 a 23):"
        Leer h
		
		Si h < 0 Y h > 23 Entonces
			Escribir "Escribir una hora valida."
		FinSi
		
    Hasta Que h >= 0 Y h <= 23
	
    Repetir
        Escribir "Escribir minuto (de 0 a 59):"
        Leer m
		
		Si m < 0 Y m > 59 Entonces
			Escribir "Escribir un minuto valido."
		FinSi
		
    Hasta Que m >= 0 Y m <= 59
	
    Repetir
        Escribir "Escribir segundo (de 0 a 59):"
        Leer s
		
		Si s < 0 Y s > 59 Entonces
			Escribir "Escribir un segundo valido."
		FinSi
		
    Hasta Que s >= 0 Y s <= 59
	
    s <- s + 1
    Si s = 60 Entonces
        s <- 0
        m <- m + 1
        Si m = 60 Entonces
            m <- 0
            h <- h + 1
            Si h = 24 Entonces
                h <- 0
            FinSi
        FinSi
    FinSi

    Escribir "Hora dentro de un segundo: ", h, ":", m, ":", s
	
FinProceso
