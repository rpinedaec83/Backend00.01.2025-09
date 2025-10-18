Proceso Ejercicio03
	Definir numero, ultimoDigito Como Entero
	
	Escribir "Ingrese un numero: "
	Leer numero
	
	ultimoDigito <- Abs(numero) Mod 10
	
	Si	ultimoDigito = 4 Entonces
		Escribir "El numero termina en 4" 
	SiNo
		Escribir "El numero no termina en 4"
	FinSi
	
FinProceso
