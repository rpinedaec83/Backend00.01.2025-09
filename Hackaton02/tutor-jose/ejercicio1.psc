//Hacer un algoritmo en 
//Pseint que lea tres números enteros y los muestre de menor a mayor.
//



Algoritmo menorMayor
	
	definir num1,num2,num3,menor, medio, mayor como entero;
	
	Escribir  "Ingrese el primer numero"
	leer num1
	
	Escribir  "Ingrese el segundo numero"
	leer num2
	
	Escribir  "Ingrese el tercer numero"
	leer num3
	
	
	Si num1 <=num2 y num1<=num3 Entonces
		
		menor = num1;
		
		si num2 <= num3 Entonces
			medio =num2
			mayor =num3
		SiNo
			medio=num3 
			mayor= num2
		FinSi
	SiNo
		si num2<=num1 y num2<=num3 Entonces
			menor = num2
			
			si num1 <= num3 Entonces
				medio = num1
				mayor = num3
			SiNo
				medio= num3
				mayor = num1
			FinSi
		SiNo
			menor = num3
			si num1<=num2 Entonces
				medio = num1
				mayor = num2
			SiNo
				medio =num2
				mayor = num1
			FinSi
		FinSi
		
	FinSi
	
	
	Escribir  "Numeros ordenados de menor a mayor: " menor, ", ", medio, ", ", mayor; 
	
FinAlgoritmo
