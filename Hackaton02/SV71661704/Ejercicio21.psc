Proceso Ejercicio21
	
	// Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	
	Definir n, i, factorial Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer n
	
    Si n < 0 Entonces
        Escribir "No existe el factorial de un número negativo."
    Sino
        factorial = 1
        Para i = 1 Hasta n Con Paso 1 Hacer
            factorial = factorial * i
        FinPara
		
        Escribir "El factorial de ", n, " es: ", factorial
    FinSi
	
FinProceso
