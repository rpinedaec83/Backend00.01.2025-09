Algoritmo cuatro
	// Hacer un algoritmo en PSint que lea tres numeros
	// enteros y los muestre de menor a mayor
	Definir num Como Entero
	Dimensionar num(3)
	Definir i, j, aux Como Entero
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir 'Ingrese el numero ', i, ':'
		Leer num[i]
	FinPara
	Para i<-1 Hasta 2 Hacer
		Para j<-1 Hasta 3-i Hacer
			Si num[j]>num[j+1] Entonces
				aux <- num[j]
				num[j] <- num[j+1]
				num[j+1]<-aux
			FinSi
		FinPara
	FinPara
	Escribir 'Numeros ordenados de menor a mayor:'
	Para i<-1 Hasta 3 Hacer
		Escribir num[i]
	FinPara
FinAlgoritmo
