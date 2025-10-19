6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal,
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora,
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso Ejercicio06
	Definir horas_trabajo como Entero
	Escribir "Ingrese el número de horas trabajadas:"
	Leer horas_trabajo
	Si horas_trabajo <= 40 Entonces
		pago = 20 * horas_trabajo
	SiNo
		pago = 20 * 40 + (horas_trabajo-40) * 25
	FinSi	
	Escribir "Pago total: " pago
FinProceso