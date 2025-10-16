Proceso mayorMenor20
    Definir num, mayor, menor, i Como Entero
    Escribir "Ingrese numero 1:"
    Leer num
    mayor = num
    menor = num
    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese numero ", i, ":"
        Leer num
        Si num > mayor Entonces
            mayor = num
        FinSi
        Si num < menor Entonces
            menor = num
        FinSi
    FinPara
    Escribir "El mayor es: ", mayor
    Escribir "El menor es: ", menor
FinProceso