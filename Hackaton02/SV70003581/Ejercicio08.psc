//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

Proceso Ejercicio08
	
	Definir nota_01, nota_02, nota_03 Como Entero
	Definir promedio como Real
	
	Escribir "Ingrese la primera nota: "
	Leer nota_01
	Escribir "Ingrese la segunda nota: "
	Leer nota_02
	Escribir "Ingrese la tercera nota: "
	Leer nota_03
	
	promedio = (nota_01 + nota_02 + nota_03)/3
	
	Si redon(promedio) >= 14 Entonces
		Escribir "Aprobado con: " redon(promedio)
	SiNo
		Escribir "Desaprobado con: " redon(promedio)
	FinSi
	
FinProceso