Proceso Ejercicio_05
	// 5. Hacer un algoritmo en Pseint para una tienda de zapatos que 
	//	tiene una promoción de descuento para vender al mayor, esta 
	//	dependerá del número de zapatos que se compren. Si son más de diez, 
	//	se les dará un 10% de descuento sobre el total de la compra; si el 
	//	número de zapatos es mayor de veinte pero menor de treinta, se le 
	//	otorga un 20% de descuento; y si son más treinta zapatos se otorgará 
	//	un 40% de descuento. El precio de cada zapato es de $80.
	
	Definir cant_zapatos Como Entero
	Escribir "Ingrese cantidad de zapatos a comprar:"
	Leer cant_zapatos
	
	precio_zapato = 80*cant_zapatos
	Si cant_zapatos <= 10 Entonces
		descuento = 0 // Ningun descuento
		Escribir "No aplica ningun descuento."
	SiNo
		Si cant_zapatos > 10 y cant_zapatos <= 20 Entonces
			descuento = 10
			Escribir "Se le aplica descuento del ",descuento,"%."
		SiNo
			Si cant_zapatos > 20 y cant_zapatos < 30 Entonces
				descuento = 20
				Escribir "Se le aplica descuento del ",descuento,"%."
			SiNo
				descuento = 40
				Escribir "Se le aplica descuento del ",descuento,"%."
			FinSi
		FinSi
		
	FinSi
	
	precio_final = precio_zapato*((100-descuento)/100)
	Escribir "Precio Final: ", precio_final
FinProceso
