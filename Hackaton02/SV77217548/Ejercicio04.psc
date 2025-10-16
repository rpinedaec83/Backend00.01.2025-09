Proceso Ejercicio04
	//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir a, b, c, t Como Entero
	
	Escribir "Ingrese tres numeros enteros: "
	Leer a, b, c
	
	Si a > b Entonces
		t <- a
		a <- b
		b <- t
	FinSi
	
	Si a > c Entonces
		t <- a
		a <- c
		c <- t
	FinSi
	
	Si b > c Entonces
		t <- b
		b <- c
		c <- t
	FinSi
	
	Escribir "orden ascendente: ", a, ", ", b, ", ", c
	
FinProceso
