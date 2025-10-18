Proceso Ejercicio19
	//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
    //Cajero (56$/día).
	//Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
	//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	definir identificador, diasTrabajados Como Entero
	definir salarioDiario, pagoSemanal Como Real
	
	Escribir "Ingrese el número identificador del empleado (1=Cajero, 2=Servidor, 3=Preparador, 4=Mantenimiento) :"
    Leer identificador
	
	Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6):"
    Leer diasTrabajados
	
	Segun identificador Hacer
        1: 
            salarioDiario <- 56
        2: 
            salarioDiario <- 64
        3: 
            salarioDiario <- 80
        4: 
            salarioDiario <- 48
        De Otro Modo:
            Escribir "Error: Identificador de empleado no válido."
            
    FinSegun
	

	Si diasTrabajados >= 1 Y diasTrabajados <= 6 Entonces
            pagoSemanal <- diasTrabajados * salarioDiario
            Escribir "Pago Total a realizar al trabajador es :", pagoSemanal
	
        SiNo
            Escribir "Error: La cantidad de días trabajados (", diasTrabajados, ") es inválida. Debe ser entre 1 y 6."
	FinSi
   
	
FinProceso
