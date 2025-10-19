Proceso Ejercicio34
	//Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno al nueve.
	Definir base, multiplicador, resultado Como Entero
	
	Para base <- 1 Hasta 9 Con Paso 1 Hacer
        
        Escribir "" 
        Escribir "--- Tabla del ", base, " ---"
        
        Para multiplicador <- 1 Hasta 12 Con Paso 1 Hacer
            resultado <- base * multiplicador
            Escribir base, " x ", multiplicador, " = ", resultado
        FinPara
        
    FinPara
	
	
FinProceso
