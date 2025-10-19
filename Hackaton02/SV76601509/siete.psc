Algoritmo siete
	
	//Hacer un algoritmo en Pseint para una tienda
	// de helado que da un descuento por compra a sus
	// clientes con membresía dependiendo de su tipo,
	// sólo existen tres tipos de membresía, tipo A,
	// tipo B y tipo C. Los descuentos son los siguientes:
	
	// Tipo A 10% de descuento 
	// Tipo B 15% de descuento
	// Tipo C 20% de descuento
	
	Definir tipoMembresia Como Caracter
	Definir totalCompra, descuento, totalPago Como Real
	
	Escribir "Ingrese el total de compra"
	Leer totalCompra
	Escribir "Ingrese el tipo de membresia (A, B o C): "
	Leer tipoMembresia
	
	Segun Mayusculas(tipoMembresia) Hacer
		"A":
			descuento <- totalCompra * 0.1
		"B":
			descuento <- totalCompra * 0.15
		"C":
			descuento <- totalCompra * 0.2
		De Otro Modo:
			descuento <- 0
			Escribir  "Tipo de membresia no valido"
	Fin Segun
	
	totalPago <- totalCompra - descuento
	
	Escribir "Descuento aplicado: $", descuento
	Escribir "Total a pagar: $", totalPago
	
FinAlgoritmo
