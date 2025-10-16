Proceso factorialMientras
    Definir num, fact Como Entero
    Escribir "Ingrese un numero:"
    Leer num
	
    fact = 1
    Mientras num > 0 Hacer
        fact = fact * num
        num = num - 1
    FinMientras
	
    Escribir "El factorial es ", fact
FinProceso