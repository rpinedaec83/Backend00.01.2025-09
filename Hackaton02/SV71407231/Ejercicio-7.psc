Proceso descuentoMembresia
    Definir tipo Como Caracter
    Definir monto, descuento, totalPagar Como Real
	
    Escribir "Ingrese el monto de la compra:"
    Leer monto
    Escribir "Ingrese el tipo de membresia (A, B o C):"
    Leer tipo
	
    Segun tipo Hacer
        "A":
            descuento = monto * 0.10
        "B":
            descuento = monto * 0.15
        "C":
            descuento = monto * 0.20
        De Otro Modo:
            descuento = 0
            Escribir "Tipo de membresia no valido."
    FinSegun
	
    totalPagar = monto - descuento
	
    Escribir "Descuento aplicado: $", descuento
    Escribir "Total a pagar: $", totalPagar
FinProceso