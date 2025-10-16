Proceso numeroPrimo
    Definir num, i, divisores Como Entero
    Escribir "Ingrese un numero entero positivo del 1 al 9:"
    Leer num
	
    Si num < 1 O num > 9 Entonces
        Escribir "Numero fuera de rango (1 a 9)."
    Sino
        divisores = 0
        Para i = 1 Hasta num Con Paso 1 Hacer
            Si num MOD i = 0 Entonces
                divisores = divisores + 1
            FinSi
        FinPara
		
        Si divisores = 2 Entonces
            Escribir "El numero es primo."
        Sino
            Escribir "El numero no es primo."
        FinSi
    FinSi
FinProceso