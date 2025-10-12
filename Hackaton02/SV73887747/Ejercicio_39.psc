Proceso Ejercicio_39
	// 39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la 
	//	serie de Gregory-Leibniz. La formula que se debe aplicar es:
	// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	Definir n, i Como Entero
	Definir num_pi, termino Como Real
	Definir signo Como Entero
	
	Escribir "Ingrese la cantidad de términos para aproximar PI:"
	Leer n
	
	num_pi = 0
	signo = 1
	
	Para i = 1 Hasta n Con Paso 1
		termino = 4 / (2 * i - 1)
		num_pi = num_pi + signo * termino
		signo = signo * (-1)
	FinPara
	
	Escribir "La aproximación de PI con ", n, " términos es: ", num_pi
	
FinProceso
