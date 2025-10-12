//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Proceso Ejercicio39

    Definir n, i Como Entero
    Definir p, signo, denominador Como Real
	
    Escribir "Ingrese la cantidad de términos a usar:"
    Leer n
	
    p = 0                 // Aquí guardar la suma que aproxima a PI
    signo = 1             // Empieza con signo positivo
    denominador = 1       // El primer denominador de la serie
	
    Para i = 1 Hasta n Con Paso 1 Hacer
        // Sumar o restar el término correspondiente
        p = p + signo * (4 / denominador)
		// en primera sería p = 0 + 1 * (4 / 1) = 4
		// en segunda seria p = 4 - 1 * (4 / 3) =  2.666...
		//en tercera seria p = 2.66... + 1 * (4 / 5) =  3.4666..
		
        // Aumentar el denominador en 2 (solo números impares)
        denominador = denominador + 2
		
        // Cambiar el signo (de + a - y viceversa)
        signo = signo * (0-1)
		
    FinPara
	
    Escribir "La aproximación del número PI con ", n, " términos es: ", p

FinProceso