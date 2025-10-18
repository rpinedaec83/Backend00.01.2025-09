Proceso aumentoSueldo
    Definir salario, aumento, nuevoSueldo Como Real
    Escribir "Ingrese el salario actual:"
    Leer salario
	
    Si salario > 2000 Entonces
        aumento = salario * 0.05
    Sino
        aumento = salario * 0.10
    FinSi
	
    nuevoSueldo = salario + aumento
	
    Escribir "Aumento: $", aumento
    Escribir "Nuevo sueldo: $", nuevoSueldo
FinProceso