//32. Se quiere saber cuál es la ciudad con la población de más personas,
// son tres provincias y once ciudades,
// hacer un algoritmo en Pseint que nos permita saber eso. .

Proceso Ejercicio32
	
	Definir mayorprovincia, ciudadMayor, nombreCiudad,nombreProvincia Como Caracter
	
	Definir i, j, poblacion, maxpoblacion como Entero
	
	maxpoblacion = 0
	
	para j=1 hasta 3 con paso 1 Hacer
		Escribir "Ingrese nombre de la provincia: " j
		Leer nombreProvincia
		
		para i=1 hasta 11 con paso 1 Hacer
			Escribir "Ingrese nombre de la ciudad: " i
			Leer nombreCiudad
			
			Escribir "Ingrese la población de: " nombreCiudad
			Leer poblacion
			
			si poblacion > maxpoblacion Entonces
				maxpoblacion = poblacion
				ciudadMayor = nombreCiudad
				mayorprovincia = nombreProvincia
			FinSi
		FinPara		
	FinPara
	
	Escribir "La ciudad con mayor población es " ciudadMayor " con " maxpoblacion " habitantes, en la provincia de " mayorprovincia
FinProceso