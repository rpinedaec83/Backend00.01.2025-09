Proceso Ejercicio40
	//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	Definir n, i, a, b, c, signo Como Entero
    Definir piAprox, termino Como Real
	
    Repetir
        Escribir "¿CuAntos terminos adicionales deseas sumar? (n > 0): "
        Leer n
		
		Si n <= 0 Entonces
			Escribir "Ingresa un numero correcto."
		FinSi
		
    Hasta Que n > 0
	
    piAprox <- 3
    signo <- 1
	
    Para i <- 1 Hasta n Hacer
        a <- 2 * i
        b <- a + 1
        c <- a + 2
        termino <- signo * (4 / (a * b * c))
        piAprox <- piAprox + termino
        signo <- -signo
    FinPara
	
    Escribir "PI aproximado con Nilakantha y ", n, " terminos = ", piAprox
	
FinProceso
