//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

Proceso Ejercicio31	
	
	Definir pares, impares Como Entero	
	pares = 0
	impares = 0
	
	Para i=1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese número:"
		Leer num
		
		Si num = 0 Entonces
			Escribir "Número inválido."
		FinSi	
		
		Si num mod 2 = 0 Entonces
			pares = pares + num
		SiNo
			si num mod 2 = 1 Entonces
				impares = impares + num							
			FinSi			
		FinSi
	Fin Para
	
	Escribir "Suma de pares: " pares
	Escribir "Suma de impares: " impares
	
FinProceso