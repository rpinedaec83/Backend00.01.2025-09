Proceso Ejercicio12
	//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
	


	Definir datos Como Entero
	Dimensionar datos(2)
	
	
	Repetir	
	Para i<-1 Hasta 2 Hacer
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
	
	Escribir 'El mayor es: ', may1
	
Hasta Que nunca	
FinProceso	

