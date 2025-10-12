Proceso operacionesNumeros
    Definir a, b, c, d, pares, mayor, cuadrado, suma Como Entero
    Definir media Como Real
    Definir valido Como Logico
	
    Escribir "Ingrese cuatro numeros enteros positivos:"
    Leer a, b, c, d
	
    valido = Verdadero
    Si a < 0 O b < 0 O c < 0 O d < 0 Entonces
        Escribir "Error: debe ingresar numeros enteros positivos."
        valido = Falso
    FinSi
	
    Si valido Entonces
        pares = 0
        Si a MOD 2 = 0 Entonces
            pares = pares + 1
        FinSi
        Si b MOD 2 = 0 Entonces
            pares = pares + 1
        FinSi
        Si c MOD 2 = 0 Entonces
            pares = pares + 1
        FinSi
        Si d MOD 2 = 0 Entonces
            pares = pares + 1
        FinSi
		
        mayor = a
        Si b > mayor Entonces
            mayor = b
        FinSi
        Si c > mayor Entonces
            mayor = c
        FinSi
        Si d > mayor Entonces
            mayor = d
        FinSi
		
        Escribir "Cantidad de pares: ", pares
        Escribir "El mayor es: ", mayor
		
        Si c MOD 2 = 0 Entonces
            cuadrado = b * b
            Escribir "El cuadrado del segundo es: ", cuadrado
        FinSi
		
        Si a < d Entonces
            media = (a + b + c + d) / 4.0
            Escribir "La media de los cuatro es: ", media
        FinSi
		
        Si b > c Entonces
            Si c >= 50 Y c <= 700 Entonces
                suma = a + b + c + d
                Escribir "La suma de los cuatro numeros es: ", suma
            FinSi
        FinSi
    FinSi
FinProceso
