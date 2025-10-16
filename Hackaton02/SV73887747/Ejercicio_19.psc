Proceso Ejercicio_19
	//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados 
	//ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	//Cajero (56$/día).
    //Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que 
	//representen al número identificador del empleado y la cantidad de días que trabajó en la 
	//semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que 
	//el dueño le debe pagar al empleado que ingresó
	
	Definir id_empleado, dias_trabajados, salario_diario, pago_total Como Entero
	
	Escribir "Ingrese el número identificador del empleado:"
	Escribir "1 = Cajero"
	Escribir "2 = Servidor"
	Escribir "3 = Preparador de mezclas"
	Escribir "4 = Mantenimiento"
	Leer id_empleado
	
	Escribir "Ingrese la cantidad de días trabajados (máximo 6):"
	Leer dias_trabajados
	
	Si dias_trabajados >= 0 Y dias_trabajados <= 6 Entonces
		Segun id_empleado Hacer
			1:
				salario_diario = 56
			2:
				salario_diario = 64
			3:
				salario_diario = 80
			4:
				salario_diario = 48
			De Otro Modo:
				salario_diario = 0
		FinSegun
		
		Si salario_diario > 0 Entonces
			pago_total = salario_diario * dias_trabajados
			Escribir "El pago total al empleado es: $", pago_total
		Sino
			Escribir "Identificador de empleado inválido."
		FinSi
	Sino
		Escribir "Cantidad de días inválida. Debe estar entre 0 y 6."
FinSi
FinProceso
