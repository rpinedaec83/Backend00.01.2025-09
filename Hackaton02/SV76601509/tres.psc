Algoritmo tres
	
	//Hacer un algoritmo en Pseint que lea un número
	// y determinar si termina en 4
	Definir  ultimo Como Entero
	
	Escribir "Ingrese el numero"
	Leer num
	
	ultimo <- num MOD 10
	
	Si ultimo = 4  Entonces
		Escribir "El numero SI termina en 4"
	SiNo
		Escribir "El numero NO termina en 4"
	Fin Si
	
FinAlgoritmo
