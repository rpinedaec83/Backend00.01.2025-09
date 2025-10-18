Proceso ventaCD
    Definir cantidad, precioUnidad, totalVenta, ganancia Como Real
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
	
    Si cantidad <= 9 Entonces
        precioUnidad = 10
    Sino
        Si cantidad <= 99 Entonces
            precioUnidad = 8
        Sino
            Si cantidad <= 499 Entonces
                precioUnidad = 7
            Sino
                precioUnidad = 6
            FinSi
        FinSi
    FinSi
	
    totalVenta = cantidad * precioUnidad
    ganancia = totalVenta * 0.0825
	
    Escribir "Precio total para el cliente: $", totalVenta
    Escribir "Ganancia para el vendedor: $", ganancia
FinProceso
