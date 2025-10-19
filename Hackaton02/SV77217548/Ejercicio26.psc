Proceso Ejercicio26
	//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Definir dividendo, divisor, cociente, resto Como Entero
	
    Escribir "Ingrese el dividendo (entero >= 0):"
    Leer dividendo
    Escribir "Ingrese el divisor (entero > 0):"
    Leer divisor
	
    Si divisor = 0 Entonces
        Escribir "Error: no se puede dividir entre cero."
    SiNo
        cociente <- 0
        resto <- dividendo
		
        Mientras resto >= divisor Hacer
            resto <- resto - divisor
            cociente <- cociente + 1
        FinMientras
		
        Escribir "Cociente = ", cociente
        Escribir "Resto = ", resto
    FinSi

FinProceso
