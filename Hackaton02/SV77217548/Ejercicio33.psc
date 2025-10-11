Proceso Ejercicio33
	//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Definir respuesta Como Cadena
	
    Repetir
        //Tenemos la logica del programa antes de este escribir
        Escribir "Ejecutando tarea principal..."
		
        Repetir
            Escribir "¿Desea continuar? (S/N): "
            Leer respuesta
            respuesta <- Mayusculas(respuesta)
			Si respuesta <> "S" Y respuesta <> "N" Entonces
				Escribir "Escribir una respuesta valida."
			FinSi
			
        Hasta Que (respuesta = "S") O (respuesta = "N")
		
    Hasta Que respuesta = "N"
	
    Escribir "Programa finalizado."
	
FinProceso
