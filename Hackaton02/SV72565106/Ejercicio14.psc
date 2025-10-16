Proceso Ejercicio14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y determine si es un número primo.
	Definir num, i, contador Como Entero
	
    Escribir "Ingrese un número del 1 al 10: "
    Leer num
	
    Si num < 1 O num > 10 Entonces
        Escribir "Número fuera del rango."
    Sino
        Si num = 1 Entonces
            Escribir "El número 1 no es primo."
        Sino
            contador = 0
			
            Para i = 1 Hasta num Hacer
                Si num % i = 0 Entonces
                    contador = contador + 1
                FinSi
            FinPara
			
            Si contador = 2 Entonces
                Escribir "El número ", num, " es PRIMO."
            Sino
                Escribir "El número ", num, " NO es primo."
            FinSi
        FinSi
    FinSi
FinProceso
