Proceso Ejercicio15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	definir  valorIngresado, valorConvertido Como Real
	definir opcion Como Entero
	definir cmPulgadas,lbKilos como real
	cmPulgadas <- 2.54
	lbKilos <- 2.205
	
	Escribir "Para convertir centimetros a pulgadas escriba 1 y para convertir libras a kilogramos escriba 2"
	leer opcion
	
	
	segun opcion hacer
		1:
			Escribir "Ingrese la cantidad en centímetros (cm):"
            Leer valorIngresado	
			valorConvertido <- valorIngresado / cmPulgadas
			Escribir valorIngresado, " cm son equivalentes a ", valorConvertido, " pulgadas."
		2:
			Escribir "Ingrese la cantidad en libras (lb):"
            Leer valorIngresado
			valorConvertido <- valorIngresado / lbKilos
			Escribir valorIngresado, " lb son equivalentes a ", valorConvertido, " kg."
		De Otro Modo:
            Escribir "Opción no válida. Por favor, seleccione 1 o 2"
	FinSegun
	
FinProceso
