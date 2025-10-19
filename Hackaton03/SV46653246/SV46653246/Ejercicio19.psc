Proceso Ejercicio19
	//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	
  //Cajero (56$/día).
	
    //Servidor (64$/día).
	
    //Preparador de mezclas (80$/día).
	
    //Mantenimiento (48$/día).
	
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	
	Definir numeroTrabajador, salario, dias, totalPago Como Entero
	
	Repetir
	Escribir "_____________________"
	Escribir "Ingrese # de trabajador"
	Escribir "(1) Cajero"
	Escribir "(2) Servidor"
	Escribir "(3) Preparador de mezclas"
	Escribir "(4) Mantenimiento"
	Leer numeroTrabajador
	
	Si numeroTrabajador >= 1 y numeroTrabajador <=4
		Entonces
		Segun numeroTrabajador Hacer
			Caso 1:
				salario <- 56
			Caso 2:
				salario <- 64
			Caso 3:
				salario <- 80
			Caso 4:
				salario <- 48
				
		FinSegun

	Escribir "Ingrese días trabajados"
	Leer dias 
	
	Si dias >= 1 y dias <=6
		Entonces
		totalPago = salario*dias
		Escribir "El total a pagar es: " totalPago 
	SiNo
		Escribir "Ingrese número del 1 Lunes al 6 Sabado"
	FinSi
SiNo
	Escribir "Numero de trabajador invalido"
FinSi


		
	Hasta Que nunca
	
	
FinProceso
