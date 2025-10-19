Proceso Ejercicio15
	//15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos
	
	Definir numeroOperacion Como Entero
	Definir medida Como Real
	
	Repetir
		

	Escribir "_________________"
	Escribir "Ingrese Operacion"
	Escribir "1 para convertir cm a pulg"
	Escribir "2 para convertir lb a kg"
	Leer numeroOperacion
	
	Si numeroOperacion <1 o numeroOperacion > 2
		Entonces
		Escribir "Ingrese operacion correcta"
		SiNo
		Segun numeroOperacion Hacer
			1: 
				Escribir "Ingrese medida"
				Leer medida 
				Escribir "Es igual a: " medida/2.54 "pulgadas"
			2:
				Escribir "Ingrese peso"
				Leer medida 
				Escribir "Es igual a: " medida/2.205 "kilos"
		FinSegun

	FinSi
Hasta Que nunca
FinProceso
