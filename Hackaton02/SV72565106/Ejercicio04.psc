Proceso Ejercicio04
	Definir num1,num2,num3,menor,medio,mayor Como Entero
	
	Escribir "Ingrese el primer numero"
	Leer num1
	Escribir "Ingrese el segundo numero"
	Leer num2
	Escribir "Ingrese el tercer numero"
	Leer num3
	
	Si	num1<=num2 y num1<=num3 Entonces
		menor=num1
		Si	num2<=num3 Entonces
			medio=num2
			mayor=num3
		SiNo
			medio=num3
			mayor=num2
		FinSi
	SiNo
		Si	num2<=num1 y num2<=num3 Entonces
			menor=num2
			si	num1<=num3 Entonces
				medio=num1
				mayor=num3
			SiNo
				medio=num3
				mayor=num1
			FinSi
		SiNo
			menor = num3
			si num1<=num2 Entonces
				medio=num1
				mayor=num2
			SiNo
				medio=num2
				mayor=num1
			FinSi
		FinSi 
	FinSi
	
	Escribir "Los numeros ordenados de mayor a menor son: ",menor,",",medio,",",mayor 
	
FinProceso
