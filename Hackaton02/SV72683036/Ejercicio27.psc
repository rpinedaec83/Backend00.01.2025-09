Proceso Ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, 
	//se debe acabar el programa al ingresar un número negativo.
	
	definir num,suma,media como real
	definir contador como entero
	
	Escribir "Ingrese un número:"
    Leer num
	
	
	Mientras num >= 0 Hacer
        suma <- suma + num
        contador <- contador + 1
        
        Escribir "Ingrese otro número (o negativo para terminar):"
        Leer num
        
    FinMientras
	
	
	Si contador > 0 Entonces
		media <- suma / contador
        Escribir "El promedio de los números positivos es: ", media
        
    SiNo
        Escribir "No se ingresó ningún número positivo para calcular la media."
	FinSi
	

	
FinProceso
