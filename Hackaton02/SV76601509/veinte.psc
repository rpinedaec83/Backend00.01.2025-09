Algoritmo veinte
	Definir n1, n2, n3, n4, pares, mayor, media, cuadrado, suma Como Real
    pares <- 0
	
    Escribir "Ingrese cuatro números positivos:"
    Leer n1, n2, n3, n4
	
    Si n1 MOD 2 = 0 Entonces
        pares <- pares + 1
    FinSi
    Si n2 MOD 2 = 0 Entonces
        pares <- pares + 1
    FinSi
    Si n3 MOD 2 = 0 Entonces
        pares <- pares + 1
    FinSi
    Si n4 MOD 2 = 0 Entonces
        pares <- pares + 1
    FinSi
	
    mayor <- n1
    Si n2 > mayor Entonces
        mayor <- n2
    FinSi
    Si n3 > mayor Entonces
        mayor <- n3
    FinSi
    Si n4 > mayor Entonces
        mayor <- n4
    FinSi
	
    Escribir "Cantidad de números pares: ", pares
    Escribir "El mayor número es: ", mayor
	
    Si n3 MOD 2 = 0 Entonces
        cuadrado <- n2^2
        Escribir "El tercero es par, el cuadrado del segundo es: ", cuadrado
    FinSi
	
    Si n1 < n4 Entonces
        media <- (n1 + n2 + n3 + n4) / 4
        Escribir "El primero es menor que el cuarto. La media es: ", media
    FinSi
	
    Si n2 > n3 Entonces
        Si n3 >= 50 Y n3 <= 700 Entonces
            suma <- n1 + n2 + n3 + n4
            Escribir "El tercero está entre 50 y 700. La suma es: ", suma
        FinSi
    FinSi
FinAlgoritmo
