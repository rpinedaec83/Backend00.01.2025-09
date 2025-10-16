Proceso Ejercicio38
	//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Definir n, i, suma Como Entero
	
	Repetir
		Escribir "Ingrese un numero entero positivo: "
		Leer n
		
		Si n <= 1 Entonces
			Escribir n, " NO es un numero perfecto."
		FinSi
		
	Hasta Que n > 1
    
	suma <- 0
	Para i <- 1 Hasta Trunc(n/2) Hacer
		Si (n MOD i) = 0 Entonces
			suma <- suma + i
		FinSi
	FinPara

	Si suma = n Entonces
		Escribir n, " es un numero perfecto."
	SiNo
		Escribir n, " NO es un numero perfecto."
	FinSi
	
FinProceso
