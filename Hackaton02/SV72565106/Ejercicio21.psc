Proceso Ejercicio21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Definir numero, i, factorial Como Entero
	
    Escribir "Ingrese un número entero positivo: "
    Leer numero
	
    Si numero < 0 Entonces
        Escribir "No se puede calcular el factorial de un número negativo."
    Sino
        factorial = 1
		
        Para i = 1 Hasta numero Con Paso 1 Hacer
            factorial = factorial * i
        FinPara
		
        Escribir "El factorial de ", numero, " es: ", factorial
    FinSi
	
FinProceso
