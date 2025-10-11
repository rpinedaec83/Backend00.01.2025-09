Algoritmo once
	
	// Hacer un algoritmo en pseint que lea tres numeros
	// es par o impar
	
	Definir a, b, c, may Como Real
	
	Escribir "Ingrese el primer numero: "
	Leer a
	Escribir "Ingrese segundo numero: "
	Leer b
	Escribir "Ingrese tercer numero: "
	Leer c
	
	may <- a
	
	Si b > may Entonces
		may <- b
	FinSi
	
	Si c > may Entonces
		may <- c
	FinSi
	
	Escribir "El mayor es: ", may
	
FinAlgoritmo
