Proceso Ejercicio08
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no
	//Se aprueba con 10.0 para adelante en mi universidad.
	Definir n1, n2, n3, promedio, umbral Como Real
	
	umbral <- 10.0
	
	Repetir
		Escribir "Ingrese nota 1:"
		Leer n1
		
		Si n1 < 0 O n1 > 20 Entonces
			Escribir "Ingrese una nota valida"
		FinSi
		
	Hasta Que n1 >= 0 Y n1 <= 20
	
	Repetir
		Escribir "Ingrese nota 2:"
		Leer n2
		
		Si n2 < 0 O n2 > 20 Entonces
			Escribir "Ingrese una nota valida"
		FinSi
		
	Hasta Que n2 >= 0 Y n2 <= 20
	
	Repetir
		Escribir "Ingrese nota 3:"
		Leer n3
		
		Si n3 < 0 O n3 > 20 Entonces
			Escribir "Ingrese una nota valida"
		FinSi
		
	Hasta Que n3 >= 0 Y n3 <= 20
	
	promedio <- (n1 + n2 + n3) / 3
	
	Escribir "Promedio: ", promedio
	
	Si promedio >= umbral Entonces
		Escribir "Estado: APROBADO"
	SiNo
		Escribir "Estado: DESAPROBADO"
	FinSi
	
FinProceso
