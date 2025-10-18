Proceso Ejercicio27
	
	// 27. Hacer un algoritmo en Pseint para determinar la media de una lista 
	// indefinida de números positivos, se debe acabar el programa
	// al ingresar un número negativo.
	
	Definir numero, suma, contador, media Como Real
    suma = 0
    contador = 0
    
    Escribir "Ingrese un número positivo (o un número negativo para finalizar): "
    Leer numero
    
    Mientras numero >= 0 Hacer
        suma = suma + numero
        contador = contador + 1
        
        Escribir "Ingrese otro número positivo (o un número negativo para finalizar): "
        Leer numero
    FinMientras
    
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los ", contador, " números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
	
FinProceso
