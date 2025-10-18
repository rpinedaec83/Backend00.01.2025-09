Algoritmo catorce
	
	Definir num, i ,cont Como Entero
	Escribir "Ingrese un numero entre 1 y 9: "
	leer num
	
	contador <- 0
	Para i <- 1 Hasta num Con Paso 1 Hacer
		Si num MOD 1 = 0 Entonces
			cont <- cont + 1
		FinSi
	Fin Para
	
	Si cont = 2 Entonces
		Escribir "El numero es PRIMO"
	SiNo
		Escribir "El numero NO es primo"
	FinSi
FinAlgoritmo
