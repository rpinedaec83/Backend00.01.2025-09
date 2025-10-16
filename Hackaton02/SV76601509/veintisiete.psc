Algoritmo veintisiete
	Definir num, suma, contador, media Como Real
    suma <- 0
    contador <- 0
	
    Repetir
        Escribir "Ingrese un número positivo (negativo para terminar): "
        Leer num
        Si num >= 0 Entonces
            suma <- suma + num
            contador <- contador + 1
        FinSi
    Hasta Que num < 0
	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinAlgoritmo
