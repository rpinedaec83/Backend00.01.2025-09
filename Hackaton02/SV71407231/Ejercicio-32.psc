Proceso ciudadMayorPoblacion
    Definir provincia, ciudad, ciudadMayor, provinciaMayor Como Cadena
    Definir poblacion, mayorPoblacion, i, j Como Entero
    mayorPoblacion = 0
	
    Para i = 1 Hasta 3 Con Paso 1 Hacer
        Escribir "Ingrese nombre de la provincia ", i, ":"
        Leer provincia
        Para j = 1 Hasta 11 Con Paso 1 Hacer
            Escribir "Ingrese nombre de la ciudad ", j, " de la provincia ", provincia, ":"
            Leer ciudad
            Escribir "Ingrese poblacion de ", ciudad, ":"
            Leer poblacion
            Si poblacion > mayorPoblacion Entonces
                mayorPoblacion = poblacion
                ciudadMayor = ciudad
                provinciaMayor = provincia
            FinSi
        FinPara
    FinPara
	
    Escribir "La ciudad con mayor poblacion es: ", ciudadMayor
    Escribir "Pertenece a la provincia: ", provinciaMayor
    Escribir "Con una poblacion de: ", mayorPoblacion
FinProceso