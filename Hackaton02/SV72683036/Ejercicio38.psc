Proceso Ejercicio38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto
	
	definir numero, sumaDivisores,i como entero
	
	
	sumaDivisores <- 0
	Escribir "Ingrese un número entero positivo:"
    Leer numero
	
	Si numero <= 1 Entonces
        Escribir "El número debe ser un entero positivo mayor que 1."
    SiNo
        
        Para i <- 1 Hasta numero - 1 Con Paso 1 Hacer
            
            Si numero MOD i = 0 Entonces
                
                sumaDivisores <- sumaDivisores + i
            FinSi
            
        FinPara
        
        Si sumaDivisores = numero Entonces
            Escribir " El número es un número perfecto."
        SiNo
            Escribir "El número NO es un número perfecto."
        FinSi
        
    FinSi
	
	
	
	
FinProceso
