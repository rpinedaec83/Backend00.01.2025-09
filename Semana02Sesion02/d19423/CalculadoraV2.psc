Proceso CalculadoraV2
	
	bandera = Verdadero
	
	Mientras bandera Hacer
		Escribir "Digita el primer numero"
		Leer primerNumero
		Escribir "Digita el segundo numero"
		Leer segundoNumero
		
		
		Escribir "Digita la operacion: 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir, si desea salir digita 0"
		Leer operacion
		
		si operacion = 0 Entonces
			bandera = Falso
		FinSi
		
		resultado = 0
		opValida = 0
		
		
		
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
			0:
				Escribir "Saliendo del programa"
			De Otro Modo:
				Escribir "Operacion no valida"
				opValida = 0
		Fin Segun
		
		si opValida = 1 Entonces
			Escribir  "El resultado es ", resultado
		FinSi
	FinMientras
	
FinProceso
