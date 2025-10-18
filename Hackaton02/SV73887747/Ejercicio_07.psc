Proceso Ejercicio_07
	// 7. Hacer un algoritmo en Pseint para una tienda de helado 
	//	que da un descuento por compra a sus clientes con membresía 
	//	dependiendo de su tipo, sólo existen tres tipos de membresía, 
	//	tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//		Tipo A 10% de descuento
	//		Tipo B 15% de descuento
	//		Tipo C 20% de descuento
	
	Definir tipo_membresia Como Caracter
    Definir precio, descuento, total Como Real
	
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer tipo_membresia
    Escribir "Ingrese el precio de la compra:"
    Leer precio
	
    tipo_membresia = Mayusculas(tipo_membresia)
	
    Si tipo_membresia = "A" Entonces
        descuento = precio * 0.10
    Sino
        Si tipo_membresia = "B" Entonces
            descuento = precio * 0.15
        Sino
            Si tipo_membresia = "C" Entonces
                descuento = precio * 0.20
            Sino
                descuento = 0
                Escribir "Tipo de membresía no válido. No se aplica descuento."
            FinSi
        FinSi
    FinSi
	
    total = precio - descuento
	
    Escribir "Descuento aplicado: S/", descuento
    Escribir "Total a pagar: S/", total
	
	
FinProceso
