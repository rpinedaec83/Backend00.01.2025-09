Proceso Ejercicio07
	Definir compra, descuento, total Como Real
	Definir tipoMembresia Como Caracter
	
	Escribir "Ingrese el monto de su compra: "
	Leer compra
	Escribir "Ingrese su tipo de membresia: "
	Leer tipoMembresia
	
	tipoMembresia = Mayusculas(tipoMembresia)
	
    Segun tipoMembresia Hacer
        "A":
            descuento = compra * 0.10
        "B":
            descuento = compra * 0.15
        "C":
            descuento = compra * 0.20
        De Otro Modo:
            descuento = 0
            Escribir "Tipo de membresía no válido, no se aplica descuento."
    FinSegun
	
	total = compra - descuento
	
	Escribir "El total por su compra es: ", total
	
FinProceso
