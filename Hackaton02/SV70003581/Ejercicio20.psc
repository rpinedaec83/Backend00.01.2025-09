//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//		¿Cuántos números son Pares?
//		¿Cuál es el mayor de todos?
//		Si el tercero es par, calcular el cuadrado del segundo.
//			Si el primero es menor que el cuarto, calcular la media de los 4 números.
//				Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

Proceso Ejercicio20
	
	Definir num1, num2, num3, num4, Pares Como Entero
	Pares = 0
	
	Escribir "Ingrese primer número:"
	Leer num1
	Escribir "Ingrese segundo número:"
	Leer num2
	Escribir "Ingrese tercer número:"
	Leer num3
	Escribir "Ingrese cuarto número:"
	Leer num4
	
	//Pares
	Si num1 Mod 2 = 0 Entonces
		Pares = Pares + 1
	FinSi
	Si num2 Mod 2 = 0 Entonces
		Pares = Pares + 1
	FinSi
	Si num3 Mod 2 = 0 Entonces
		Pares = Pares + 1
	FinSi
	Si num4 Mod 2 = 0 Entonces
		Pares = Pares + 1
	FinSi
	
	Escribir "Cantidad de pares: " Pares
	
	//Mayor	
	Si num1 >= num2 y num1 >= num3 y num1 >= num4 Entonces
		Escribir "Mayor: " num1
	FinSi
	
	Si num2 >= num1 y num2 >= num3 y num2 >= num4 Entonces
		Escribir "Mayor: " num2
	FinSi
	
	Si num3 >= num2 y num3 >= num1 y num3 >= num4 Entonces
		Escribir "Mayor: " num3
	FinSi
	
	Si num4 >= num1 y num4 >= num2 y num4 >= num3 Entonces
		Escribir "Mayor: " num3
	FinSi
	
	//Cuadrado del 2do si el 3ro es par
	si num3 mod 2 = 0 Entonces
		Escribir "El cuadrado del segundo número es " num2*num2
	FinSi
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 números
	Si num1 < num4 Entonces
		Escribir "La media de los 4 números es " (num1+num2+num3+num4)/4
	FinSi
	
	
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Si num2 > num3 entonces
		Si num3 >= 50 y num3 <= 700 Entonces
			Escribir "La suma de los 4 números es " num1+num2+num3+num4
		FinSi
	FinSi
FinProceso