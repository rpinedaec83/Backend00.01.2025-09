3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.

Proceso Ejercicio03
	Definir numero_entero Como Entero
	Escribir "Ingrese un número entero:"
	Leer numero_entero
	ultimo_digito = SubCadena(numero_entero,Longitud(numero_entero),Longitud(numero_entero)+1)
	Si ultimo_digito = "4" Entonces
		Escribir "El número " numero_entero " sí termina en 4."
	SiNo
		Escribir "El número " numero_entero " no termina en 4."
	FinSi
FinProceso

//Otra manera

Proceso Ejercicio03
	Escribir "Ingrese un número entero:"
	Leer num1
	resultado = num1 MOD 10
	Si resultado = 4 Entonces
		Escribir "El número sí termina en 4."
	SiNo
		Escribir "El número no termina en 4."
	FinSi	
FinProceso