Proceso ordenarTresNumeros
    Definir a, b, c, temp Como Entero
    Escribir "Ingrese el primer numero:"
    Leer a
    Escribir "Ingrese el segundo numero:"
    Leer b
    Escribir "Ingrese el tercer numero:"
    Leer c
	
    Si a > b Entonces
        temp = a
        a = b
        b = temp
    FinSi
    Si a > c Entonces
        temp = a
        a = c
        c = temp
    FinSi
    Si b > c Entonces
        temp = b
        b = c
        c = temp
    FinSi
	
    Escribir "Los numeros ordenados son: ", a, ", ", b, ", ", c
FinProceso