Proceso pagoEmpleado
    Definir idEmpleado, dias Como Entero
    Definir pagoDia, totalPagar Como Real
	
    Escribir "Ingrese el numero de identificador del empleado (1-4):"
    Leer idEmpleado
    Escribir "Ingrese los dias trabajados (maximo 6):"
    Leer dias
	
    Segun idEmpleado Hacer
        1:
            pagoDia = 56    // Cajero
        2:
            pagoDia = 64    // Servidor
        3:
            pagoDia = 80    // Preparador de mezclas
        4:
            pagoDia = 48    // Mantenimiento
        De Otro Modo:
            Escribir "Identificador invalido."
            pagoDia = 0
    FinSegun
	
    Si pagoDia > 0 Entonces
        Si dias < 0 O dias > 6 Entonces
            Escribir "Numero de dias invalido (debe ser entre 0 y 6)."
        Sino
            totalPagar = dias * pagoDia
            Escribir "El total a pagar es: $", totalPagar
        FinSi
    FinSi
FinProceso