Proceso Ejercicio26
	//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	
	definir dividendo,divisor,cociente,resto Como Entero
	
	Escribir "Ingresa el numero a dividir"
	leer dividendo
	
	Escribir "Ingrese el número que divide):"
    Leer divisor
	
	
	Si divisor <> 0 Entonces
		resto <- dividendo
		Mientras resto >= divisor Hacer
			resto <- resto - divisor
			cociente <- cociente + 1
		FinMientras
	FinSi
	
	
	Escribir "El cociente es: ", cociente
	Escribir "El RESTO o residuo es: ", resto
	

	
FinProceso
