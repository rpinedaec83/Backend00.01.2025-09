Proceso sueldoSemanal
    Definir horas, sueldo Como Real
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horas
	
    Si horas <= 40 Entonces
        sueldo = horas * 20
    Sino
        sueldo = (40 * 20) + ((horas - 40) * 25)
    FinSi
	
    Escribir "El sueldo semanal es: $", sueldo
FinProceso