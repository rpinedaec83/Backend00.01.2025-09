Proceso Ejercicio23
	//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	definir n,i,sumaImpares Como Entero
	
	Escribir "Ingrese un número entero positivo (n):"
    Leer n
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
	
		Si i MOD 2 = 1 Entonces
			sumaImpares <- sumaImpares + i
		FinSi
		
	FinPara
	
	escribir "La suma de todos los números impares menores o iguales a n es: ", sumaImpares
	
FinProceso
