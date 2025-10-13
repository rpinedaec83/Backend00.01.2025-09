Proceso Ejercicio04
	// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
	Definir datos Como Entero
	Dimensionar datos(3)
	
	Para i<-1 Hasta 3 Hacer
		Escribir 'Ingrese el dato ', i, ':'
		Leer datos[i]
	FinPara
	
	Si datos[1]>datos[2] Entonces
		may1 <- datos[1]
		may2 <- datos[2]
	SiNo
		may1 <- datos[2]
		may2 <- datos[1]
	FinSi
	
	Si datos[3]>may1 Entonces
		may0 <- datos[3] 
	SiNo
		Si datos[3]>may2 Entonces 
			may0 <- may1
			may1 <- datos[3]

		SiNo
			may2 <- datos[3] 
			may1 <- datos[2]
			may0 <- datos[1] 
		FinSi
	FinSi
	
	Escribir 'El tercer mayor es: ', may2
	Escribir 'El segundo mayor es: ', may1
	Escribir 'El mayor es: ', may0


FinProceso
