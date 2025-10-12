// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Ejercicio25
	Definir n, factorial, contador Como Entero
	factorial = 1
	contador = 1
	
	Escribir "Ingrese un número:"
	Leer n
	
	Mientras contador <= n Hacer
		factorial = factorial * contador
		contador = contador + 1		
	Fin Mientras
	
	Escribir "El factorial de " n " es " factorial
FinProceso