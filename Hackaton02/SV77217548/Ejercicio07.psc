Proceso Ejercicio07
	//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
	//por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
	//tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	Definir tipo Como Cadena
	Definir monto, porcentaje, descuento, total Como Real
	
	Repetir
		Escribir "Tipo de membresia (A/B/C): "
		Leer tipo
		
		tipo <- Mayusculas(tipo)
		
		Si Longitud(tipo) <> 1 O tipo <> "A" O tipo <> "B" O tipo <> "C" Entonces
			Escribir "Ingrese un tipo valido."
		FinSi
		
	Hasta Que tipo = "A" O tipo = "B" O tipo = "C"
	
	Repetir
		Escribir "Monto de la compra: "
		Leer monto
		
		Si monto < 0 Entonces
			Escribir "Monto invalido."
		FinSi
			
	Hasta Que monto >= 0

	Segun tipo Hacer
		"A":
			porcentaje <- 0.10
		"B":
			porcentaje <- 0.15
		"C":
			porcentaje <- 0.20
		De Otro Modo:
			porcentaje <- 0
	FinSegun
		
	descuento <- monto * porcentaje
	total <- monto - descuento
		
	Escribir "Membresia: ", tipo
	Escribir "Descuento: ", porcentaje * 100, "%"
	Escribir "Descuento aplicado: $", descuento
	Escribir "Total a pagar: $", total

FinProceso
