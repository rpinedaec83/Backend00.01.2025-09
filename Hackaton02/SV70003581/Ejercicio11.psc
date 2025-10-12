//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.

Proceso Ejercicio11
		
	Definir num1, num2, num3 como Entero
	
	Escribir "Ingrese un primer número:"
	Leer num1
	Escribir "Ingrese un segundo número:"
	Leer num2
	Escribir "Ingrese un tercer número:"
	Leer num3
		
	Si num1 >= num2 y num1 >= num3 Entonces
		Escribir "Mayor: " num1
	FinSi
	
	Si num2 >= num1 y num2 >= num3 Entonces
		Escribir "Mayor: " num2
	FinSi
	
	Si num3 >= num2 y num3 >= num1 Entonces
		Escribir "Mayor: " num3
	FinSi
	
FinProceso