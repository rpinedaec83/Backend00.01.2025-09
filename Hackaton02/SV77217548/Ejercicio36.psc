Proceso Ejercicio36
	//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Definir n, i Como Entero
    Definir a, b, c Como Real
	
    Repetir
        Escribir "¿Cuantos terminos quieres mostrar? (n >= 1):"
        Leer n
		
		Si n < 1 Entonces
			Escribir "Ingresa una cantidad correcta."
		FinSi
		
    Hasta Que n >= 1
	
    a <- 0
    b <- 1
	
    Escribir "Serie de Fibonacci (", n, " terminos):"
    Para i <- 1 Hasta n Hacer
        Escribir Sin Saltar a
        Si i < n Entonces
            Escribir Sin Saltar ", "
        FinSi
        c <- a + b
        a <- b
        b <- c
    FinPara
	
    Escribir ""
	
FinProceso
