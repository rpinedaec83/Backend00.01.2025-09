Proceso Ejercicio37
	//Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	Definir numA, numB Como Entero  
    Definir temp, resto Como Entero
	
	Escribir "Ingrese el primer número entero positivo (A):"
    Leer numA
    Escribir "Ingrese el segundo número entero positivo (B):"
    Leer numB
	
	Si numA <= 0 O numB <= 0 Entonces
        Escribir "Error: Ambos números deben ser enteros positivos."
    SiNo
        Mientras numB <> 0 Hacer
            
            resto <- numA MOD numB
            
            numA <- numB
            
            numB <- resto
            
        FinMientras
        
        Escribir "El M.C.D. es: ", numA
        
    FinSi
	
FinProceso
