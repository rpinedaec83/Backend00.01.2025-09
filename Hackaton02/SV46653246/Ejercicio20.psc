Proceso Ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	
    //¿Cuántos números son Pares?
	
    //¿Cuál es el mayor de todos?
	
    //Si el tercero es par, calcular el cuadrado del segundo.
		
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
			
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	
	
	Definir num1, num2, num3, num4 Como Entero
	Dimensionar num[4] 
	
	Para i <- 1 Hasta 4
		Escribir "Ingrese Numero " i
		Leer num[i]
	FinPara
	
	Si num[1] > 0 y num[2] > 0 y num[3] > 0 y num[4] > 0 Entonces
		
			Para i <- 1 Hasta 4
				si num[i] MOD 2 = 0
					Entonces
					numPar <- numPar +1
				FinSi
			FinPara
			
			Si numPar = 0
				Entonces
				Escribir "No hay números Pares" 
			SiNo
				Escribir "Numeros pares son: " numPar
			FinSi
			
			Si num[1]>num[2] Entonces
				may2 <- num[1]
				may3 <- num[2]
			SiNo
				may2 <- num[2]
				may3 <- num[1]
			FinSi
			
			Si num[3]>may2 Entonces
				may1 <- num[3] 
			SiNo
				may1 <- may2 
			FinSi
			
			Si num[4]>may1 Entonces
				may0 <- num[4]
			SiNo
				may0 <- may1
			FinSi
				
			Escribir 'El mayor es: ', may0
			
			Si num[3] MOD 2 = 0 Entonces
				Escribir "El cuadrado del 2do es: " num[2]^2
			FinSi
			
			Si num[1]<num[4] Entonces
				Para i <- 1 Hasta 4
					numMedia <- num[i] + numMedia
				FinPara
				Escribir "La media de los 4 números es: " numMedia/2
			FinSi
			
			Si num[2]>num[3] Entonces
				si num[3] >= 50 y num[3] <= 700 Entonces
					Para i <- 1 Hasta 4
						sumaTotal <- sumaTotal + num[i]
					FinPara
					Escribir "La suma de los 4 números es: " sumaTotal
				FinSi
			FinSi
		SiNo
			Escribir "Ingrese sólo numeros positivos"
		FinSi
FinProceso
