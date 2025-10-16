//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

// numerador siempre 4
// otra vez hay que cambiar signos
// denominador ultimo mult se convierte en primero del siguiente

Proceso Ejercicio40

	Definir n, i Como Entero
	Definir p, signo, a Como Real
	
	Escribir "Ingrese la cantidad de términos a usar:"
	Leer n
	
	p = 3               // La serie empieza en 3
	signo = 1           // Primer término se suma
	a = 2               // Primer número del denominador (2*3*4)
	
	Para i = 1 Hasta n Con Paso 1 Hacer
		// Calcular el término de la serie
		p = p + signo * (4 / (a * (a + 1) * (a + 2)))
		//Primera p = 3 + 1 * (4 / (2 * (2+1) * (2+2))) = 3 + 1 * (4 / (2 * 3 * 4)) = 3 + 1 * (4 / 24) =  3.1666...
		// Cambiar el signo
		signo = signo * (0-1)
		
		// Avanzar al siguiente grupo de números en denominador convirtiendo al ultimo mult a primero
		a = a + 2
	FinPara
	
	Escribir "La aproximación del número PI con ", n, " términos es: ", p

FinProceso