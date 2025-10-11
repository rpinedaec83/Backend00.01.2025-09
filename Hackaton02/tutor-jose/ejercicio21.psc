//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.


Algoritmo ejercicio21
	
	
	Definir  numero, i, factorial Como entero
	
	factorial=1 
	
	Escribir  "Ingrese un numero:"
	leer numero;
	Para i<-1 Hasta numero Con Paso 1 Hacer
		factorial = factorial * i
	Fin Para
	
	
	Escribir "El factorial es: ", factorial;
	
FinAlgoritmo
