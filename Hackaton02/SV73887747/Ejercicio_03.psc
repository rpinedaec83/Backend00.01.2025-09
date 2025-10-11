Proceso Ejercicio_03
	//3. Hacer un algoritmo en Pseint que lea 
	//	un numero y determinar si termina en 4.
	
	Definir numero Como Entero
	Escribir "Ingrese un numero: "
	Leer numero
	
	Ultimo_digito = numero MOD 10 
	
	Si Ultimo_digito = 4 Entonces
		Escribir "El numero ",numero," termina en 4."
	SiNo
		Escribir "El numero ",numero," no termina en 4."
	FinSi
	
	
FinProceso
