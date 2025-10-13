Proceso Ejercicio08
	//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	
	definir nota1,nota2,nota3,promedio Como Real
	
	Escribir "Ingrese la primera nota:"
    Leer nota1
    
    Escribir "Ingrese la segunda nota:"
    Leer nota2
    
    Escribir "Ingrese la tercera nota:"
    Leer nota3
	
	promedio <- (nota1 + nota2 + nota3) / 3
	
	
	si promedio >= 11 Entonces
		Escribir "Felicidades, el estudiante ha aprobado"
	sino 
		escribir "El estudiante ha desaprobado"
	FinSi
	
	
FinProceso
