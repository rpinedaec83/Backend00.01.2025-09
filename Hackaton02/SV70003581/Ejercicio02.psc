2. Hacer un algoritmo en Pseint que lea un número entero por el teclado y determinar si es negativo.

Proceso Ejercicio02
	Definir numero_entero Como Entero
	Escribir "Ingrese un número entero:"
	Leer numero_entero
	Si numero_entero < 0 Entonces
		Escribir numero_entero " es un número negativo"
	SiNo
		Si numero_entero = 0 Entonces
			Escribir numero_entero " es un número neutro"
		SiNo
			Escribir numero_entero " es un número positivo"
		FinSi
	FinSi
FinProceso