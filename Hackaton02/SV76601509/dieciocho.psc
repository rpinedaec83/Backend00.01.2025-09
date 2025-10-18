Algoritmo dieciocho
	Definir cantidad, precioUnitario, totalVenta, ganancia Como Real
	
    Escribir "Ingrese la cantidad de CDs vendidos: "
    Leer cantidad
	
    Si cantidad < 10 Entonces
		precioUnitario <- 10
	SiNo
		Si cantidad < 100 Entonces
			precioUnitario <- 8
		SiNo
			Si cantidad < 500 Entonces
				precioUnitario <- 7
			FinSi
		FinSi
	FinSi
	
    totalVenta <- cantidad * precioUnitario
    ganancia <- totalVenta * 0.0825
	
    Escribir "Precio por unidad: $", precioUnitario
    Escribir "Total de la venta: $", totalVenta
    Escribir "Ganancia del vendedor: $", ganancia
FinAlgoritmo
