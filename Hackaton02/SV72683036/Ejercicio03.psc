Proceso Ejercicio03
	//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
	definir num, ultimoDigito Como Entero
	
	Escribir "Ingrese un numero" 
	leer num
	
	ultimoDigito <- num MOD 10
	
	si ultimoDigito=4 Entonces
		Escribir "El numero si termina en 4"
	sino 
		Escribir "El numero no termina en 4, termina en ", ultimoDigito
	FinSi
	
	
FinProceso
