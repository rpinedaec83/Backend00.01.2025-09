Proceso mediaParesImpares
    Definir num, i, sumaPar, sumaImpar, contPar, contImpar Como Entero
    Definir mediaPar, mediaImpar Como Real
    sumaPar = 0
    sumaImpar = 0
    contPar = 0
    contImpar = 0
    Para i = 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese un numero:"
        Leer num
        Si num MOD 2 = 0 Entonces
            sumaPar = sumaPar + num
            contPar = contPar + 1
        SiNo
            sumaImpar = sumaImpar + num
            contImpar = contImpar + 1
        FinSi
    FinPara
    Si contPar > 0 Entonces
        mediaPar = sumaPar / contPar
        Escribir "Media de pares: ", mediaPar
    FinSi
    Si contImpar > 0 Entonces
        mediaImpar = sumaImpar / contImpar
        Escribir "Media de impares: ", mediaImpar
    FinSi
FinProceso