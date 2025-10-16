Proceso Ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
    //¿Cuántos números son Pares?
    //¿Cuál es el mayor de todos?
	//Si el tercero es par, calcular el cuadrado del segundo.
    //Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Definir a, b, c, d Como Entero
    Definir pares, numeroMayor Como Entero
    Definir cuadradoSegundo, media, suma Como Real
    Definir hayCuadrado, hayMedia, haySuma Como Logico
	
    Repetir
        Escribir "Ingrese el 1er entero positivo:"
        Leer a
		
		Si a <= 0 Entonces
			Escribir "Ingresa un numero valido."
		FinSi
		
    Hasta Que a > 0
	
    Repetir
        Escribir "Ingrese el 2do entero positivo:"
        Leer b
		
		Si b <= 0 Entonces
			Escribir "Ingresa un numero valido."
		FinSi
		
    Hasta Que b > 0
	
    Repetir
        Escribir "Ingrese el 3er entero positivo:"
        Leer c
		
		Si c <= 0 Entonces
			Escribir "Ingresa un numero valido."
		FinSi
		
    Hasta Que c > 0
	
    Repetir
        Escribir "Ingrese el 4to entero positivo:"
        Leer d
		
		Si d <= 0 Entonces
			Escribir "Ingresa un numero valido."
		FinSi
		
    Hasta Que d > 0
	
    pares <- 0
    Si (a MOD 2) = 0 Entonces
		pares <- pares + 1
	FinSi
    Si (b MOD 2) = 0 Entonces
		pares <- pares + 1
	FinSi
    Si (c MOD 2) = 0 Entonces
		pares <- pares + 1
	FinSi
    Si (d MOD 2) = 0 Entonces
		pares <- pares + 1
	FinSi

    numeroMayor <- a
    Si b > numeroMayor Entonces
		numeroMayor <- b
	FinSi
    Si c > numeroMayor Entonces
		numeroMayor <- c
	FinSi
    Si d > numeroMayor Entonces
		numeroMayor <- d
	FinSi
	
    hayCuadrado <- Falso
    Si (c MOD 2) = 0 Entonces
        cuadradoSegundo <- b * b
        hayCuadrado <- Verdadero
    FinSi
	
    hayMedia <- Falso
    Si a < d Entonces
        media <- (a + b + c + d) / 4
        hayMedia <- Verdadero
    FinSi
	
    haySuma <- Falso
    Si b > c Entonces
        Si c >= 50 Y c <= 700 Entonces
            suma <- a + b + c + d
            haySuma <- Verdadero
        FinSi
    FinSi
	
    Escribir "Cantidad de pares: ", pares
    Escribir "Mayor de los cuatro: ", numeroMayor
	
    Si hayCuadrado Entonces
        Escribir "El 3ro es par -> cuadrado del 2do = ", cuadradoSegundo
    Sino
        Escribir "El 3ro NO es par -> no se calcula el cuadrado del 2do."
    FinSi
	
    Si hayMedia Entonces
        Escribir "Como el 1ro < 4to entonces la media = ", media
    Sino
        Escribir "El 1ro NO es menor que el 4to entonces no se calcula la media."
    FinSi
	
    Si haysSuma Entonces
        Escribir "Como (2do > 3ro) y (3ro entre [50,700]) entonces suma = ", suma
    Sino
        Escribir "No se cumplen ambas condiciones (2do > 3ro y 3ro entre [50,700]) entonces no se suma."
    FinSi
	
	
FinProceso
