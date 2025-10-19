Algoritmo diecinueve
	Definir idEmpleado, dias, salarioDiario, totalPagar Como Real
	
    Escribir "Ingrese el número identificador del empleado (1?4):"
    Escribir "1 = Cajero, 2 = Servidor, 3 = Preparador, 4 = Mantenimiento"
    Leer idEmpleado
	
    Escribir "Ingrese los días trabajados (máximo 6): "
    Leer dias
	
    Segun idEmpleado Hacer
        1: salarioDiario <- 56
        2: salarioDiario <- 64
        3: salarioDiario <- 80
        4: salarioDiario <- 48
        De Otro Modo:
            Escribir "Identificador no válido."
	FinSegun

	Si dias > 6 Entonces
		Escribir "No puede trabajar más de 6 días."
	FinSi

	totalPagar <- salarioDiario * dias
	Escribir "Total a pagar: $", totalPagar
FinAlgoritmo
