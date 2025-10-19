Proceso Ejercicio27
	//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	Definir n, suma, media Como Real
    Definir contador Como Entero
	
    suma <- 0
    contador <- 0
	
    Repetir
        Escribir "Ingresa un numero (negativo para terminar):"
        Leer n
		
        Si n >= 0 Entonces
            suma <- suma + n
            contador <- contador + 1
        FinSi
    Hasta Que n < 0
	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "Cantidad de datos: ", contador
        Escribir "Suma: ", suma
        Escribir "Media: ", media
    SiNo
        Escribir "No se ingresaron numeros válidos."
    FinSi
	
FinProceso
