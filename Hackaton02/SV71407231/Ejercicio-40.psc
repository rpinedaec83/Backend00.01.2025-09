Proceso piNilakantha
    Definir n, i, signo Como Entero
    Definir piAprox, termino Como Real
    Escribir "Ingrese cantidad de terminos:"
    Leer n
    piAprox = 3
    signo = 1
    Para i = 2 Hasta n*2 Con Paso 2 Hacer
        termino = 4.0 / (i * (i + 1) * (i + 2))
        piAprox = piAprox + signo * termino
        signo = signo * (-1)
    FinPara
    Escribir "Aproximacion de pi: ", piAprox
FinProceso