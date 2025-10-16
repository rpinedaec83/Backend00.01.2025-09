Algoritmo seis
	
	// Hacer un algoritmo en Pseint para ayudar a un trabajador
	// a saber cuál será su sueldo semanal, se sabe que si trabaja
	// 40 horas o menos, se le pagará $20 por hora, pero si trabaja
	// más de 40 horas entonces las horas extras se le pagarán a $25
	// por hora.
	
	Definir horasTrabajadas, sueldo Como Real
	Definir horasExtras, sueldoNormal, sueldoExtra Como Real
	
	Escribir "Ingrese las horas trabajadas en la semana"
	Leer horasTrabajadas
	
	Si horasTrabajadas <= 40 Entonces
		sueldo <- horasTrabajadas * 20
	SiNo
		horasExtras <- horasTrabajadas - 40
		sueldoNormal <- 40 * 20
		sueldoExtra <- horasExtras * 25
		sueldo <- sueldoNormal + sueldoExtra
	FinSi
	
	Escribir "Sueldo: ", sueldo
	
FinAlgoritmo
