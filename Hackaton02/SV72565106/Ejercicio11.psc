Proceso Ejercicio11
	//Hacer un algoritmo en Pseint que lea tres números 
	//y diga cuál es el mayor.
	Definir num1, num2, num3, mayor Como Entero
	
	Escribir "Ingrese el primer numero: "
	Leer num1
	Escribir "Ingrese el segundo numero: "
	Leer num2
	Escribir "Ingrese el tercer numero: "
	Leer num3
	
	Si num1>num2 y num1>num3 Entonces
		mayor = num1
	SiNo
		si num2>num1 y num2>num3 entonces
			mayor = num2
		SiNo
			mayor = num3
		FinSi
	FinSi
	
	Escribir "El numero mayor es: ", mayor
	
FinProceso
