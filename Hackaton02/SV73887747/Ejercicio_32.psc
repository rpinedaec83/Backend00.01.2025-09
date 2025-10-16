Proceso Ejercicio_32
	//32. Se quiere saber cuál es la ciudad con la población de 
	//	más personas, son tres provincias y once ciudades, hacer 
	//	un algoritmo en Pseint que nos permita saber eso. 

	Definir ciudad, provincia Como Cadena
	Definir poblacion, mayor_poblacion Como Entero
	Definir ciudad_mayor, provincia_mayor Como Cadena
	Definir i Como Entero
	
	mayor_poblacion = -1
	
	Para i = 1 Hasta 11 Con Paso 1
		Escribir "Ingrese el nombre de la ciudad ", i, ":"
		Leer ciudad
		
		Escribir "Ingrese la provincia de la ciudad ", ciudad, ":"
		Leer provincia
		
		Escribir "Ingrese la población de la ciudad ", ciudad, ":"
		Leer poblacion
		
		Si poblacion > mayor_poblacion Entonces
			mayor_poblacion = poblacion
			ciudad_mayor = ciudad
			provincia_mayor = provincia
		FinSi
	FinPara
	
	Escribir "La ciudad con más población es: ", ciudad_mayor
	Escribir "Provincia: ", provincia_mayor
	Escribir "Población: ", mayor_poblacion
FinProceso
