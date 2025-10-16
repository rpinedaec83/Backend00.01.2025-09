Proceso Ejercicio32
	//32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. 
	Definir i, poblacion, maxPoblacion Como Entero
    Definir nombreProvincia, nombreCiudad, maxProvincia, maxCiudad Como Cadena
	
    maxPoblacion <- -1
    maxProvincia <- ""
    maxCiudad <- ""
	
	//Tomo en este caso 11 ciudades las cuales estan distribuidas en 3 provincias,
	//las inserto manualmente para hacer el calculo.
    Para i <- 1 Hasta 11 Hacer
        Escribir "Ciudad #", i
        Escribir "Nombre de la provincia:"
        Leer nombreProvincia
        Escribir "Nombre de la ciudad:"
        Leer nombreCiudad
		
        Repetir
            Escribir "Poblacion (entero >= 0):"
            Leer poblacion
        Hasta Que poblacion >= 0
		
        Si poblacion > maxPoblacion Entonces
            maxPoblacion <- poblacion
            maxProvincia <- nombreProvincia
            maxCiudad <- nombreCiudad
        FinSi
		
    FinPara
	
    Si maxPoblacion >= 0 Entonces
        Escribir "La ciudad con mayor poblacion es: ", maxCiudad
        Escribir "Provincia: ", maxProvincia
        Escribir "Poblacion: ", maxPoblacion
    SiNo
        Escribir "No se ingresaron datos validos."
    FinSi
	
FinProceso
