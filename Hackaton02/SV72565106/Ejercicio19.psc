Proceso Ejercicio19
	//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
	//con su número identificador y salario diario correspondiente: Cajero (56$/día). Servidor (64$/día). 
	//Preparador de mezclas (80$/día). Mantenimiento (48$/día). El dueño de la tienda desea tener un programa donde 
	//sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que 
	//trabajó en la semana (6 días máximos).Y el programa le mostrará por pantalla la cantidad de dinero que el dueño 
	//le debe pagar al empleado que ingresó
	Definir id_empleado, dias, pago_diario, pago_total Como Real
	
    Escribir "   Identificadores de empleados:"
    Escribir "1. Cajero (56$/día)"
    Escribir "2. Servidor (64$/día)"
    Escribir "3. Preparador de mezclas (80$/día)"
    Escribir "4. Mantenimiento (48$/día)"
	
    Escribir "Ingrese el número identificador del empleado (1-4):"
    Leer id_empleado
	
    Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
    Leer dias
	
    Si dias > 6 Entonces
        Escribir "Error: No puede trabajar más de 6 días por semana."
    Sino
        Segun id_empleado Hacer
            1:
                pago_diario = 56
            2:
                pago_diario = 64
            3:
                pago_diario = 80
            4:
                pago_diario = 48
            De Otro Modo:
                pago_diario = 0
                Escribir "Número de empleado inválido."
        FinSegun
		
        Si pago_diario > 0 Entonces
            pago_total = pago_diario * dias
            Escribir "El pago total al empleado es: $", pago_total
        FinSi
    FinSi
	
FinProceso
