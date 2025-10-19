Proceso Ejercicio25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir n, i, factorial Como Entero
	
    Escribir "Ingrese un número para calcular su factorial: "
    Leer n
	
    factorial = 1
    i = 1
	
    Mientras i <= n Hacer
        factorial = factorial * i
        i = i + 1
    FinMientras
	
    Escribir "El factorial de ", n, " es: ", factorial

FinProceso
