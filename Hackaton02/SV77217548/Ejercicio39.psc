Proceso Ejercicio39
	// 9. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Definir n, i, denominador, signo Como Entero
    Definir piAprox, termino Como Real
	
    Repetir
        Escribir "¿CuAntos terminos deseas sumar? (n > 0): "
        Leer n
		
		Si n <= 0 Entonces
			Escribir "Ingresa un numero correcto."
		FinSi
		
    Hasta Que n > 0
	
    piAprox <- 0
    denominador <- 1
    signo <- 1
	
    Para i <- 1 Hasta n Hacer
        termino <- signo * (4 / denominador)
        piAprox <- piAprox + termino
        signo <- -signo
        denominador <- denominador + 2
    FinPara
	
    Escribir "PI aproximado con Gregory-Leibniz y ", n, " terminos = ", piAprox
	
FinProceso
