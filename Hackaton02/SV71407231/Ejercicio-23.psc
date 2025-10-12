Proceso sumaImpares
    Definir n, i, suma Como Entero
    Escribir "Ingrese n:"
    Leer n
	
    suma = 0
    Para i = 1 Hasta n Con Paso 1 Hacer
        Si i MOD 2 <> 0 Entonces
            suma = suma + i
        FinSi
    FinPara
	
    Escribir "La suma de los impares hasta ", n, " es ", suma
FinProceso