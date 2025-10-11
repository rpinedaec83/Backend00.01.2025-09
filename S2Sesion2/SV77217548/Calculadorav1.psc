Proceso Calculadorav1
	Escribir "Digita primer numero"
	Leer primerNumero
	Escribir "Digita el segundo numero"
	Leer segundoNumero
	
	Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir"
	Leer operacion
	
	opValida = 0
	resultado = 0
	
	Segun operacion Hacer
		1:
			resultado = primerNumero + segundoNumero
			opValida = 1
		2:
			resultado = primerNumero - segundoNumero
			opValida = 1
		3:
			resultado = primerNumero * segundoNumero
			opValida = 1
		4:
			resultado = primerNumero / segundoNumero
			opValida = 1
		De Otro Modo:
			Escribir "Operacion no valida"
			opValida = 0
	FinSegun
	
	Si opValida = 1 Entonces
		Escribir "El resultado es ", resultado
	FinSi

	
FinProceso