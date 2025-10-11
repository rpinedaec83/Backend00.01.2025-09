Algoritmo cinco
	
	// Hacer un algoritmo en psint para una tienda de 
	// zapatos que tiene una promocion de descuento
	// para vender al mayor, esta dependera del numero
	// de zapatos que compren. Si son mas de diez, se les
	// dara un 10% de descuento sobre el total de la compra;
	// si el numero de zapatos es mayor de veinte pero menor
	// de treinta. se le otorga un 20% de descuento,
	// y si son mas de 30 zapatos se le otrogara 40%
	// de descuento, El precio de cada zapato es de $80
	
	Definir cantidad, total, descuento, totalPago Como Real
	Definir precio Como Real
	
	precio <- 80
	
	Escribir "Ingrese la cantidad de zapatos comprados: "
	Leer cantidad
	
	total <- cantidad * precio
	
	Si cantidad > 30 Entonces
		descuento <- total * 0.4
	SiNo
		Si cantidad > 20 Entonces
			descuento <- total * 0.2
		SiNo
			Si cantidad > 10 Entonces
				descuento <- total * 0.1
			SiNo
				descuento <- 0
			FinSi
		FinSi
	FinSi
	
	totalPago <- total - descuento
	
    Escribir "Cantidad de zapatos: ", cantidad
//    Escribir "Total sin descuento: $", total
//    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPago
	
FinAlgoritmo
