Proceso Ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos,
	//se debe acabar el programa al ingresar un número negativo.
	Definir numero, suma, contador, media Como Real
	
    suma = 0
    contador = 0
	
    Escribir "Ingrese números positivos (termine con un número negativo): "
	
    Repetir
        Leer numero
		
        Si numero >= 0 Entonces
            suma = suma + numero
            contador = contador + 1
        FinSi
    Hasta Que numero < 0
	
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los ", contador, " números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números válidos."
    FinSi
FinProceso
