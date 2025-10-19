Proceso Ejercicio19
	// 19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de 
	// empleados ordenados de la siguiente forma con su número identificador y 
	// salario diario correspondiente:
	
	// Cajero (56$/día).
	// Servidor (64$/día).
	// Preparador de mezclas (80$/día).
	// Mantenimiento (48$/día).
	
	// El dueño de la tienda desea tener un programa donde sólo 
	// ingrese dos números enteros que representen al número identificador
	// del empleado y la cantidad de días que trabajó en la semana
	// (6 días máximos). Y el programa le mostrará por pantalla la cantidad
	// de dinero que el dueño le debe pagar al empleado que ingresó
	
	Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioDia, pagoTotal Como Real
	
    Escribir "  TIPOS DE EMPLEADOS:"
    Escribir "  1. Cajero (56 $/día)"
    Escribir "  2. Servidor (64 $/día)"
    Escribir "  3. Preparador de mezclas (80 $/día)"
    Escribir "  4. Mantenimiento (48 $/día)"
	
    Escribir "Ingrese el número identificador del empleado (1-4):"
    Leer idEmpleado
	
    Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
    Leer diasTrabajados
	
	Si diasTrabajados > 6 Entonces
		Escribir "Error: Un empleado no puede trabajar más de 6 días."
	SiNo
		Segun  idEmpleado Hacer
			1:
                salarioDia = 56
            2:
                salarioDia = 64
            3:
                salarioDia = 80
            4:
                salarioDia = 48
            De Otro Modo:
                Escribir "Error: número de empleado inválido."
		FinSegun
		
		pagoTotal = salarioDia * diasTrabajados
		
        Escribir "Empleado número: ", idEmpleado
        Escribir "Días trabajados: ", diasTrabajados
        Escribir "Salario diario: $", salarioDia
        Escribir "Pago total semanal: $", pagoTotal

	FinSi
	
FinProceso
