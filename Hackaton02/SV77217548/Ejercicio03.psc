Proceso Ejercicio03
	//3. Hacer un algoritmo en Pseint que lea un numero y determinar si termina en 4.
	Escribir "Elige el metodo:"
	Escribir "1. Numeros enteros."
	Escribir "2. Ultimo digito de parte entera."
	Escribir "3. Ultimo digito del numero."
	Leer seleccion
	
	Segun seleccion Hacer
		1:
			//Para numeros enteros de entrada
			Definir numeroEntero Como Entero
			
			Escribir "Ingrese un numero entero: "
			Leer numeroEntero
			
			Si (abs(numeroEntero) MOD 10) = 4 Entonces
				Escribir "Si, termina en 4."
			SiNo
				Escribir "No termina en 4."
			FinSi
			
		2:
			//Para numeros reales de entrada, ultimo digito de la parte entera
			Definir numeroReal Como Real
			
			Escribir "Ingrese un numero: "
			Leer numeroReal
			
			numeroEntero <- trunc(abs(numeroReal))
			
			Si (numeroEntero MOD 10) = 4 Entonces
				Escribir "Si, la PARTE ENTERA termina en 4."
			SiNo
				Escribir "No termina en 4."
			FinSi
			
		3:
			//Para numeros reales, ultimo digito
			Definir numeroIngresado, ultimoDigito, c Como Cadena
			Definir numeroDeDigitos Como Entero
			
			Escribir "Ingrese un numero"
			Leer numeroIngresado
			
			ultimoDigito <- ""
			numeroDeDigitos <- Longitud(numeroIngresado)
			
			Mientras numeroDeDigitos >= 1 Hacer
				c <- SubCadena(numeroIngresado, numeroDeDigitos, numeroDeDigitos)
				Mostrar c
				Si c >= "0" Y c <= "9" Entonces
					ultimoDigito <- c
					numeroDeDigitos <- 0
				SiNo
					numeroDeDigitos <- numeroDeDigitos - 1
				FinSi
			FinMientras
			
			Si ultimoDigito = "" Entonces
				Escribir "Entrada invalida, no se encontro ningun digito."
			SiNo
				Si ultimoDigito = "4" Entonces
					Escribir "Si, el numero termina en 4."
				SiNo
					Escribir "No termina en 4."
				FinSi
			FinSi
			
		De Otro Modo:
			Escribir "Opcion no valida."
	FinSegun
	
FinProceso
