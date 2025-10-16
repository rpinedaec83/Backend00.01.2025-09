Proceso Ejercicio35
	//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	Definir num,mayor, menor, i Como Entero

	
	Para i <- 1 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número #", i, ":"
        Leer num
        
        Si i = 1 Entonces
            mayor <- num
            menor <- num
        SiNo
            Si num > mayor Entonces
                mayor <- num
            FinSi
            Si num < menor Entonces
                menor <- num
            FinSi
        FinSi
        
    FinPara
	
	
	Escribir "El número MAYOR ingresado es: ", mayor 
    Escribir "El número MENOR ingresado es: ", menor
	
	
FinProceso
