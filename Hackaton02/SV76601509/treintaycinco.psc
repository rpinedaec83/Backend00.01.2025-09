Algoritmo treintaycinco
	Definir i, num, mayor, menor Como Real
	
    Escribir "Ingrese el número 1: "
    Leer num
    mayor <- num
    menor <- num
	
    Para i <- 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer num
		
        Si num > mayor Entonces
            mayor <- num
        FinSi
        Si num < menor Entonces
            menor <- num
        FinSi
    FinPara
	
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinAlgoritmo
