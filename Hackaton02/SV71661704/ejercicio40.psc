Proceso ejercicio40
	
	// 40. Hacer un algoritmo en Pseint que cumpla con la aproximación del 
	// número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	// Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14)
	
	Definir n, i Como Entero
    Definir n_pi, termino Como Real
    Definir signo Como Entero
    Definir a, b, c Como Entero
	
    Escribir "Ingrese la cantidad de términos para aproximar :"
    Leer n
	
    n_pi = 3
    signo = 1
    a = 2
	
    Para i = 1 Hasta n Hacer
        b = a + 1
        c = a + 2
        termino = 4 / (a * b * c)
        n_pi = n_pi + signo * termino
        signo = signo * (-1)
        a = a + 2
    FinPara
	
    Escribir "Aproximación de pi con ", n, " términos: ", n_pi
	
	
FinProceso
