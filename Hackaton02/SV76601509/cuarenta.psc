Algoritmo cuarenta
	Definir n, i, signo Como Entero
    Definir piAprox, termino Como Real
	
    Escribir "Ingrese la cantidad de términos: "
    Leer n
	
    piAprox <- 3
    signo <- 1
	
    Para i <- 2 Hasta n*2 Con Paso 2 Hacer
        termino <- 4 / (i * (i + 1) * (i + 2))
        piAprox <- piAprox + (signo * termino)
        signo <- signo * -1
    FinPara
	
    Escribir "Aproximación de Pi con ", n, " términos: ", piAprox
FinAlgoritmo
