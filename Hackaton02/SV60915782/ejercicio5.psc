Algoritmo Zapatos
	Leer cantidad
	precio <- 80
	total <- cantidad * precio

	Si cantidad>30 Entonces
		descuento <- total*0.40
	SiNo
		Si cantidad>20 Entonces
			descuento <- total*0.20
		SiNo
			Si cantidad>10 Entonces
				descuento <- total*0.10
			SiNo
				descuento <- 0
			FinSi
		FinSi
	FinSi

	Escribir "Total a pagar: ", total-descuento
FinAlgoritmo
