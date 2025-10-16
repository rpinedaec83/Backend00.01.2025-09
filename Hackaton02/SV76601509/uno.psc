Algoritmo uno
	// Hacer un algoritmo en PSint que lea un numero
	// por el teclado y determinar si tiene 3 digitos
	Escribir "Escriba un numero"
	Leer num
	
	Si (num/100) >= 1 y (num/100) < 10 Entonces
		Escribir "Tiene 3 digitos"
	SiNo
		Escribir "NO TIENE 3 digitos"
	Fin Si
FinAlgoritmo
