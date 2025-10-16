4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.

Proceso Ejercicio04
	
	Definir numero_01, numero_02, numero_03 Como Entero
	Escribir "Ingrese un primer número:"
	Leer numero_01
	Escribir "Ingrese un segundo número:"
	Leer numero_02
	Escribir "Ingrese un tercer número:"
	Leer numero_03
	
	//Forma humana
	Si numero_01 < numero_02 y numero_01 < numero_03 Entonces
		Escribir numero_01
		Si numero_02 < numero_03 Entonces
			Escribir numero_02
			Escribir numero_03
		SiNo
			Escribir numero_03
			Escribir numero_02
		FinSi
	FinSi
	
	Si numero_02 < numero_01 y numero_02 < numero_03 Entonces
		Escribir numero_02
		Si numero_01 < numero_03 Entonces
			Escribir numero_01
			Escribir numero_03
		SiNo
			Escribir numero_03
			Escribir numero_01
		FinSi
	FinSi
	
	Si numero_03 < numero_01 y numero_03 < numero_02 Entonces
		Escribir numero_03
		Si numero_02 < numero_01 Entonces
			Escribir numero_02
			Escribir numero_01
		SiNo
			Escribir numero_01
			Escribir numero_02
		FinSi
	FinSi
	
	//Refactorizado
	Definir temporal Como Entero
		
	Si numero_01 > numero_02 Entonces
		temporal = numero_01; numero_01 = numero_02; numero_02 = temporal
	FinSi
	
	Si numero_01 > numero_03 Entonces
		temporal = numero_01; numero_01 = numero_03; numero_03 = temporal
	FinSi
	
	Si numero_02 > numero_03 Entonces
		temporal = numero_02; numero_02 = numero_03; numero_03 = temporal
	FinSi
	
	Escribir "Números Ordenados: ", numero_01, " ", numero_02, " ", numero_03

FinProceso