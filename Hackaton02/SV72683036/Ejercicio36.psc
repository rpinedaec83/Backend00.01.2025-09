Proceso Ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci..
	Definir n,a, b, c, i Como Entero
	
	a <- 0 
    b <- 1
	Escribir "Ingrese la cantidad de términos de la Serie de Fibonacci que desea ver:"
    Leer n
	
	Si N >= 1 Entonces
        Escribir a
        
        Si N >= 2 Entonces
            Escribir b
            
            Para i <- 3 Hasta N Con Paso 1 Hacer
                
                c <- a + b
                Escribir c, " "
                a <- b
                b <- c
                
            FinPara
            
        FinSi
    SiNo
        Escribir "Debe ingresar un número positivo de términos."
    FinSi
	
	
FinProceso
