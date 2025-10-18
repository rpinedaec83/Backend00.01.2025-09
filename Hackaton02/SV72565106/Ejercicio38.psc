Proceso Ejercicio38
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	Escribir "Ingrese un número:"
    Leer num
	
    suma = 0
	
    Para i = 1 Hasta num - 1 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            suma = suma + i
        FinSi
    FinPara
	
    Si suma = num Entonces
        Escribir "El número ", num, " es un número perfecto."
    Sino
        Escribir "El número ", num, " NO es un número perfecto."
    FinSi

	
FinProceso
