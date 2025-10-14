Proceso Ejercicio18
	Definir cantidad, precioUnitario, totalVenta, gananciaVendedor Como Real
	
    Escribir "Ingrese la cantidad de CDs que desea comprar: "
    Leer cantidad
	
    Si cantidad <= 9 Entonces
        precioUnitario = 10
    Sino
        Si cantidad <= 99 Entonces
            precioUnitario = 8
        Sino
            Si cantidad <= 499 Entonces
                precioUnitario = 7
            Sino
                precioUnitario = 6
            FinSi
        FinSi
    FinSi
	
    totalVenta = cantidad * precioUnitario
	
    gananciaVendedor = totalVenta * 0.0825
	
    Escribir "Cantidad de CDs: ", cantidad
    Escribir "Precio unitario: ", precioUnitario
    Escribir "Total de la venta: ", totalVenta
    Escribir "Ganancia del vendedor: ", gananciaVendedor
FinProceso
