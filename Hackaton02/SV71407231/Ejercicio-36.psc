Proceso serieFibonacci
    Definir n, a, b, c, i Como Entero
    Escribir "Ingrese cantidad de terminos:"
    Leer n
    a = 0
    b = 1
    Escribir Sin Saltar a, ", ", b
    Para i = 3 Hasta n Con Paso 1 Hacer
        c = a + b
        Escribir Sin Saltar ", ", c
        a = b
        b = c
    FinPara
    Escribir ""
FinProceso