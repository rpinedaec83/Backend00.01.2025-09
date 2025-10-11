Proceso descuentoZapatos
    Definir cantidad Como Entero
    Definir total, descuento, totalPagar, precio Como Real
    precio = 80
	
    Escribir "Ingrese la cantidad de zapatos a comprar:"
    Leer cantidad
	
    total = cantidad * precio
	
    Si cantidad > 30 Entonces
        descuento = total * 0.40
    Sino
        Si cantidad > 20 Entonces
            descuento = total * 0.20
        Sino
            Si cantidad > 10 Entonces
                descuento = total * 0.10
            Sino
                descuento = 0
            FinSi
        FinSi
    FinSi
	
    totalPagar = total - descuento
	
    Escribir "Total sin descuento: $", total
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinProceso