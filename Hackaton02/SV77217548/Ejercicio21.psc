Proceso Ejercicio21
	//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Definir n, i Como Entero
	Definir factorial Como Real
	
    Repetir
        Escribir "Ingrese un entero n (n >= 0):"
        Leer n
		
		Si n < 0 Entonces
			Escribir "Ingrese un numero valido."
		FinSi
		
    Hasta Que n >= 0
	
    factorial <- 1
    Para i <- 2 Hasta n Hacer
        factorial <- factorial * i
    FinPara
	
    Escribir n, "! = ", factorial
	
FinProceso
