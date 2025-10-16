Proceso Ejercicio40
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. 
	//La formula que se debe aplicar es:
	//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...
	Definir n, i, a, b, c Como Entero
    Definir p, termino, signo Como Real
	
    Escribir "Ingrese la cantidad de términos a usar en la serie:"
    Leer n
	
    p = 3
    signo = 1
    a = 2
    b = 3
    c = 4
	
    Para i = 1 Hasta n Con Paso 1 Hacer
        termino = 4 / (a * b * c)
        p = p + signo * termino
        signo = signo * (-1) 
        a = a + 2
        b = b + 2
        c = c + 2
    FinPara
	
    Escribir "Aproximación de pi usando ", n, " términos:"
    Escribir p
	
FinProceso
