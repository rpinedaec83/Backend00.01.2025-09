Proceso Ejercicio_23
	//23. Hacer un algoritmo en Pseint para calcular la 
	//	suma de los números impares menores o iguales a n.
	
	Definir n, suma, i Como Entero
	
	Escribir "Ingrese un número entero positivo:"
	Leer n
	
	Si n < 1 Entonces
		Escribir "Error: el número debe ser mayor o igual a 1."
	Sino
		suma = 0
		Para i = 1 Hasta n Con Paso 1
			Si i MOD 2 <> 0 Entonces
				suma = suma + i
			FinSi
		FinPara
		
		Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
	FinSi
FinProceso
