Proceso Ejercicio35
	//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	Definir i Como Entero
    Definir n, numeroMayor, numeroMenor Como Real
	
    Para i <- 1 Hasta 20 Hacer
        Escribir "Ingresa el numero ", i, ":"
        Leer n
		
        Si i = 1 Entonces
            numeroMayor <- n
            numeroMenor <- n
        SiNo
            Si n > numeroMayor Entonces
                numeroMayor <- n
            FinSi
            Si n < numeroMenor Entonces
                numeroMenor <- n
            FinSi
        FinSi
    FinPara
	
    Escribir "Numero mayor: ", numeroMayor
    Escribir "Numero menor: ", numeroMenor
	
FinProceso
