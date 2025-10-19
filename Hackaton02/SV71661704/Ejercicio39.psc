Proceso Ejercicio39
	
	// 39. Hacer un algoritmo en Pseint que cumpla con la aproximación del 
	// número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	
	Definir n, i Como Entero
    Definir n_pi, termino Como Real
	
    n_pi = 0
	
    Escribir "Ingrese la cantidad de términos a usar para aproximar ?:"
    Leer n
	
    Para i = 0 Hasta n - 1 Hacer
        termino = ((-1)^i) / (2 * i + 1)
        n_pi = n_pi + termino
    FinPara
	
    n_pi = n_pi * 4
	
    Escribir "Aproximación de pi con ", n, " términos: ", n_pi
	
	
FinProceso
