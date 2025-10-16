//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	
	definir num_mayor, num_menor Como Entero
	
	Escribir "Ingrese un número:"
	Leer num
	num_mayor = num
	num_menor = num
	
	Para j=1 Hasta 19 Con Paso 1 Hacer
		Escribir "Ingrese un número:"
		Leer num
		si num < num_menor
			num_menor = num
		FinSi
		si num > num_mayor
			num_mayor = num
		FinSi
	Fin Para
	
	Escribir "Mayor: " num_mayor
	Escribir "Menor: " num_menor
	
FinProceso
