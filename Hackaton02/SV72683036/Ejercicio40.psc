Proceso Ejercicio40
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	
	
	Definir pi_aprox Como Real 
    Definir  Como Entero      
    Definir N,i,a, b, c Como Entero 
    
    
    pi_aprox <- 3
    
    
    a <- 2  
    b <- 3  
    c <- 4  
    
    
    Escribir "Ingrese la cantidad de términos de corrección (N) a utilizar:"
    Leer N
    
 
    Si N <= 0 Entonces
        Escribir "Error: Debe ingresar una cantidad de términos positiva."
    SiNo
        
        
        Para i <- 1 Hasta N Con Paso 1 Hacer
            
            Definir termino Como Real
            termino <- 4 / (a * b * c)
            
            Si i MOD 2 = 1 Entonces
                pi_aprox <- pi_aprox + termino
            SiNo
                pi_aprox <- pi_aprox - termino
            FinSi
            
            a <- a + 2
            b <- b + 2
            c <- c + 2
            
        FinPara
		
        Escribir "Aproximación de Pi obtenida: ", pi_aprox
        
        
    FinSi
	
	
FinProceso
