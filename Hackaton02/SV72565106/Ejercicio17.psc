Proceso Ejercicio17
	
	
	Definir horas, minutos, segundos Como Entero
	
    Escribir "Ingrese la hora (0 - 23): "
    Leer horas
    Escribir "Ingrese los minutos (0 - 59): "
    Leer minutos
    Escribir "Ingrese los segundos (0 - 59): "
    Leer segundos
	
	segundos = segundos + 1
	
	si horas>23 o minutos>59 o segundos>59 Entonces
		Escribir "No valido, vuelva a ingresar los datos. "
	SiNo
		
    Si segundos = 60 Entonces
        segundos = 0
        minutos = minutos + 1
    FinSi
	
    Si minutos = 60 Entonces
        minutos = 0
        horas = horas + 1
    FinSi
	
    Si horas = 24 Entonces
        horas = 0
    FinSi
	
	Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
	FinSi
FinProceso
