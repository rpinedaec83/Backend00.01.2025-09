//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

//Paso 1: Divide el número mayor (171) entre el menor (17).
//	171 = 17 * 10 + 1

//Paso 2: Como el residuo (1) no es cero, se repite el proceso. Ahora, el divisor (17) se convierte en el nuevo dividendo, y el residuo (1) se convierte en el nuevo divisor.
//	 17 = 1 * 17 + 0

//Paso 3: La división ha terminado, ya que el nuevo residuo es 0. El MCD es el último divisor que no produjo un residuo de cero, que en este caso es 1.

//Por lo tanto, el MCD de 171 y 17 es 1. Esto significa que los dos números son coprimos, o sea, no tienen otro divisor común que no sea el 1.


Proceso Ejercicio37
	
		Definir a, b, resto Como Entero
		
		Escribir "Ingrese el primer número:"
		Leer a
		Escribir "Ingrese el segundo número:"
		Leer b
		
		Mientras b <> 0 Hacer // Cuando sea 0 acabará la iteraciónporque El MCD es el último divisor que no produjo un residuo de cero
			resto = a MOD b
			a = b //Reasigno valores de variables
			b = resto
		FinMientras
		
		Escribir "El M.C.D. es: ", a
	
FinProceso