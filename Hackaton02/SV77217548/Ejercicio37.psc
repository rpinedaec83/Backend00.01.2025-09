Proceso Ejercicio37
	//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	Definir a, b, x, z, r Como Entero
	
	Repetir
		Escribir "Ingrese el primer entero:"
		Leer a
		Escribir "Ingrese el segundo entero:"
		Leer b
		
		Si a = 0 Y b = 0 Entonces
			Escribir "MCD indefinido (ambos son 0)."
		FinSi
	Hasta Que (a = 0 Y b = 0) = Falso

    x <- Abs(a)
    z <- Abs(b)

	Mientras z <> 0 Hacer
		r <- x MOD z
		x <- z
		z <- r
	FinMientras

	Escribir "El MCD es: ", x
		
FinProceso
