Proceso mcdEuclides
    Definir a, b, resto Como Entero
    Escribir "Ingrese primer numero:"
    Leer a
    Escribir "Ingrese segundo numero:"
    Leer b
    Mientras b <> 0 Hacer
        resto = a MOD b
        a = b
        b = resto
    FinMientras
    Escribir "El MCD es: ", a
FinProceso