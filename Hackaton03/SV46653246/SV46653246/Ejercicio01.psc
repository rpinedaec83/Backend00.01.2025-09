Proceso Ejercicio01
	// 1. Hacer un algoritmo en Pseint que lea un número por el teclado y determinar si tiene tres dígito
	
	Definir numeroEvaluar Como Entero
	
	Repetir
		Escribir 'Escribe un numero'
		Leer numeroEvaluar
		
		Si numeroEvaluar<-0 Entonces
			Escribir 'no es un numero'
		FinSi
		Si numeroEvaluar>99 Y numeroEvaluar<1000 Entonces
			Escribir 'El numero ', numeroEvaluar, ' tiene 3 digitos'
		SiNo
			Escribir 'El numero ', numeroEvaluar, ' NO tiene 3 digitos'
		FinSi
	Hasta Que nunca
FinProceso
