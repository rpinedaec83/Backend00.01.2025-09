Proceso Ejercicio_06
	// 6.Hacer un algoritmo en Pseint para ayudar a un 
	//trabajador a saber cuál será su sueldo semanal, 
	//se sabe que si trabaja 40 horas o menos, se le pagará 
	//$20 por hora, pero si trabaja más de 40 horas entonces 
	//las horas extras se le pagarán a $25 por hora.
	
	Escribir "Ingresar horas trabajadas en la semana:"
	Leer horas_trabajadas
	
	pago_por_hora = 20
	Si horas_trabajadas > 0 y horas_trabajadas <= 40 Entonces
		pago_de_semana = horas_trabajadas*pago_por_hora
	SiNo
		pago_hora_extra = 25
		horas_no_extra = 40
		horas_extra = horas_trabajadas-40
		pago_sin_extra = horas_no_extra*pago_por_hora
		pago_con_extra = horas_extra*pago_hora_extra
		pago_de_semana = pago_sin_extra+pago_con_extra
	FinSi
	
	Escribir "Su pago de la semana sera de $",pago_de_semana,"."
FinProceso
