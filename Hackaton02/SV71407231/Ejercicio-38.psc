Proceso numeroPerfecto
    Definir num, i, suma Como Entero
    Escribir "Ingrese un numero:"
    Leer num
    suma = 0
    Para i = 1 Hasta num - 1 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    Si suma = num Entonces
        Escribir "Es un numero perfecto"
    SiNo
        Escribir "No es un numero perfecto"
    FinSi
FinProceso