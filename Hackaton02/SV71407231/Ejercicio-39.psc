Proceso piGregoryLeibniz
    Definir n, i, signo Como Entero
    Definir piAprox Como Real
    Escribir "Ingrese cantidad de terminos:"
    Leer n
    piAprox = 0
    signo = 1
    Para i = 1 Hasta n Con Paso 1 Hacer
        piAprox = piAprox + signo * (4.0 / (2 * i - 1))
        signo = signo * (-1)
    FinPara
    Escribir "Aproximacion de pi: ", piAprox
FinProceso