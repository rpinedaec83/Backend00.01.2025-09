//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
// Para 496 perfecto porque sus divisores 1, 2, 4, 8, 16, 31, 62, 124, 248 sumados dan 496.
//Ejemplo simple 6, donde divisores 1, 2, 3 suman 6
Proceso Ejercicio38

	Definir num, i, suma Como Entero

	Escribir "Ingrese un número:"
	Leer num

	suma = 0

	Para i = 1 Hasta num-1 Con Paso 1 Hacer //Detenerlo un numero antes del ingresado
		Si num MOD i = 0 Entonces //Si es divisor exacto
			suma = suma + i //sumarlo al acumulado
		FinSi
	FinPara

	Si suma = num Entonces
		Escribir num, " es un número perfecto."
	SiNo
		Escribir num, " no es un número perfecto."
	FinSi

FinAlgoritmo