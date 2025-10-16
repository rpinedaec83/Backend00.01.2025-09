

//32. Se quiere saber cuál es la ciudad con la población de más 
//personas, son tres provincias y once ciudades, hacer un algoritmo 
//en Pseint que nos permita saber eso. 
Algoritmo ejercicio32
	
	Definir   ciudad, provincia, mayorPoblacion, ciudadMayor, nombreCiudad, nombreProvincia, mayorProvincia Como Caracter
	
	Definir  i,j, poblacion, maxpoblacion Como Entero
	
	maxpoblacion =0;
	
	
	para j<-1 hasta 3  Con Paso 1 Hacer
		
		Escribir  "Nombre provincia"
		leer nombreProvincia
		

	para i<-1 hasta 11  Con Paso 1 Hacer
		
		Escribir  "ingrese el nombre de la ciudad: ", i
		leer nombreCiudad;
		
		Escribir "Ingrese la poblacion de ", nombreCiudad
		Leer  poblacion;
		
		si poblacion>maxpoblacion Entonces
			maxpoblacion = poblacion
			ciudadMayor = nombreCiudad
			mayorProvincia = nombreProvincia
		FinSi
	FinPara
FinPara

	
	Escribir "La ciudad con mayor poblacion es: ",ciudadMayor, " con ", maxpoblacion, " habitantes", " en la provincia de ", mayorProvincia
	
	
FinAlgoritmo
